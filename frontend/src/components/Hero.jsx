import React from 'react';
import { ArrowRight, Download, Mail, Phone, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ data }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,transparent_0%,rgba(16,185,129,0.05)_50%,transparent_100%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
              Available for Strategic Leadership Roles
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              {data.name}
              <span className="block text-emerald-400 text-4xl lg:text-5xl mt-2">
                "{data.nickname}"
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-slate-300 font-light">
              {data.title}
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              {data.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="btn-primary group"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>

          {/* Quick Contact */}
          <div className="flex items-center space-x-6 pt-4 border-t border-slate-700">
            <a 
              href={`mailto:${data.contact.email}`}
              className="flex items-center text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">{data.contact.email}</span>
            </a>
            <a 
              href={`tel:${data.contact.phone}`}
              className="flex items-center text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">{data.contact.phone}</span>
            </a>
            <a 
              href={data.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-emerald-400/20 shadow-2xl">
              <img 
                src={data.profileImage}
                alt={data.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-400/10 rounded-full border border-emerald-400/20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/5 rounded-full border border-emerald-500/10"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-400/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;