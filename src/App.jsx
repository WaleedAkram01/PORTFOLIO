import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/shared/Navbar';
import { ScrollProgress } from './components/shared/ScrollProgress';
import { LoadingScreen } from './components/shared/LoadingScreen';
import { Footer } from './components/shared/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { SEO } from './components/shared/SEO';
import './styles/index.css';

function App() {
  useSmoothScroll();

  return (
    <HelmetProvider>
      <SEO />
      <div className="relative min-h-screen bg-dark-bg text-white overflow-x-hidden">
        <LoadingScreen />
        <ScrollProgress />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;