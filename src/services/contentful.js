import { createClient } from 'contentful';

const client = createClient({
  space: process.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const getBlogPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      order: '-fields.date', // Sort by date, newest first
    });

    return response.items.map(item => ({
      id: item.sys.id,
      category: item.fields.category,
      title: item.fields.title,
      description: item.fields.description,
      image: item.fields.featuredImage?.fields?.file?.url 
        ? `https:${item.fields.featuredImage.fields.file.url}`
        : 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      date: new Date(item.fields.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      slug: item.fields.slug,
      content: item.fields.content,
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};