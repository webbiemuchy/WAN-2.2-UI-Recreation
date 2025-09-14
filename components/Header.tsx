"use client"

import React from 'react'
import { useTheme } from 'next-themes'
import { 
  Home, 
  MessageSquare, 
  FileText, 
  Zap, 
  Check, 
  Bell, 
  Square, 
  Sun, 
  Moon,
  User
} from 'lucide-react'

const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      {/* Left section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md"></div>
          <span className="font-medium text-gray-600 dark:text-gray-300 text-sm">
            businesscontentcreator
          </span>
        </div>
      </div>

      {/* Navigation icons */}
      <div className="flex items-center space-x-1">
        <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
          <Home size={20} />
        </button>
        <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
          <MessageSquare size={20} />
        </button>
        <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
          <FileText size={20} />
        </button>
        <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
          <Zap size={20} />
        </button>
        <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
          <Check size={20} />
        </button>
        <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
          <Bell size={20} />
        </button>
        <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
          <Square size={20} />
        </button>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-gray-600 dark:text-gray-300">Gallery</span>
          <span className="text-gray-600 dark:text-gray-300">Support</span>
          <Bell size={16} className="text-gray-600 dark:text-gray-300" />
        </div>
        
        {/* Theme toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Avatar */}
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
          <User size={16} className="text-white" />
        </div>
      </div>
    </header>
  )
}

export default Header
