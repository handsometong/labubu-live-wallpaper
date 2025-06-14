import { Wallpaper, Testimonial, FAQ } from '../types';

export const mockWallpapers: Wallpaper[] = [
  {
    id: '1',
    title: 'Labubu Garden Dream',
    description: 'Beautiful animated garden scene with Labubu',
    thumbnail: 'https://imgs.labubulivewallpaper.com/IMG_4486.JPG',
    preview: 'https://imgs.labubulivewallpaper.com/IMG_4486.JPG',
    downloadUrl: 'https://imgs.labubulivewallpaper.com/IMG_4486.JPG',
    category: 'static',
    deviceType: 'phone',
    resolution: '1080x1920',
    fileSize: '12.5 MB'
  },
  {
    id: '2',
    title: 'Cosmic Labubu',
    description: 'Labubu floating in space with stars',
    thumbnail: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=400',
    preview: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1200',
    downloadUrl: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1920',
    category: 'dynamic',
    deviceType: 'desktop',
    tags: ['space', 'stars', 'animated'],
    resolution: '1920x1080',
    fileSize: '18.2 MB'
  },
  {
    id: '3',
    title: 'Labubu Rainbow',
    description: 'Colorful rainbow background with Labubu',
    thumbnail: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=400',
    preview: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=1200',
    downloadUrl: '#',
    category: 'static',
    deviceType: 'tablet',
    tags: ['rainbow', 'colorful', 'bright'],
    resolution: '1536x2048',
    fileSize: '8.7 MB'
  },
  {
    id: '4',
    title: 'Labubu Sunset',
    description: 'Peaceful sunset scene with Labubu silhouette',
    thumbnail: 'https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg?auto=compress&cs=tinysrgb&w=400',
    preview: 'https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg?auto=compress&cs=tinysrgb&w=1200',
    downloadUrl: '#',
    category: 'static',
    deviceType: 'phone',
    tags: ['sunset', 'peaceful', 'silhouette'],
    resolution: '1080x1920',
    fileSize: '6.3 MB'
  },
  {
    id: '5',
    title: 'Labubu Crystal Cave',
    description: 'Sparkling crystal cave with animated Labubu',
    thumbnail: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=400',
    preview: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1200',
    downloadUrl: '#',
    category: 'dynamic',
    deviceType: 'desktop',
    tags: ['crystal', 'cave', 'sparkle'],
    resolution: '1920x1080',
    fileSize: '22.1 MB'
  },
  {
    id: '6',
    title: 'Underwater Labubu',
    description: 'Labubu swimming in underwater paradise',
    thumbnail: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=400',
    preview: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1200',
    downloadUrl: '#',
    category: 'dynamic',
    deviceType: 'tablet',
    tags: ['underwater', 'ocean', 'swimming'],
    resolution: '1536x2048',
    fileSize: '15.8 MB'
  }
];

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    rating: 5,
    comment: 'Amazing quality wallpapers! The animations are so smooth and the designs are absolutely beautiful. My phone looks incredible now!',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    date: '2024-01-15'
  },
  {
    id: '2',
    name: 'Mike Johnson',
    rating: 5,
    comment: 'I love how easy it is to install these wallpapers. The quality is top-notch and they don\'t drain my battery at all!',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    date: '2024-01-10'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    rating: 5,
    comment: 'The customer support is excellent! They helped me install the wallpapers on all my devices. Highly recommend!',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100',
    date: '2024-01-08'
  },
  {
    id: '4',
    name: 'David Kim',
    rating: 4,
    comment: 'Great collection of wallpapers. The animations are smooth and the quality is excellent. Would love to see more variety!',
    avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100',
    date: '2024-01-05'
  }
];

export const mockFAQs: FAQ[] = [
  {
    id: '1',
    question: 'How do I install live wallpapers on my device?',
    answer: 'Installation is simple! Download the wallpaper file, then follow our device-specific guides. For most devices, you just need to open the file and select "Set as wallpaper" from the options menu.',
    category: 'Installation'
  },
  {
    id: '2',
    question: 'Do live wallpapers drain battery faster?',
    answer: 'Our wallpapers are optimized for battery efficiency. They use minimal resources and won\'t significantly impact your device\'s battery life. The animations are designed to be smooth while consuming minimal power.',
    category: 'Performance'
  },
  {
    id: '3',
    question: 'Are the wallpapers compatible with all devices?',
    answer: 'Yes! Our wallpapers are designed to work on phones, tablets, and desktop computers. We provide different resolutions and formats to ensure compatibility with various screen sizes and operating systems.',
    category: 'Compatibility'
  },
  {
    id: '4',
    question: 'Can I request custom wallpapers?',
    answer: 'Absolutely! We love creating custom wallpapers for our users. Contact our support team with your ideas and we\'ll work with you to create something unique. Custom wallpapers may have additional fees.',
    category: 'Customization'
  },
  {
    id: '5',
    question: 'How often do you add new wallpapers?',
    answer: 'We add new wallpapers to our collection weekly! Follow us on social media or subscribe to our newsletter to be notified when new wallpapers are available.',
    category: 'Updates'
  },
  {
    id: '6',
    question: 'What if I\'m not satisfied with my purchase?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not completely satisfied with your wallpapers, contact our support team and we\'ll provide a full refund, no questions asked.',
    category: 'Refunds'
  }
];