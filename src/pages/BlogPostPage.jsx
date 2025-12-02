import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Loader2 } from "lucide-react";
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import Footer from "../component/Footer";

// --- Configuration ---
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

// --- Helper: Generate URL-safe IDs ---
const generateId = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

// --- Helper: Extract Text from Node ---
const getTextFromNode = (node) => {
  if (node.nodeType === 'text') {
    return node.value;
  }
  if (node.content && Array.isArray(node.content)) {
    return node.content.map(getTextFromNode).join('');
  }
  return '';
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'blogPost',
          'fields.slug': slug,
          limit: 1,
        });

        if (response.items.length > 0) {
          const item = response.items[0];
          const postData = {
            id: item.sys.id,
            category: item.fields.category,
            title: item.fields.title,
            description: item.fields.description,
            image: item.fields.featuredImage?.fields?.file?.url 
              ? `https:${item.fields.featuredImage.fields.file.url}`
              : 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
            date: new Date(item.fields.date).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric',
            }),
            content: item.fields.content,
          };

          setPost(postData);

          const extractedHeadings = [];
          let h1Count = 0;
          let h2Count = 0;
          
          if (item.fields.content && item.fields.content.content) {
            item.fields.content.content.forEach((node) => {
              if (node.nodeType === 'heading-1') {
                h1Count++;
                h2Count = 0;
                const text = getTextFromNode(node);
                const id = generateId(text);
                extractedHeadings.push({ 
                  id, 
                  text, 
                  type: node.nodeType,
                  number: `${h1Count}`
                });
              } else if (node.nodeType === 'heading-2') {
                h2Count++;
                const text = getTextFromNode(node);
                const id = generateId(text);
                extractedHeadings.push({ 
                  id, 
                  text, 
                  type: node.nodeType,
                  number: h1Count > 0 ? `${h1Count}.${h2Count}` : `${h2Count}`
                });
              }
            });
          }
          setHeadings(extractedHeadings);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className="font-bold text-gray-900">{text}</span>,
      [MARKS.CODE]: (text) => (
        <code className="bg-gray-100 rounded px-2 py-1 text-sm font-mono text-cyan-700">
          {text}
        </code>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => {
        const id = generateId(getTextFromNode(node));
        return <h1 id={id} className="text-4xl font-extrabold text-gray-900 mb-6 mt-12 scroll-mt-24 clear-none">{children}</h1>;
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        const id = generateId(getTextFromNode(node));
        return <h2 id={id} className="text-3xl font-bold text-gray-800 mb-6 mt-10 border-b border-gray-200 pb-4 scroll-mt-24 clear-none">{children}</h2>;
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        const id = generateId(getTextFromNode(node));
        return <h3 id={id} className="text-2xl font-bold text-gray-800 mb-4 mt-8 scroll-mt-24 clear-none">{children}</h3>;
      },
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="text-gray-700 text-lg leading-8 mb-6">{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-700 text-lg marker:text-cyan-500">
          {children}
        </ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal pl-6 mb-8 space-y-3 text-gray-700 text-lg marker:text-cyan-500 marker:font-bold">
          {children}
        </ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="pl-1">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="border-l-4 border-cyan-500 pl-6 py-4 my-8 italic text-xl text-gray-700 bg-gray-50 rounded-r-lg shadow-sm">
          {children}
        </blockquote>
      ),
      [BLOCKS.TABLE]: (node, children) => (
        <div className="my-8 overflow-x-auto clear-both">
          <table className="border-collapse border-2 border-gray-300 bg-white shadow-md rounded-lg overflow-hidden w-auto mx-auto">
            {children}
          </table>
        </div>
      ),
      [BLOCKS.TABLE_ROW]: (node, children) => {
        const isHeaderRow = node.content.some(cell => cell.nodeType === 'table-header-cell');
        return (
          <tr className={`border-b border-gray-300 ${!isHeaderRow ? 'hover:bg-gray-50 transition-colors' : ''}`}>
            {children}
          </tr>
        );
      },
      [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
        <th className="border border-gray-300 bg-cyan-600 px-4 py-3 text-left text-sm font-bold text-white whitespace-nowrap">
          {children}
        </th>
      ),
      [BLOCKS.TABLE_CELL]: (node, children) => (
        <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
          {children}
        </td>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, title } = node.data.target.fields;
        const url = file.url.startsWith('//') ? `https:${file.url}` : file.url;
        return (
          <div className="w-full my-12 flex flex-col items-center justify-center clear-both"> 
            <img 
              src={url} 
              alt={title} 
              className="rounded-xl border border-gray-200 shadow-lg max-w-full h-auto" 
            />
            {title && <p className="text-center text-sm text-gray-500 mt-2">{title}</p>}
          </div>
        );
      },
      [INLINES.HYPERLINK]: (node, children) => (
        <a 
          href={node.data.uri} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-cyan-600 hover:text-cyan-800 font-medium underline decoration-cyan-200 hover:decoration-cyan-600 transition-all"
        >
          {children}
        </a>
      ),
    },
  };

  if (loading) return <div className="min-h-screen bg-white flex items-center justify-center"><Loader2 className="w-10 h-10 text-cyan-500 animate-spin" /></div>;
  if (!post) return <div className="min-h-screen bg-white text-gray-800 flex items-center justify-center">Post not found</div>;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      
  {/* === HERO SECTION (FINAL — WITH STRONGER BLUR + FIXED SPACING) === */}
