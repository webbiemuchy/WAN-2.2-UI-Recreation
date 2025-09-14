import React from 'react'
import { User, Heart } from 'lucide-react'

const GallerySection = () => {
  return (
    <div className="px-6 py-6 border-t border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Gallery</h2>
        <div className="flex items-center space-x-4">
          <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 flex items-center space-x-1">
            <User size={14} />
            <span>User</span>
          </button>
          <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 flex items-center space-x-1">
            <Heart size={14} />
            <span>Prompt</span>
          </button>
        </div>
      </div>

      {/* Krea AI Footer */}
      <div className="bg-black dark:bg-gray-900 rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-sm"></div>
          </div>
          <span className="text-white font-semibold text-lg">Krea AI</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 text-sm">curated by</span>
          <div className="flex items-center space-x-2">
            <span className="text-white font-semibold">Mobbin</span>
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <span className="text-black text-xs font-bold">M</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GallerySection
