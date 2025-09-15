import React from 'react';
import { Heart, ArrowUp, Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center space-y-6">
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:smdharan@gmail.com"
              className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors group"
            >
              <Mail className="h-5 w-5 text-slate-300 group-hover:text-white" />
            </a>
            <a 
              href="tel:303-641-8104"
              className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors group"
            >
              <Phone className="h-5 w-5 text-slate-300 group-hover:text-white" />
            </a>
            <a 
              href="https://www.linkedin.com/in/srinimuralidharan/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors group"
            >
              <Linkedin className="h-5 w-5 text-slate-300 group-hover:text-white" />
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-2">Srinivasan "Murali" Muralidharan</h3>
            <p className="text-slate-400">Transformational Technology Executive</p>
          </div>

          <div className="border-t border-slate-800 pt-6">
            <p className="text-sm text-slate-500 mb-4">
              © 2025 Srinivasan Muralidharan. All rights reserved. | 
              Available for strategic leadership opportunities
            </p>
            <p className="text-xs text-slate-600 flex items-center justify-center">
              Built with <Heart className="h-3 w-3 mx-1 text-blue-500" /> and modern technology
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors group"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;