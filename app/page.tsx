// Converted from React JavaScript to TypeScript (.tsx)
interface HomeProps { [key: string]: any }


'use client';

import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ToolsSection from './components/ToolsSection';
import Footer from './components/Footer';

const Home: React.FC<HomeProps> = (props) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-dark-bg' : 'bg-white'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <HeroSection />
        <ToolsSection />
      </main>
      <Footer />
    </div>
  );
                                                  }


export default Home;
