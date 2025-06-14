import React from 'react';
import { Play, Smartphone, Tablet, Monitor } from 'lucide-react';

interface VideoShowcaseProps {
  translations: any;
}

const VideoShowcase: React.FC<VideoShowcaseProps> = ({ translations }) => {
  const showcaseItems = [
    {
      id: 1,
      title: 'Phone Installation Demo',
      description: 'Watch how easy it is to install Labubu wallpapers on your phone',
      thumbnail: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '2:30',
      icon: Smartphone,
      category: 'Installation'
    },
    {
      id: 2,
      title: 'Dynamic Wallpaper Preview',
      description: 'Experience the beautiful animations and transitions',
      thumbnail: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '1:45',
      icon: Monitor,
      category: 'Preview'
    },
    {
      id: 3,
      title: 'Tablet Setup Guide',
      description: 'Complete guide for setting up wallpapers on tablets',
      thumbnail: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '3:15',
      icon: Tablet,
      category: 'Tutorial'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See Labubu Wallpapers in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our demonstration videos to see how beautiful and smooth our wallpapers look on different devices
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-16">
          <div className="relative max-w-5xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative w-full h-full flex items-center justify-center group cursor-pointer">
                <img
                  src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Featured Video"
                  className="w-full h-full object-cover"
                />
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full group-hover:scale-110 transition-transform">
                    <Play className="w-12 h-12 text-white ml-1" />
                  </div>
                </div>

                {/* Video Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <h3 className="text-white text-xl font-bold mb-2">
                      Complete Labubu Wallpaper Experience
                    </h3>
                    <p className="text-white/80 text-sm">
                      See all our wallpapers in action with smooth animations and beautiful transitions
                    </p>
                    <div className="flex items-center mt-3 text-white/70 text-sm">
                      <span>Duration: 4:25</span>
                      <span className="mx-2">•</span>
                      <span>Full HD Quality</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcaseItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Play Button */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  {item.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Device?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of users who have already upgraded their devices with our premium Labubu wallpapers
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Start Your Collection Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;