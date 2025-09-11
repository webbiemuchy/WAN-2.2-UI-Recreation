// Converted from React JavaScript to TypeScript (.tsx)
import React from 'react';
interface ToolsSectionProps { [key: string]: any }


import { ExternalLink } from 'lucide-react';

const ToolsSection: React.FC<ToolsSectionProps> = (props) => {
  const tools = [
    {
      name: "Image",
      description: "Create images with state-of-the-art generation.",
      icon: "🎨",
      badge: "NEW",
      badgeColor: "bg-blue-500"
    },
    {
      name: "Video", 
      description: "Generate videos with Kling, Flux, and more.",
      icon: "🎬",
      badge: null
    },
    {
      name: "Realtime",
      description: "Live video rendering as a camera stream.",
      icon: "📡",
      badge: null
    },
    {
      name: "Enhancer",
      description: "Upscale and enhance images and videos.",
      icon: "✨",
      badge: "NEW",
      badgeColor: "bg-green-500"
    },
    {
      name: "Edit",
      description: "Edit your images with AI without prompts and generations.",
      icon: "✏️",
      badge: "NEW",
      badgeColor: "bg-blue-500"
    },
    {
      name: "Mobile Livemode",
      description: "Try live video rendering on your device now.",
      icon: "📱",
      badge: "NEW",
      badgeColor: "bg-purple-500"
    },
    {
      name: "Motion Transfer",
      description: "Make characters move on single image inputs.",
      icon: "🎭",
      badge: "NEW", 
      badgeColor: "bg-red-500"
    },
    {
      name: "Train",
      description: "Train your own model to replicate your style, products, or characters.",
      icon: "🤖",
      badge: null
    }
  ];

  return (
    <section className="px-4 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Generate</h2>
            <p className="text-gray-400 text-sm">Create with AI-powered tools</p>
          </div>
          <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center space-x-1 transition-colors">
            <span>View all</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-dark-secondary border border-dark-border rounded-xl p-4 hover:border-purple-500/50 hover:bg-dark-tertiary transition-all duration-200 cursor-pointer group hover-glow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-dark-tertiary rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-sm">{tool.name}</h3>
                    {tool.badge && (
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium text-white mt-1 ${tool.badgeColor || 'bg-blue-500'}`}>
                        {tool.badge}
                      </span>
                    )}
                  </div>
                </div>
                <button className="text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                  Open
                </button>
              </div>
              
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                {tool.description}
              </p>
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Gallery</h2>
              <p className="text-gray-400 text-sm">Explore community creations</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center space-x-1 transition-colors">
                <span>📱 User</span>
              </button>
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center space-x-1 transition-colors">
                <span>🖼️ Photos</span>
              </button>
            </div>
          </div>

          {/* Gallery Grid Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-dark-secondary rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer group"
              >
                <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <span className="text-4xl opacity-30">🎨</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export default ToolsSection;