<div className="relative w-full 
                h-[500px] sm:h-[520px] md:h-[560px] lg:h-[620px] xl:h-[680px]
                overflow-hidden">

  {/* Restore heavy blur & depth */}
  <div className="absolute inset-0 
                  bg-gradient-to-b from-black/70 via-black/40 to-black/90 
                  backdrop-blur-[6px]   /* Strong blur restored */
                  z-10" />

  {/* Background Image */}
  <img 
    src={post.image} 
    alt={post.title} 
    className="w-full h-full object-cover object-center scale-105"  /* soft zoom for cinematic feel */
  />

  {/* === HERO CONTENT === */}
  <div className="absolute inset-0 z-20 flex items-end">
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
                    pt-28 sm:pt-14 md:pt-8   /* pushes Back To Articles down on phones */
                    pb-12 md:pb-14 lg:pb-20">

      {/* Back Button */}
      <button 
        onClick={() => navigate('/Blog')} 
        className="flex items-center gap-2 text-white/90 hover:text-white 
                   mb-4 sm:mb-6 transition-colors group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
        <span className="text-sm sm:text-base font-medium">Back to Articles</span>
      </button>

      {/* Category Badge */}
      <span className="inline-block px-3 py-1.5 bg-cyan-500 text-white rounded-full
                       text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/30 mb-4">
        {post.category}
      </span>

      {/* Title */}
      <h1 className="text-white font-bold 
                     text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                     leading-tight max-w-5xl mb-3">
        {post.title}
      </h1>

      {/* Date */}
      <div className="flex items-center text-white/85 gap-2 text-sm sm:text-base">
        <Calendar size={16} />
        <span>{post.date}</span>
      </div>

    </div>
  </div>
