import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Heart, Download } from 'lucide-react';
import { Image } from '../types/gallery';

interface ImageCardProps {
  image: Image;
  onClick: () => void;
  index: number;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick, index }) => {
  const [isLiked, setIsLiked] = React.useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    // In a real app, this would trigger a download
    console.log('Download:', image.title);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image.url}
          alt={image.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
          <p className="text-white/80 text-sm line-clamp-2">{image.description}</p>
          
          <div className="flex items-center gap-3 mt-3">
            <button
              onClick={handleLike}
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              <Heart
                size={18}
                className={`transition-colors ${
                  isLiked ? 'fill-red-500 text-red-500' : 'text-white'
                }`}
              />
            </button>
            <button
              onClick={handleDownload}
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              <Download size={18} className="text-white" />
            </button>
            <div className="ml-auto flex items-center gap-1 text-white">
              <Eye size={16} />
              <span className="text-sm">View</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Category Badge */}
      <div className="absolute top-3 left-3">
        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
          {image.category}
        </span>
      </div>
    </motion.div>
  );
};

export default ImageCard;
