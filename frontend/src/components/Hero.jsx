import React from 'react';
import { ArrowRight, Download, Mail, Phone, Linkedin, Star, Award, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ data }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add the actual resume file to public folder
    link.download = 'Srinivasan_Muralidharan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(147,197,253,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,transparent_0%,rgba(59,130,246,0.05)_50%,transparent_100%)]"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-75"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse delay-150"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Enhanced Content */}
        <div className="space-y-8">
          {/* Achievement Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
              <Star className="h-3 w-3 mr-1" />
              20+ Years Experience
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
              <TrendingUp className="h-3 w-3 mr-1" />
              $2B+ Growth Delivered
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
              <Award className="h-3 w-3 mr-1" />
              Fortune 500 Leader
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              Available for Strategic Leadership Roles
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                {data.name.split(' ')[0]}
                <br />
                <span className="text-blue-400">{data.name.split(' ')[1]}</span>
              </h1>
              <div className="text-2xl lg:text-3xl text-blue-200 font-light mb-2">
                "{data.nickname}"
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                {data.title}
              </h2>
            </div>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              {data.description}
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="btn-primary group text-lg px-8 py-4"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={downloadResume}
              variant="outline"
              className="btn-secondary text-lg px-8 py-4"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Enhanced Quick Contact */}
          <div className="flex items-center space-x-8 pt-6 border-t border-slate-700">
            <a 
              href={`mailto:${data.contact.email}`}
              className="flex items-center text-slate-400 hover:text-blue-400 transition-colors group"
            >
              <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">{data.contact.email}</span>
            </a>
            <a 
              href={`tel:${data.contact.phone}`}
              className="flex items-center text-slate-400 hover:text-blue-400 transition-colors group"
            >
              <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">{data.contact.phone}</span>
            </a>
            <a 
              href={data.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-slate-400 hover:text-blue-400 transition-colors group"
            >
              <Linkedin className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Enhanced Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl relative">
              <img 
                src={data.profileImage}
                alt={data.name}
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
            </div>
            
            {/* Enhanced Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/10 rounded-full border border-blue-400/20 backdrop-blur-sm"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-500/5 rounded-full border border-blue-500/10 backdrop-blur-sm"></div>
            
            {/* Floating Achievement Cards */}
            <div className="absolute -top-4 left-4 bg-slate-800/90 backdrop-blur-sm border border-blue-400/20 rounded-lg px-3 py-2 text-xs text-blue-400 font-medium">
              <TrendingUp className="h-3 w-3 inline mr-1" />
              55% Efficiency Gains
            </div>
            <div className="absolute -bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-blue-400/20 rounded-lg px-3 py-2 text-xs text-blue-400 font-medium">
              <Award className="h-3 w-3 inline mr-1" />
              $30M+ Portfolio
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;