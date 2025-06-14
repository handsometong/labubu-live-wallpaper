import React from 'react';
import { Star, Quote } from 'lucide-react';
import { mockTestimonials } from '../data/mockData';

interface TestimonialsProps {
  translations: any;
}

const Testimonials: React.FC<TestimonialsProps> = ({ translations }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {translations.testimonialsTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.testimonialsSubtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {mockTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-purple-600" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-sm text-gray-500">
                  {testimonial.rating}.0
                </span>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                "{testimonial.comment}"
              </blockquote>

              {/* User Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">
                    {new Date(testimonial.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="text-5xl font-bold text-gray-900 mr-2">4.9</div>
              <div>
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-500">Based on 1,248 reviews</p>
              </div>
            </div>
            <p className="text-gray-600">
              Trusted by thousands of Labubu fans worldwide
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Join Our Community</h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Connect with other Labubu enthusiasts, share your favorite wallpapers, and get exclusive updates
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-white/80">Community Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-white/80">Wallpapers Shared</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">Daily</div>
                <div className="text-white/80">New Content</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Join Discord Community
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors">
                Follow on Social Media
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;