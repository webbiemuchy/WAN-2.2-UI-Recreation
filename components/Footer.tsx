export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">K</span>
            </div>
            <span className="font-semibold">Krea AI</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-400">curated by</span>
            <div className="text-lg font-bold">Mobbin</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
