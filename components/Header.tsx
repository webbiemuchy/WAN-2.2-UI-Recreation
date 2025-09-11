// Converted from React JavaScript to TypeScript (.tsx)
import React from 'react';

import { Home, Users, Zap, Menu, Sun, Moon, Bell, HelpCircle } from 'lucide-react';

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="sticky top-0 z-50 border-b border-dark-border bg-dark-bg/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left side - Logo and Navigation */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">⚡</span>
            </div>
            <span className="text-white font-semibold text-lg hidden sm:block">Krea AI</span>
          </div>

          {/* Navigation Icons */}
          <nav className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-dark-secondary rounded-lg transition-colors">
              <Home className="w-5 h-5 text-gray-400 hover:text-white" />
            </button>
            <button className="p-2 hover:bg-dark-secondary rounded-lg transition-colors">
              <Users className="w-5 h-5 text-gray-400 hover:text-white" />
            </button>
            <button className="p-2 hover:bg-dark-secondary rounded-lg transition-colors">
              <Zap className="w-5 h-5 text-gray-400 hover:text-white" />
            </button>
          </nav>
        </div>

        {/* Center - Search or Title */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search AI tools..."
              className="w-full bg-dark-secondary border border-dark-border rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-2">
          {/* Gallery Link */}
          <button className="hidden sm:flex items-center space-x-1 px-3 py-2 bg-dark-secondary hover:bg-dark-tertiary rounded-lg transition-colors">
            <span className="text-sm text-gray-300">📱 Gallery</span>
          </button>

          {/* Support Link */}
          <button className="hidden sm:flex items-center space-x-1 px-3 py-2 hover:bg-dark-secondary rounded-lg transition-colors">
            <HelpCircle className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-300">Support</span>
          </button>

          {/* Notifications */}
          <button className="p-2 hover:bg-dark-secondary rounded-lg transition-colors relative">
            <Bell className="w-5 h-5 text-gray-400 hover:text-white" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 hover:bg-dark-secondary rounded-lg transition-colors"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {/* Profile */}
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center cursor-pointer">
            <span className="text-white text-sm font-semibold">U</span>
          </div>

          {/* Mobile menu */}
          <button className="p-2 hover:bg-dark-secondary rounded-lg transition-colors md:hidden">
            <Menu className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
    }
