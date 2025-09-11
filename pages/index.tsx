import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

// Types
interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  isNew?: boolean;
  action: string;
}

interface FeaturedCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge?: string;
  gradient: string;
}

// Custom Icons as React Components
const ImageIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21,15 16,10 5,21"/>
  </svg>
);

const VideoIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="23 7 16 12 23 17 23 7"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);

const MusicIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="9 18V5l12-2v13"/>
    <circle cx="6" cy="18" r="3"/>
    <circle cx="18" cy="16" r="3"/>
  </svg>
);

const CodeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="16,18 22,12 16,6"/>
    <polyline points="8,6 2,12 8,18"/>
  </svg>
);

const TransferIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="17,1 21,5 17,9"/>
    <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
    <polyline points="7,23 3,19 7,15"/>
    <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
  </svg>
);

const TrainIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <rect x="9" y="9" width="6" height="6"/>
    <path d="M9 1v3"/>
    <path d="M15 1v3"/>
    <path d="M9 20v3"/>
    <path d="M15 20v3"/>
    <path d="M20 9h3"/>
    <path d="M20 14h3"/>
    <path d="M1 9h3"/>
    <path d="M1 14h3"/>
  </svg>
);

const EnhancerIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
  </svg>
);

const RealtimeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

// Main Component
const HomePage: NextPage = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    // Auto-slide carousel
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const featuredCards: FeaturedCard[] = [
    {
      id: '1',
      title: 'Source',
      subtitle: 'Research smarter',
      description: 'Find credible sources on your research inputs. Search, analyze, and cite with our model engines, and generate research papers or...',
      image: '/api/placeholder/300/200',
      gradient: 'from-amber-600 to-orange-800'
    },
    {
      id: '2',
      title: 'New Model',
      subtitle: 'Next generation AI',
      description: 'Experience the future with enhanced capabilities and improved performance',
      image: '/api/placeholder/300/200',
      badge: 'COMING SOON',
      gradient: 'from-emerald-600 to-teal-800'
    }
  ];

  const tools: Tool[] = [
    {
      id: '1',
      name: 'Image',
      description: 'Create images with state-of-the-art generation.',
      icon: 'image',
      isNew: true,
      action: 'Open'
    },
    {
      id: '2',
      name: 'Video',
      description: 'Generate videos with Kling, Flux, and more.',
      icon: 'video',
      action: 'Open'
    },
    {
      id: '3',
      name: 'Realtime',
      description: 'Experience reasoning in a camera',
      icon: 'realtime',
      action: 'Open'
    },
    {
      id: '4',
      name: 'Enhancer',
      description: 'Enhance, upscale and edit images and videos',
      icon: 'enhancer',
      isNew: true,
      action: 'Open'
    },
    {
      id: '5',
      name: 'Edit',
      description: 'Edit images and videos with AI-powered photo and generative.',
      icon: 'edit',
      isNew: true,
      action: 'Open'
    },
    {
      id: '6',
      name: 'Motion Lipsync',
      description: 'Lip sync any video. Make it sing.',
      icon: 'motion',
      isNew: true,
      action: 'Open'
    },
    {
      id: '7',
      name: 'Motion Transfer',
      description: 'Transfer motion between people or create animations.',
      icon: 'transfer',
      isNew: true,
      action: 'Open'
    },
    {
      id: '8',
      name: 'Train',
      description: 'Train your own AI model to replicate your style, products, or characters.',
      icon: 'train',
      action: 'Open'
    }
  ];

  const getIcon = (iconType: string): React.ReactNode => {
    const iconClass = "w-6 h-6 text-current";
    switch (iconType) {
      case 'image': return <ImageIcon className={iconClass} />;
      case 'video': return <VideoIcon className={iconClass} />;
      case 'realtime': return <RealtimeIcon className={iconClass} />;
      case 'enhancer': return <EnhancerIcon className={iconClass} />;
      case 'edit': return <CodeIcon className={iconClass} />;
      case 'motion': return <MusicIcon className={iconClass} />;
      case 'transfer': return <TransferIcon className={iconClass} />;
      case 'train': return <TrainIcon className={iconClass} />;
      default: return <ImageIcon className={iconClass} />;
    }
  };

  return (
    <>
      <Head>
        <title>AI Tools Dashboard</title>
        <meta name="description" content="AI-powered tools dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}>
        {/* Header */}
        <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${
          isDarkMode 
            ? 'bg-gray-900/80 border-gray-800' 
            : 'bg-white/80 border-gray-200'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo/Brand */}
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <span className="font-semibold text-lg">Krea AI</span>
              </div>

              {/* Navigation */}
              <div className="flex items-center space-x-6">
                <button className={`px-4 py-2 rounded-lg transition-colors ${
                  isDarkMode 
                    ? 'hover:bg-gray-800 text-gray-300' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}>
                  Gallery
                </button>
                <button className={`px-4 py-2 rounded-lg transition-colors ${
                  isDarkMode 
                    ? 'hover:bg-gray-800 text-gray-300' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}>
                  Support
                </button>
                
                {/* Dark/Light Mode Toggle */}
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>

                {/* Profile */}
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">U</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Featured Cards Carousel */}
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredCards.map((card, index) => (
                  <div key={card.id} className="w-full flex-shrink-0">
                    <div className={`relative h-64 bg-gradient-to-br ${card.gradient} rounded-2xl p-8 text-white overflow-hidden`}>
                      {card.badge && (
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                          {card.badge}
                        </span>
                      )}
                      <h2 className="text-4xl font-bold mb-2">{card.title}</h2>
                      <p className="text-xl opacity-90 mb-4">{card.subtitle}</p>
                      <p className="text-base opacity-80 max-w-md leading-relaxed">
                        {card.description}
                      </p>
                      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                        <div className="w-full h-full bg-white/10 transform rotate-12 scale-110"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {featuredCards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentSlide === index 
                        ? 'bg-blue-500' 
                        : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Generate Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-1">Generate</h3>
                <p className={`text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Create with AI-powered tools
                </p>
              </div>
              <button className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'text-blue-400 hover:bg-gray-800' 
                  : 'text-blue-600 hover:bg-blue-50'
              }`}>
                View all →
              </button>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool) => (
                <div
                  key={tool.id}
                  className={`relative p-6 rounded-xl border transition-all duration-200 hover:scale-105 cursor-pointer ${
                    isDarkMode
                      ? 'bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-gray-600'
                      : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  {tool.isNew && (
                    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  
                  <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${
                    isDarkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {getIcon(tool.icon)}
                  </div>
                  
                  <h4 className="font-semibold text-lg mb-2">{tool.name}</h4>
                  <p className={`text-sm leading-relaxed mb-4 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {tool.description}
                  </p>
                  
                  <button className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    isDarkMode
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}>
                    {tool.action}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Brand */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-center space-x-3">
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                curated by
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded">
                </div>
                <span className="font-bold text-lg">Mobbin</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;
