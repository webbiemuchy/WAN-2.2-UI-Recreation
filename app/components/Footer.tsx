// Converted from React JavaScript to TypeScript (.tsx)
import React from 'react';
interface FooterProps { [key: string]: any }


const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className="border-t border-dark-border bg-dark-bg/50 backdrop-blur-sm mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          {/* Left - Krea AI branding */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">🤖</span>
              </div>
              <span className="text-white font-semibold">Krea AI</span>
            </div>
            <span className="text-gray-400 text-sm">curated by</span>
            <div className="flex items-center space-x-2">
              <span className="text-white font-semibold">🏢 Mobbin</span>
            </div>
          </div>

          {/* Right - Links */}
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-4 border-t border-dark-border">
          <p className="text-center text-xs text-gray-500">
            © 2024 Krea AI. All rights reserved. Powered by cutting-edge AI technology.
          </p>
        </div>
      </div>
    </footer>
  );
          }


export default Footer;
