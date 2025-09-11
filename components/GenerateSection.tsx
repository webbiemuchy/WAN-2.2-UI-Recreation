import { ChevronRightIcon } from '@heroicons/react/24/outline'

const models = [
  {
    name: 'Image',
    description: 'Generate images with various models',
    badge: 'NEW',
    badgeColor: 'bg-green-500'
  },
  {
    name: 'Video',
    description: 'Generate videos with Hailuo, Film, and more',
    badge: null
  },
  {
    name: 'Realtime',
    description: 'Start generating in a canvas mode',
    badge: null
  },
  {
    name: 'Enhancer',
    description: 'Enhance and upscale images and videos',
    badge: 'NEW',
    badgeColor: 'bg-green-500'
  },
  {
    name: 'Edit',
    description: 'Remove and generate elements with AI',
    badge: 'NEW',
    badgeColor: 'bg-blue-500'
  },
  {
    name: 'Motion Transfer',
    description: 'Transfer motion from video to static characters',
    badge: 'NEW',
    badgeColor: 'bg-blue-500'
  },
  {
    name: 'Midea Linvary',
    description: 'Let your story-one start coming',
    badge: 'NEW',
    badgeColor: 'bg-blue-500'
  },
  {
    name: 'Train',
    description: 'Upload images to replicate your style, products, or characters',
    badge: null
  }
]

export default function GenerateSection() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Generate</h3>
          <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
            View all
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {models.map((model, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  {getModelIcon(model.name)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {model.name}
                    </h4>
                    {model.badge && (
                      <span className={`${model.badgeColor} text-white text-xs px-1.5 py-0.5 rounded font-medium`}>
                        {model.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {model.description}
                  </p>
                </div>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  Open
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function getModelIcon(name: string) {
  const iconClass = "w-5 h-5 text-gray-600 dark:text-gray-300"
  
  switch (name.toLowerCase()) {
    case 'image':
      return <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 10l2-3 2 3h6l-4-6-2 3-4-6z"/></svg>
    case 'video':
      return <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
    case 'realtime':
      return <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
    case 'enhancer':
      return <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3z"/></svg>
    case 'edit':
      return <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
    case 'motion transfer':
      return <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>
    case 'train':
      return <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24"><path d="M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.5-4-8-4s-8 .5-8 4v10.5zM12 17c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm6-7H6V5h12v5z"/></svg>
    default:
      return <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
  }
    }
