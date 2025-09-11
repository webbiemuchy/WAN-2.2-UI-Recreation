// Converted from React JavaScript to TypeScript (.tsx)
import React from 'react';
interface HeroSectionProps { [key: string]: any }


import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection: React.FC<HeroSectionProps> = (props) => {
  return (
    <section className="px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Cards Carousel */}
        <div className="relative mb-8">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {/* WAN 2.2 Card */}
            <div className="flex-none w-80 sm:w-96 h-64 relative rounded-2xl overflow-hidden group cursor-pointer hover-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/30">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="w-full h-full bg-cover bg-center" 
                       style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-xs text-gray-300 bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                    GENERATIVE MODEL
                  </span>
                </div>
                
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">WAN 2.2</h2>
                  <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                    WAN 2.2 Image generation<br />
                    Generate complex images with the brand new and optimal<br />
                    WAN 2.2 model. Enhanced prompt adherence and new high...
                  </p>
                  <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-all duration-200">
                    Try WAN 2.2
                  </button>
                </div>
              </div>
            </div>

            {/* Open Source Card */}
            <div className="flex-none w-80 sm:w-96 h-64 relative rounded-2xl overflow-hidden group cursor-pointer hover-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-600/30">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {/* Whiskey glass background */}
                <div className="absolute right-4 top-4 w-32 h-40 opacity-60">
                  <div className="w-full h-full bg-gradient-to-b from-amber-300 to-amber-600 rounded-lg transform rotate-12 shadow-2xl"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-xs text-gray-300 bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                    OS MODEL
                  </span>
                </div>
                
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">Open Source</h2>
                  <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                    FLUX.1 Krea<br />
                    Ultra-high fidelity upscales on your FLUX.1 Krea model outputs. Search,<br />
                    download and run our model engines, read the technical papers or...
                  </p>
                </div>
              </div>
            </div>

            {/* Additional card placeholder */}
            <div className="flex-none w-80 sm:w-96 h-64 relative rounded-2xl overflow-hidden group cursor-pointer hover-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-600/30">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-xs text-gray-300 bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                    COMING SOON
                  </span>
                </div>
                
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">New Model</h2>
                  <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                    Next generation AI model<br />
                    Experience the future of AI generation with enhanced<br />
                    capabilities and improved performance...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Navigation */}
          <button className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel dots */}
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
                  }


export default HeroSection;
