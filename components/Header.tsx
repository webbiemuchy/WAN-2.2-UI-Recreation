import { useState } from 'react'
import { 
  HomeIcon, 
  ChatBubbleLeftRightIcon, 
  PencilIcon, 
  CheckIcon, 
  ExclamationTriangleIcon,
  Squares2X2Icon,
  QuestionMarkCircleIcon,
  BellIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline'

interface HeaderProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-gray-600 dark:text-gray-300 text-sm">krea.aiwebkitbuild</span>
            </div>
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavItem icon={HomeIcon} active />
            <NavItem icon={ChatBubbleLeftRightIcon} />
            <NavItem icon={PencilIcon} />
            <NavItem icon={CheckIcon} />
            <NavItem icon={ExclamationTriangleIcon} />
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
            <Squares2X2Icon className="h-5 w-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
            <QuestionMarkCircleIcon className="h-5 w-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
            <BellIcon className="h-5 w-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
            <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  )
}

function NavItem({ icon: Icon, active = false }: { icon: any, active?: boolean }) {
  return (
    <button className={`p-2 rounded-lg transition-colors ${
      active 
        ? 'bg-gray-100 dark:bg-gray-800' 
        : 'hover:bg-gray-50 dark:hover:bg-gray-800'
    }`}>
      <Icon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
    </button>
  )
}
