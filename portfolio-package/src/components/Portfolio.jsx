import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/mock';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import { Toaster } from './ui/toaster';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
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