import React, { useState } from 'react'
import { Search, Grid3x3, Grid2x2, Maximize2, X, Heart, Download, Share2 } from 'lucide-react'

interface Image {
  id: number
  url: string
  title: string
  photographer: string
  likes: number
  category: string
}

const galleryImages: Image[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=600&fit=crop',
    title: 'Mountain Vista',
    photographer: 'Alex Johnson',
    likes: 1234,
    category: 'Nature'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1682687218608-5e2522b04673?w=800&h=600&fit=crop',
    title: 'Urban Architecture',
    photographer: 'Sarah Chen',
    likes: 892,
    category: 'Architecture'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&h=600&fit=crop',
    title: 'Ocean Waves',
    photographer: 'Mike Rivera',
    likes: 2341,
    category: 'Nature'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=800&h=600&fit=crop',
    title: 'City Lights',
    photographer: 'Emma Wilson',
    likes: 1567,
    category: 'Urban'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=800&h=600&fit=crop',
    title: 'Desert Sunset',
    photographer: 'James Park',
    likes: 3210,
    category: 'Nature'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1682687220989-cbbd30be37e9?w=800&h=600&fit=crop',
    title: 'Modern Interior',
    photographer: 'Lisa Brown',
    likes: 987,
    category: 'Architecture'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1682687221038-404cb8830901?w=800&h=600&fit=crop',
    title: 'Forest Path',
    photographer: 'David Kim',
    likes: 2876,
    category: 'Nature'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1682687220015-186f63b8850a?w=800&h=600&fit=crop',
    title: 'Street Photography',
    photographer: 'Anna Martinez',
    likes: 1432,
    category: 'Urban'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1682687218982-6c508299e107?w=800&h=600&fit=crop',
    title: 'Minimalist Design',
    photographer: 'Tom Anderson',
    likes: 2109,
    category: 'Architecture'
  },
  {
    id: 10,
    url: 'https://cdn.chatandbuild.com/users/67dabe5177854791570f31ed/2025-05-12-100526-1747040737656-314842712-1748960632980-602171298.jpg',
    title: 'Custom Creation',
    photographer: 'Gallery User',
    likes: 156,
    category: 'Urban'
  }
]

const categories = ['All', 'Nature', 'Architecture', 'Urban']

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [gridSize, setGridSize] = useState<'large' | 'small'>('large')
  const [selectedImage, setSelectedImage] = useState<Image | null>(null)
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set())

  const filteredImages = galleryImages.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.photographer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || image.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleLike = (imageId: number) => {
    setLikedImages(prev => {
      const newLikes = new Set(prev)
      if (newLikes.has(imageId)) {
        newLikes.delete(imageId)
      } else {
        newLikes.add(imageId)
      }
      return newLikes
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Grid3x3 className="h-8 w-8 text-indigo-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Gallery</h1>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search images..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Grid Size Toggle */}
            <button
              onClick={() => setGridSize(gridSize === 'large' ? 'small' : 'large')}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {gridSize === 'large' ? <Grid2x2 className="h-6 w-6" /> : <Grid3x3 className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`grid gap-6 ${
          gridSize === 'large' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        }`}>
          {filteredImages.map(image => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-white"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  <p className="text-gray-200 text-sm">by {image.photographer}</p>
                  <div className="flex items-center mt-2">
                    <Heart 
                      className={`h-5 w-5 ${likedImages.has(image.id) ? 'fill-red-500 text-red-500' : 'text-white'}`}
                    />
                    <span className="text-white text-sm ml-2">
                      {image.likes + (likedImages.has(image.id) ? 1 : 0)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No images found matching your criteria.</p>
          </div>
        )}
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="max-w-6xl w-full">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="mt-4 bg-white rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h2>
                  <p className="text-gray-600 mt-1">by {selectedImage.photographer}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                    {selectedImage.category}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(selectedImage.id)
                    }}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Heart 
                      className={`h-5 w-5 ${likedImages.has(selectedImage.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                    />
                    <span className="text-gray-700">
                      {selectedImage.likes + (likedImages.has(selectedImage.id) ? 1 : 0)}
                    </span>
                  </button>
                  
                  <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <Download className="h-5 w-5 text-gray-600" />
                  </button>
                  
                  <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
