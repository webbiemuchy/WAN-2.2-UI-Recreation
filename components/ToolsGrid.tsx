import React from 'react'
import { ExternalLink } from 'lucide-react'

interface Tool {
  id: string
  name: string
  description: string
  icon: string
  color: string
  badge?: string
  isNew?: boolean
}

const tools: Tool[] = [
  {
    id: 'image',
    name: 'Image',
    description: 'AI-powered high-resolution image generation.',
    icon: '🖼️',
    color: 'from-purple-500 to-pink-500',
    badge: 'New',
    isNew: true
  },
  {
    id: 'video',
    name: 'Video',
    description: 'Generate videos with Hudio, Pika, and more.',
    icon: '🎬',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'realtime',
    name: 'Realtime',
    description: 'Live video streaming as a camera or screen share.',
    icon: '📱',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'enhancer',
    name: 'Enhancer',
    description: 'Enhance images and videos and photos.',
    icon: '✨',
    color: 'from-green-500 to-teal-500',
    badge: 'New',
    isNew: true
  },
  {
    id: 'edit',
    name: 'Edit',
    description: 'Intelligent image editing with AI assistance.',
    icon: '✏️',
    color: 'from-indigo-500 to-purple-500',
    badge: 'New',
    isNew: true
  },
  {
    id: 'motion-transfer',
    name: 'Motion Transfer',
    description: 'Transfer motion to static characters.',
    icon: '🎭',
    color: 'from-gray-700 to-gray-900',
    badge: 'New',
    isNew: true
  },
  {
    id: 'train',
    name: 'Train',
    description: 'Train models to replicate your style, products or characters.',
    icon: '🧠',
    color: 'from-yellow-500 to-orange-500'
  }
]

const ToolsGrid = () => {
  return (
    <div className="px-6 py-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Generate</h2>
        <button className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center space-x-1">
          <span>View all</span>
          <ExternalLink size={14} />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="group relative bg-white dark:bg-gray-800 rounded-xl p-4 hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 cursor-pointer"
          >
            {tool.isNew && (
              <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                {tool.badge}
              </div>
            )}
            
            <div className="flex items-center space-x-3 mb-3">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center text-lg shadow-sm`}>
                {tool.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 dark:text-white text-sm">
                  {tool.name}
                </h3>
              </div>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded font-medium">
                  Open
                </span>
              </button>
            </div>

            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToolsGrid
