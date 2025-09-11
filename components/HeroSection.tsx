export default function HeroSection() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* WAN 2.2 Card */}
          <div className="relative bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative p-8 h-80 flex flex-col justify-between text-white">
              <div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-medium w-fit mb-4">
                  FEATURED MODEL
                </div>
                <h2 className="text-4xl font-bold mb-2">WAN 2.2</h2>
                <p className="text-lg font-medium mb-2">WAN 2.2 Image generation</p>
                <p className="text-sm opacity-90">
                  Generate complex images with live brand new and unlimited WAN 2.2 model. Full-featured prompt adherence and ultra-realistic.
                </p>
              </div>
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors rounded-lg px-4 py-2 text-sm font-medium w-fit">
                Try WAN 2.2
              </button>
            </div>
            <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm"></div>
            <div className="absolute bottom-4 right-4 opacity-20">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>

          {/* OpenSource Card */}
          <div className="relative bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative p-8 h-80 flex flex-col justify-between text-white">
              <div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-medium w-fit mb-4">
                  LLM MODEL
                </div>
                <h2 className="text-4xl font-bold mb-2">OpenSour</h2>
                <p className="text-lg font-medium mb-2">FLUX.1 Krea</p>
                <p className="text-sm opacity-90">
                  We've made a our version of our FLUX.1 Krea model open-source. Download it from our model section and use the technical support of K
                </p>
              </div>
            </div>
            <div className="absolute top-4 right-4 w-20 h-20 rounded-lg bg-white/10 backdrop-blur-sm"></div>
            <div className="absolute bottom-4 right-4 opacity-30">
              <div className="w-12 h-12 rounded-full bg-white/20"></div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center lg:hidden">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
