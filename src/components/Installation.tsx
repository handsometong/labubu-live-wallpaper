import React, { useState } from 'react';
import { Smartphone, Tablet, Monitor, CheckCircle, AlertCircle, Download } from 'lucide-react';

interface InstallationProps {
  translations: any;
}

const Installation: React.FC<InstallationProps> = ({ translations }) => {
  const [activeTab, setActiveTab] = useState('phone');

  const devices = [
    {
      id: 'phone',
      name: translations.phone,
      icon: Smartphone,
      steps: [
        {
          title: translations.step1,
          description: translations.step1Desc,
          details: 'Tap the download button next to your chosen wallpaper. The file will be saved to your Downloads folder.',
          image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          title: 'Step 2: Open Settings',
          description: 'Go to your phone\'s Settings app and find the Wallpaper or Display section',
          details: 'The exact location may vary by device. Look for "Wallpaper", "Display", or "Personalization" in your settings.',
          image: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          title: 'Step 3: Select Image',
          description: 'Choose "Select from Gallery" and navigate to your downloaded wallpaper',
          details: 'Find the Labubu wallpaper you downloaded and tap on it to select it as your new wallpaper.',
          image: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          title: translations.step3,
          description: translations.step3Desc,
          details: 'Apply the wallpaper to home screen, lock screen, or both. Your device will now display your beautiful Labubu wallpaper!',
          image: 'https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 'tablet',
      name: translations.tablet,
      icon: Tablet,
      steps: [
        {
          title: translations.step1,
          description: translations.step1Desc,
          details: 'Download your chosen wallpaper. Tablets often save files to a Downloads folder or the Pictures directory.',
          image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          title: 'Step 2: Access Display Settings',
          description: 'Open Settings and navigate to Display or Wallpaper settings',
          details: 'On iPads, go to Settings > Wallpaper. On Android tablets, look for Display or Wallpaper in Settings.',
          image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          title: 'Step 3: Choose Custom Image',
          description: 'Select "Choose a New Wallpaper" or "Add from Gallery"',
          details: 'Browse to where you saved the wallpaper file and select it. The tablet will show you a preview.',
          image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          title: translations.step3,
          description: 'Set as wallpaper and enjoy your new Labubu background',
          details: 'Confirm your selection and choose whether to apply to home screen, lock screen, or both.',
          image: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 'desktop',
      name: translations.desktop,
      icon: Monitor,
      steps: [
        {
          title: translations.step1,
          description: translations.step1Desc,
          details: 'Right-click the download link and save to your Pictures folder or Desktop for easy access.',
          image: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          title: 'Step 2: Right-click Desktop',
          description: 'Right-click on an empty area of your desktop',
          details: 'This will open the context menu where you can access personalization options.',
          image: 'https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          title: 'Step 3: Select Personalize',
          description: 'Choose "Personalize" (Windows) or "Change Desktop Background" (Mac)',
          details: 'This opens the wallpaper settings where you can browse for your downloaded image.',
          image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          title: translations.step3,
          description: 'Browse to your downloaded wallpaper and set it as background',
          details: 'Select the Labubu wallpaper file and choose how you want it displayed (fill, fit, stretch, etc.).',
          image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    }
  ];

  const activeDevice = devices.find(device => device.id === activeTab);

  return (
    <section id="install" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {translations.installTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.installSubtitle}
          </p>
        </div>

        {/* Device Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-2xl">
            {devices.map((device) => (
              <button
                key={device.id}
                onClick={() => setActiveTab(device.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === device.id
                    ? 'bg-white text-purple-600 shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <device.icon className="w-5 h-5" />
                <span>{device.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Installation Steps */}
        {activeDevice && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Steps List */}
              <div className="space-y-8">
                {activeDevice.steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {step.description}
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual Guide */}
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-center mb-6">
                      <activeDevice.icon className="w-16 h-16 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                      {activeDevice.name} Installation
                    </h3>
                    <div className="space-y-3">
                      {activeDevice.steps.map((step, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{step.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Need Help?</h4>
                  <p className="text-amber-800 mb-4">
                    If you're having trouble installing wallpapers, here are some common solutions:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-amber-800 text-sm">
                    <li>Make sure you have enough storage space on your device</li>
                    <li>Check that your device supports live wallpapers (for animated versions)</li>
                    <li>Try restarting your device if the wallpaper doesn't appear</li>
                    <li>Contact our support team at support@labubulivewallpaper.com for personal assistance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Download your first Labubu wallpaper now and transform your device in minutes!
                </p>
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center mx-auto">
                  <Download className="w-5 h-5 mr-2" />
                  Browse Wallpapers
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Installation;