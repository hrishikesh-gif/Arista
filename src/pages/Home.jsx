import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to Arista Systems
        </h1>
        <p className="text-xl text-gray-300">
          Your trusted technology partner
        </p>
      </div>
    </motion.div>
  );
};

export default Home;