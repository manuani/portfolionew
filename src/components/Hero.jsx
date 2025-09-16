import React from 'react';
import { ArrowRight, Download, Mail, Phone, Linkedin } from 'lucide-react';

const Hero = ({ data }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Srinivasan_Muralidharan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Achievement Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                20+ Years Experience
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                $2B+ Growth Delivered
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Fortune 500 Leader
              </span>
            </div>

            <div className="space-y-6">
              <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium inline-block">
                Available for Strategic Leadership Roles
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Srinivasan
                  <br />
                  <span className="text-blue-600">Muralidharan</span>
                </h1>
                <div className="text-2xl text-blue-500 font-light">
                  "Murali"
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-blue-600">
                  Transformational Technology Executive
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Strategic technology leader with 20+ years of experience driving digital transformation, 
                enterprise-wide implementations, and delivering extraordinary business results across Fortune 500 companies.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button 
                onClick={downloadResume}
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </button>
            </div>

            {/* Contact Links */}
            <div className="flex gap-6 pt-4">
              <a 
                href={`mailto:${data.contact.email}`}
                className="text-blue-600 hover:text-blue-700 flex items-center gap-2 font-medium"
              >
                <Mail className="h-4 w-4" />
                {data.contact.email}
              </a>
              <a 
                href={`tel:${data.contact.phone}`}
                className="text-blue-600 hover:text-blue-700 flex items-center gap-2 font-medium"
              >
                <Phone className="h-4 w-4" />
                {data.contact.phone}
              </a>
              <a 
                href={data.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 flex items-center gap-2 font-medium"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={data.profileImage}
                  alt="Srinivasan Muralidharan"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;