import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const HeroCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const cards = [
    {
      id: 'new-model',
      category: 'COMING SOON',
      title: 'New Model',
      subtitle: 'Next generation AI model',
      description: 'Experience the future of AI generation with enhanced capabilities and improved performance...',
      gradient: 'bg-gradient-to-br from-green-400 to-green-600 dark:from-green-600 dark:to-green-800',
      textColor: 'text-white',
      categoryColor: 'text-green-100',
      descriptionColor: 'text-green-100',
      buttonStyle: 'bg-white/20 text-white hover:bg-white/30'
    },
    {
      id: 'wan-22',
      category: 'NEURAL MODEL',
      title: 'WAN 2.2',
      subtitle: 'WAN 2.2 Image generation',
      description: 'Generate complex images with the latest new and channel WAN 2.2 model. Enhanced prompt adherence and lifelike...',
      gradient: 'bg-gradient-to-r from-orange-100 to-blue-100 dark:from-orange-900/20 dark:to-blue-900/20',
      textColor: 'text-gray-900 dark:text-white',
      categoryColor: 'text-gray-600 dark:text-gray-300',
      descriptionColor: 'text-gray-600 dark:text-gray-300',
      buttonStyle: 'bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-800',
      buttonText: 'Try WAN 2.2'
    },
    {
      id: 'open-source',
      category: 'UC MODEL',
      title: 'Open Sou...',
      subtitle: 'FLUX.1 Krea',
      description: "We're made to be wrapped up our FLUX.1 Krea model chain. Source. Download and run our model anywhere, read the technical paper or...",
      gradient: 'bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20',
      textColor: 'text-gray-900 dark:text-white',
      categoryColor: 'text-gray-600 dark:text-gray-300',
      descriptionColor: 'text-gray-600 dark:text-gray-300',
      buttonStyle: 'bg-amber-600 dark:bg-amber-500 text-white hover:bg-amber-700 dark:hover:bg-amber-600',
      showIcon: true
    }
  ]

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }

  const goToCard = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative px-6 py-8">
      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div key={card.id} className={`flex-none w-full h-64 rounded-2xl overflow-hidden relative ${card.gradient}`}>
              {card.id === 'wan-22' && (
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-60"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='a' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23f0f0f0'/%3E%3Cpath d='M0 0h20v20H0z' fill='none' stroke='%23e0e0e0' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23a)'/%3E%3C/svg%3E")`
                  }}
                />
              )}
              
              {card.id === 'open-source' && (
                <div className="absolute right-0 top-0 w-48 h-48 opacity-30">
                  <div className="w-full h-full rounded-full bg-amber-200/50 dark:bg-amber-600/20"></div>
                </div>
              )}
              
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <span className={`text-xs uppercase tracking-wide ${card.categoryColor}`}>
                      {card.category}
                    </span>
                    <h2 className={`text-4xl font-bold mt-2 ${card.textColor}`}>
                      {card.title}
                    </h2>
                  </div>
                  {card.id === 'wan-22' && (
                    <div className="text-right">
                      <span className="text-xs text-gray-600 dark:text-gray-300">WAN</span>
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <h3 className={`text-lg font-semibold ${card.textColor}`}>
                    {card.subtitle}
                  </h3>
                  <p className={`text-sm leading-relaxed ${card.descriptionColor}`}>
                    {card.description}
                  </p>
                  {card.buttonText ? (
                    <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${card.buttonStyle}`}>
                      {card.buttonText}
                    </button>
                  ) : card.showIcon ? (
                    <div className="w-16 h-16 bg-amber-600 dark:bg-amber-500 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-10 bg-white dark:bg-gray-900 rounded-sm"></div>
                    </div>
                  ) : (
                    <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${card.buttonStyle}`}>
                      Learn More
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button 
        onClick={prevCard}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors z-10"
      >
        <ChevronLeft size={20} className="text-gray-600 dark:text-gray-400" />
      </button>
      <button 
        onClick={nextCard}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors z-10"
      >
        <ChevronRight size={20} className="text-gray-600 dark:text-gray-400" />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToCard(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex 
                ? 'bg-blue-500' 
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  )
                                             }
