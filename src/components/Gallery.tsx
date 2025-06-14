import React, { useState } from 'react';
import { Search, Filter, Download, Eye, Heart } from 'lucide-react';
import { mockWallpapers } from '../data/mockData';

interface GalleryProps {
  translations: any;
}

const Gallery: React.FC<GalleryProps> = ({ translations }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [deviceFilter, setDeviceFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [selectedWallpaper, setSelectedWallpaper] = useState<any>(null);

  const filteredWallpapers = mockWallpapers.filter(wallpaper => {
    const matchesSearch = wallpaper.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDevice = deviceFilter === 'all' || wallpaper.deviceType === deviceFilter;
    const matchesType = typeFilter === 'all' || wallpaper.category === typeFilter;
    
    return matchesSearch && matchesDevice && matchesType;
  });

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {translations.galleryTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.gallerySubtitle}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={translations.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  value={deviceFilter}
                  onChange={(e) => setDeviceFilter(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white"
                >
                  <option value="all">{translations.allDevices}</option>
                  <option value="phone">{translations.phone}</option>
                  <option value="tablet">{translations.tablet}</option>
                  <option value="desktop">{translations.desktop}</option>
                </select>
              </div>

              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white"
              >
                <option value="all">{translations.allTypes}</option>
                <option value="static">{translations.static}</option>
                <option value="dynamic">{translations.dynamic}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredWallpapers.map((wallpaper) => (
            <div
              key={wallpaper.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-105"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={wallpaper.thumbnail}
                  alt={wallpaper.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => setSelectedWallpaper(wallpaper)}
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="bg-purple-600 text-white px-4 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        {translations.download}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    wallpaper.category === 'dynamic' 
                      ? 'bg-purple-500 text-white' 
                      : 'bg-green-500 text-white'
                  }`}>
                    {wallpaper.category === 'dynamic' ? translations.dynamic : translations.static}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{wallpaper.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">{wallpaper.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{wallpaper.resolution}</span>
                  <span>{wallpaper.fileSize}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            Load More Wallpapers
          </button>
        </div>
      </div>

      {/* Preview Modal */}
      {selectedWallpaper && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="relative">
              <img
                src={selectedWallpaper.preview}
                alt={selectedWallpaper.title}
                className="w-full h-96 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedWallpaper(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedWallpaper.title}</h3>
              <p className="text-gray-600 mb-6">{selectedWallpaper.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <span className="text-sm text-gray-500">Resolution</span>
                  <p className="font-semibold">{selectedWallpaper.resolution}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">File Size</span>
                  <p className="font-semibold">{selectedWallpaper.fileSize}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Device</span>
                  <p className="font-semibold capitalize">{selectedWallpaper.deviceType}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Type</span>
                  <p className="font-semibold capitalize">{selectedWallpaper.category}</p>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download High Quality
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;