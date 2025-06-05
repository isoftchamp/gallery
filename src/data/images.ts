import { Image } from '../types/gallery';

export const galleryImages: Image[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Golden Retrievers',
    description: 'Two adorable golden retrievers playing together',
    category: 'Animals',
    tags: ['dogs', 'pets', 'golden retriever', 'animals']
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Mountain Lake',
    description: 'Serene mountain lake with perfect reflection',
    category: 'Nature',
    tags: ['landscape', 'mountains', 'lake', 'nature']
  },
  {
    id: '3',
    url: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Healthy Bowl',
    description: 'Colorful and nutritious food bowl',
    category: 'Food',
    tags: ['food', 'healthy', 'bowl', 'vegetables']
  },
  {
    id: '4',
    url: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'City Skyline',
    description: 'Modern city skyline at golden hour',
    category: 'Architecture',
    tags: ['city', 'skyline', 'buildings', 'urban']
  },
  {
    id: '5',
    url: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Curious Kitten',
    description: 'Adorable kitten with bright eyes',
    category: 'Animals',
    tags: ['cat', 'kitten', 'pets', 'animals']
  },
  {
    id: '6',
    url: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Tropical Beach',
    description: 'Paradise beach with crystal clear water',
    category: 'Nature',
    tags: ['beach', 'ocean', 'tropical', 'paradise']
  },
  {
    id: '7',
    url: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Gourmet Pizza',
    description: 'Delicious homemade pizza with fresh ingredients',
    category: 'Food',
    tags: ['pizza', 'food', 'italian', 'cheese']
  },
  {
    id: '8',
    url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Team Meeting',
    description: 'Professional team collaboration',
    category: 'Business',
    tags: ['business', 'team', 'meeting', 'office']
  },
  {
    id: '9',
    url: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Canyon View',
    description: 'Breathtaking canyon landscape',
    category: 'Nature',
    tags: ['canyon', 'landscape', 'nature', 'rocks']
  },
  {
    id: '10',
    url: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Coding Session',
    description: 'Developer working on laptop',
    category: 'Technology',
    tags: ['coding', 'technology', 'laptop', 'programming']
  },
  {
    id: '11',
    url: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Tabby Cat',
    description: 'Beautiful tabby cat portrait',
    category: 'Animals',
    tags: ['cat', 'tabby', 'pets', 'portrait']
  },
  {
    id: '12',
    url: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Modern Building',
    description: 'Contemporary architecture design',
    category: 'Architecture',
    tags: ['architecture', 'modern', 'building', 'design']
  },
  {
    id: '13',
    url: 'https://cdn.chatandbuild.com/users/67dabe5177854791570f31ed/2025-05-12-100526-1747040737656-314842712-1748960130417-854795306.jpg',
    title: 'Custom Upload',
    description: 'User uploaded custom image',
    category: 'Custom',
    tags: ['custom', 'upload', 'user', 'personal']
  }
];

export const categories = [
  { id: 'all', name: 'All', count: galleryImages.length },
  { id: 'animals', name: 'Animals', count: galleryImages.filter(img => img.category === 'Animals').length },
  { id: 'nature', name: 'Nature', count: galleryImages.filter(img => img.category === 'Nature').length },
  { id: 'food', name: 'Food', count: galleryImages.filter(img => img.category === 'Food').length },
  { id: 'architecture', name: 'Architecture', count: galleryImages.filter(img => img.category === 'Architecture').length },
  { id: 'business', name: 'Business', count: galleryImages.filter(img => img.category === 'Business').length },
  { id: 'technology', name: 'Technology', count: galleryImages.filter(img => img.category === 'Technology').length },
  { id: 'custom', name: 'Custom', count: galleryImages.filter(img => img.category === 'Custom').length }
];