</div>


      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="relative clearfix">
          
          {/* TABLE OF CONTENTS (FLOATED RIGHT - STATIC) */}
          <div className="hidden lg:block float-right w-[350px] ml-12 mb-8 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border-2 border-cyan-100 shadow-lg">
            <h3 className="text-gray-900 font-bold text-lg mb-4 pb-2 border-b-2 border-cyan-300">
              Table of Contents
            </h3>
            
            {headings.length > 0 ? (
              <nav className="flex flex-col space-y-1">
                {headings.map((heading, index) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                      setActiveId(heading.id);
                    }}
                    className={`
                      flex items-start gap-2.5 text-sm leading-snug transition-all duration-200 py-1.5 px-2.5 rounded-lg group
                      ${activeId === heading.id 
                        ? 'bg-cyan-600 text-white shadow-md' 
                        : 'text-cyan-700 hover:bg-cyan-100'}
                      ${heading.type === 'heading-2' ? 'ml-6' : ''} 
                    `}
                  >
                    <span className={`flex-shrink-0 font-bold min-w-[1.75rem] ${
                      activeId === heading.id ? 'text-white' : 'text-cyan-600'
                    }`}>
                      {heading.number}.
                    </span>
                    <span className={`flex-1 ${
                      activeId === heading.id 
                        ? 'text-white font-semibold' 
                        : 'text-cyan-800 group-hover:text-cyan-900'
                    } ${heading.type === 'heading-1' ? 'font-semibold' : ''}`}>
                      {heading.text}
                    </span>
                  </a>
                ))}
              </nav>
            ) : (
              <p className="text-cyan-400 text-sm italic">No headings found.</p>
            )}
          </div>

          {/* INTRO DESCRIPTION */}
          {post.description && (
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 font-light border-l-4 border-cyan-500 pl-4 sm:pl-6 leading-relaxed bg-gray-50 py-4 pr-4 rounded-r-lg">
              {post.description}
            </p>
          )}

          {/* MAIN CONTENT */}
          <div className="prose prose-base sm:prose-lg max-w-none text-gray-700">
            {documentToReactComponents(post.content, richTextOptions)}
          </div>

        </div>
      </div>
{/* === PURPLE MODERN CTA SECTION === */}
<div className="relative w-full bg-black py-12 px-4 sm:px-6 mt-20 overflow-hidden">
  {/* Changed py-20 to py-12 for reduced overall height */}

  {/* Ambient Background Glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

  <div
    className="
      relative z-10
      max-w-6xl mx-auto
      /* Removed rounded-3xl to make it rectangular */
      p-6 md:p-8 /* Reduced padding from p-8 md:p-12 to shrink height */
      grid grid-cols-1 lg:grid-cols-2
      gap-8 lg:gap-12 items-center
      bg-gradient-to-br from-[#1a1025]/90 to-[#050208]/90
      backdrop-blur-2xl
      border border-purple-500/30
      shadow-[0_0_80px_-20px_rgba(139,92,246,0.3)]
    "
  >
    {/* TEXT SECTION */}
    <div className="space-y-6 text-center lg:text-left">
      <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
        Ready to Take Your Business to the Next Level?
      </h2>

      <p className="text-purple-200/70 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
        Partner with our expert offshore teams and unlock precision, execution,
        and accelerated growth powered by innovation.
      </p>

      <div className="flex justify-center lg:justify-start pt-2">
        <button
          className="
            group
            bg-gradient-to-r from-purple-600 to-indigo-600
            hover:from-purple-500 hover:to-indigo-500
            text-white
            font-bold
            text-base sm:text-lg
            px-8 py-3
            rounded-xl
            transition-all
            duration-300
            shadow-lg shadow-purple-900/40
            hover:shadow-purple-600/60
            hover:-translate-y-1
          "
        >
          Build Your Dream Team
        </button>
      </div>
    </div>

    {/* IMAGE SECTION */}
    {/* Reduced min-heights here */}
    <div className="relative flex justify-center w-full h-full min-h-[250px] lg:min-h-[350px]">
      {/* Decorative Glow behind image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-500/30 blur-3xl rounded-full -z-10"></div>

      <img
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
        alt="Abstract 3D Purple Structure"
        className="
          w-full
          h-full
          max-h-[350px] /* Reduced max-height from 400px */
          rounded-2xl
          shadow-2xl
          shadow-purple-900/50
          object-cover
          border border-white/10
          bg-purple-900/20
        "
      />
    </div>
  </div>
</div>
<Footer/>
    </div>
  );
};

export default BlogPostPage;