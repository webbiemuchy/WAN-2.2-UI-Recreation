import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const HeroCards = () => {
  return (
    <div className="relative px-6 py-8">
      <div className="flex space-x-6 overflow-hidden">
        {/* WAN 2.2 Card */}
        <div className="flex-none w-96 h-64 rounded-2xl overflow-hidden relative bg-gradient-to-r from-orange-100 to-blue-100 dark:from-orange-900/20 dark:to-blue-900/20">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='a' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23f0f0f0'/%3E%3Cpath d='M0 0h20v20H0z' fill='none' stroke='%23e0e0e0' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23a)'/%3E%3C/svg%3E")`
            }}
          />
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                  NEURAL MODEL
                </span>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">
                  WAN 2.2
                </h2>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-600 dark:text-gray-300">WAN</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                WAN 2.2 Image generation
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Generate complex images with the latest new and channel WAN 2.2 model. Enhanced prompt adherence and lifelike...
              </p>
              <button className="bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-gray-800 transition-colors">
                Try WAN 2.2
              </button>
            </div>
          </div>
        </div>

        {/* Open Source Card */}
        <div className="flex-none w-96 h-64 rounded-2xl overflow-hidden relative bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20">
          <div className="absolute right-0 top-0 w-48 h-48 opacity-30">
            <div className="w-full h-full rounded-full bg-amber-200/50 dark:bg-amber-600/20"></div>
          </div>
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                  UC MODEL
                </span>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">
                  Open Sou...
                </h2>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                FLUX.1 Krea
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                We're made to be wrapped up our FLUX.1 Krea model chain. Source. Download and run our model anywhere, read the technical paper or...
              </p>
              <div className="w-16 h-16 bg-amber-600 dark:bg-amber-500 rounded-lg flex items-center justify-center">
                <div className="w-8 h-10 bg-white dark:bg-gray-900 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        <ChevronLeft size={20} className="text-gray-600 dark:text-gray-400" />
      </button>
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        <ChevronRight size={20} className="text-gray-600 dark:text-gray-400" />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
      </div>
    </div>
  )
}

export default HeroCards
