"use client"

import Header from '../components/Header'
import HeroCards from '../components/HeroCards'
import ToolsGrid from '../components/ToolsGrid'
import GallerySection from '../components/GallerySection'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="max-w-7xl mx-auto">
        <HeroCards />
        <ToolsGrid />
        <GallerySection />
      </div>
    </main>
  )
}
