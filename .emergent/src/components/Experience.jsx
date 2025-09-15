import React from 'react';
import { Card } from './ui/card';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Global",
      position: "Chief Technology Officer",
      period: "2020 - Present",
      location: "San Francisco, CA",
      description: "Leading digital transformation initiatives across 15+ countries, managing $500M+ technology budget.",
      achievements: [
        "Drove 40% reduction in operational costs through cloud migration",
        "Led implementation of AI-powered analytics platform",
        "Built and managed team of 200+ technology professionals",
        "Delivered $1.2B in revenue growth through technology innovations"
      ],
      technologies: ["AWS", "Azure", "Kubernetes", "AI/ML", "Microservices", "DevOps"]
    },
    {
      company: "Innovation Systems Inc.",
      position: "VP of Technology Strategy",
      period: "2017 - 2020",
      location: "Austin, TX",
      description: "Spearheaded enterprise architecture and technology strategy for Fortune 500 clients.",
      achievements: [
        "Designed scalable architecture supporting 10M+ daily users",
        "Implemented enterprise-wide security framework",
        "Led successful IPO technology due diligence",
        "Achieved 99.9% system uptime across all platforms"
      ],
      technologies: ["Enterprise Architecture", "Security", "Scalability", "Cloud Computing"]
    },
    {
      company: "Digital Solutions Pro",
      position: "Senior Technology Director",
      period: "2014 - 2017",
      location: "New York, NY",
      description: "Managed technology operations and innovation initiatives for multiple business units.",
      achievements: [
        "Launched 5 successful digital products generating $300M ARR",
        "Reduced time-to-market by 60% through agile methodologies",
        "Established center of excellence for emerging technologies",
        "Led successful acquisition and integration of 3 technology companies"
      ],
      technologies: ["Product Management", "Agile", "Integration", "Innovation"]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Information Technology",
      school: "Stanford University",
      year: "2010",
      details: "Specialized in Enterprise Systems and Data Analytics"
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      school: "UC Berkeley",
      year: "2008",
      details: "Magna Cum Laude, Focus on Software Engineering"
    }
  ];

  const certifications = [
    "AWS Solutions Architect Professional",
    "Microsoft Azure Enterprise Architect",
    "Google Cloud Professional Cloud Architect",
    "Project Management Professional (PMP)",
    "Certified Information Systems Security Professional (CISSP)",
    "TOGAF 9 Enterprise Architecture"
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two decades of transformational technology leadership across diverse industries
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Career Timeline</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{exp.position}</h4>
                    <h5 className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</h5>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                  </div>
                  <div className="text-right md:ml-8">
                    <div className="flex items-center text-gray-500 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h6 className="font-semibold text-gray-900 mb-3">Key Achievements:</h6>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h6 className="font-semibold text-gray-900 mb-3">Technologies & Skills:</h6>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 border border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{edu.degree}</h4>
                  <div className="flex items-center text-blue-600 font-semibold mb-2">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {edu.school}
                  </div>
                  <div className="text-gray-500 mb-2">{edu.year}</div>
                  <p className="text-gray-600 text-sm">{edu.details}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow border border-gray-200">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;