import React from 'react';
import { Sparkles, Zap, Dices as Devices, RefreshCw, Download, HeadphonesIcon, Star, Shield, Clock } from 'lucide-react';

interface FeaturesProps {
  translations: any;
}

const Features: React.FC<FeaturesProps> = ({ translations }) => {
  const features = [
    {
      icon: Sparkles,
      title: translations.highQuality,
      description: translations.highQualityDesc,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: translations.smoothAnimations,
      description: translations.smoothAnimationsDesc,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Devices,
      title: translations.multiDevice,
      description: translations.multiDeviceDesc,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: RefreshCw,
      title: translations.regularUpdates,
      description: translations.regularUpdatesDesc,
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Download,
      title: translations.easyInstall,
      description: translations.easyInstallDesc,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: HeadphonesIcon,
      title: translations.customerSupport,
      description: translations.customerSupportDesc,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const stats = [
    { number: '50+', label: 'Premium Wallpapers', icon: Star },
    { number: '100K+', label: 'Happy Users', icon: Sparkles },
    { number: '99.9%', label: 'Uptime', icon: Shield },
    { number: '24/7', label: 'Support', icon: Clock }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {translations.featuresTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.featuresSubtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Trusted by Labubu Fans Worldwide</h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Join our growing community of satisfied users who have transformed their devices with premium Labubu wallpapers
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 hover:bg-white/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-white mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Premium Over Free?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Sparkles className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Exclusive Designs</h4>
                  <p className="text-gray-600">Hand-crafted wallpapers you won't find anywhere else</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Optimized Performance</h4>
                  <p className="text-gray-600">Battery-efficient animations that don't slow down your device</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Premium Support</h4>
                  <p className="text-gray-600">Get help whenever you need it from our dedicated team</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8">
              <img
                src="https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Premium Features"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold text-gray-900">4.9/5</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Download className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-gray-900">100K+ Downloads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;