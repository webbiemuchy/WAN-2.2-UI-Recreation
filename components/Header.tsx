"use client"

import React from "react"
import { useTheme } from "next-themes"
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
  User,
} from "lucide-react"

const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      {/* Top row: Logo + Title */}
      <div className="flex items-center space-x-2 min-w-0 mb-2 sm:mb-0">
        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md shrink-0"></div>
        <span className="font-medium text-gray-600 dark:text-gray-300 text-sm truncate max-w-[120px] sm:max-w-[200px]">
          businesscontentcreator
        </span>
      </div>

      {/* Middle row: Navigation icons */}
      <div className="flex items-center space-x-1 overflow-x-auto sm:overflow-visible scrollbar-hide py-1 -mx-2 px-2 sm:mx-0 sm:px-0">
        {[Home, MessageSquare, FileText, Zap, Check, Bell, Square].map(
          (Icon, idx) => (
            <button
              key={idx}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 shrink-0"
            >
              <Icon size={20} />
            </button>
          )
        )}
      </div>

      {/* Bottom row (right side): Links + Theme + Avatar */}
      <div className="flex items-center space-x-3 mt-2 sm:mt-0">
        {/* Hidden on mobile, visible on larger screens */}
        <div className="hidden sm:flex items-center space-x-2 text-sm">
          <span className="text-gray-600 dark:text-gray-300">Gallery</span>
          <span className="text-gray-600 dark:text-gray-300">Support</span>
          <Bell size={16} className="text-gray-600 dark:text-gray-300" />
        </div>

        {/* Theme toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Avatar */}
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shrink-0">
          <User size={16} className="text-white" />
        </div>
      </div>
    </header>
  )
}

export default Header
