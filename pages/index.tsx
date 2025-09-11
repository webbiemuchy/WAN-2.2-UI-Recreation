import { useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import GenerateSection from '@/components/GenerateSection'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Head>
          <title>AI Model Gallery</title>
          <meta name="description" content="AI Model Gallery with various AI tools" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <HeroSection />
          <GenerateSection />
          <Gallery />
        </main>
        <Footer />
      </div>
    </div>
  )
}
