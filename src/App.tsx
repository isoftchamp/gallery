import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera } from 'lucide-react';
import ImageCard from './components/ImageCard';
import Lightbox from './components/Lightbox';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import { galleryImages, categories } from './data/images';
import { Image } from './types/gallery';

function App() {
  const [selectedImage, setSelectedImage] = React.useState<Image | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number>(-1);
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredImages, setFilteredImages] = React.useState<Image[]>(galleryImages);

  React.useEffect(() => {
    let filtered = galleryImages;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(
        img => img.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        img =>
          img.title.toLowerCase().includes(query) ||
          img.description.toLowerCase().includes(query) ||
          img.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    setFilteredImages(filtered);
  }, [activeCategory, searchQuery]);

  const handleImageClick = (image: Image, index: number) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);
  };

  const handlePrevious = () => {
    if (selectedImageIndex > 0) {
      const newIndex = selectedImageIndex - 1;
      setSelectedImage(filteredImages[newIndex]);
      setSelectedImageIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex < filteredImages.length - 1) {
      const newIndex = selectedImageIndex + 1;
      setSelectedImage(filteredImages[newIndex]);
      setSelectedImageIndex(newIndex);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <Camera size={32} className="text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-gray-600"
            >
              {filteredImages.length} images
            </motion.p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Image Grid */}
        <AnimatePresence mode="wait">
          {filteredImages.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredImages.map((image, index) => (
                <ImageCard
                  key={image.id}
                  image={image}
                  index={index}
                  onClick={() => handleImageClick(image, index)}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Camera size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-xl text-gray-500">No images found</p>
              <p className="text-gray-400 mt-2">Try adjusting your filters or search query</p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Lightbox */}
      <Lightbox
        image={selectedImage}
        isOpen={!!selectedImage}
        onClose={() => {
          setSelectedImage(null);
          setSelectedImageIndex(-1);
        }}
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={selectedImageIndex > 0}
        hasNext={selectedImageIndex < filteredImages.length - 1}
      />

      {/* Meta tags */}
      <head>
        <meta property="og:title" content="Modern Image Gallery - Built with ChatAndBuild" />
        <meta property="og:description" content="A beautiful, responsive image gallery with search, filtering, and lightbox features" />
        <meta property="og:image" content="https://cdn.chatandbuild.com/images/preview.png" />
        <meta property="keywords" content="no-code, app builder, conversation-driven development, image gallery, react" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Modern Image Gallery - Built with ChatAndBuild" />
        <meta property="twitter:description" content="A beautiful, responsive image gallery with search, filtering, and lightbox features" />
        <meta property="twitter:image" content="https://cdn.chatandbuild.com/images/preview.png" />
        <meta property="twitter:site" content="@chatandbuild" />
      </head>
    </div>
  );
}

export default App;
