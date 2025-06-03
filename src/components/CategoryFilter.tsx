import React from 'react';
import { motion } from 'framer-motion';
import { Category } from '../types/gallery';

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange
}) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category.id)}
          className={`px-5 py-2 rounded-full font-medium transition-all ${
            activeCategory === category.id
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
          }`}
        >
          {category.name}
          <span className="ml-2 text-sm opacity-70">({category.count})</span>
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;
