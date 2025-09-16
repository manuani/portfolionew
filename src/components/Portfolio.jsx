import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../../portfolio-package/src/data/mock';
import Header from './Header';
import Hero from './Hero';
import About from '../../../portfolio-package/src/components/About';
import Skills from '../../../portfolio-package/src/components/Skills';
import Experience from '../../../portfolio-package/src/components/Experience';
import Projects from '../../../portfolio-package/src/components/Projects';
import Blog from '../../../portfolio-package/src/components/Blog';
import Contact from '../../../portfolio-package/src/components/Contact';
import Footer from '../../../portfolio-package/src/components/Footer';
import { Toaster } from '../../../portfolio-package/src/components/ui/toaster';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
      />
      
      <main>
        <Hero data={portfolioData.personal} />
        <About data={portfolioData.about} />
        <Skills data={portfolioData.skills} />
        <Experience data={portfolioData.experience} />
        <Projects data={portfolioData.projects} />
        <Blog data={portfolioData.blogs} />
        <Contact data={portfolioData.personal.contact} />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
};

export default Portfolio;