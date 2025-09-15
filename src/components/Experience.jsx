import React from 'react';
import { Building, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Two decades of transformational leadership across Fortune 500 enterprises
          </p>
        </div>

        <div className="space-y-12">
          {data.map((experience, index) => (
            <Card key={experience.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border border-slate-200 shadow-lg hover:border-blue-200">
              <CardContent className="p-0">
                <div className="md:flex">
                  {/* Company Info */}
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Building className="h-6 w-6" />
                        <h3 className="text-2xl font-bold">{experience.company}</h3>
                      </div>
                      
                      <h4 className="text-xl font-semibold text-blue-100">
                        {experience.role}
                      </h4>
                      
                      <div className="space-y-2 text-blue-100">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="pt-4">
                        <h5 className="text-sm font-semibold mb-3 text-blue-100">Key Technologies:</h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary" 
                              className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="md:w-2/3 p-8">
                    <div className="space-y-6">
                      <p className="text-slate-600 leading-relaxed">
                        {experience.description}
                      </p>

                      <div>
                        <h5 className="text-lg font-semibold text-slate-900 mb-4">Key Achievements:</h5>
                        <div className="space-y-3">
                          {experience.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-600 leading-relaxed">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education & Certifications */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow hover:border-blue-200">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Master of Science</h4>
                  <p className="text-slate-600">Business Administration</p>
                  <p className="text-blue-600 font-medium">Indian Institute of Technology</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Bachelor of Technology</h4>
                  <p className="text-slate-600">Electronics Engineering</p>
                  <p className="text-blue-600 font-medium">Madras Institute of Technology</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow hover:border-blue-200">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Certifications</h3>
              <div className="space-y-3">
                {[
                  "Salesforce Certified AI Specialist",
                  "Agentforce Innovator", 
                  "PMP Certified",
                  "APICS CSCP",
                  "Salesforce Admin Certification (In Progress)"
                ].map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span className="text-slate-600">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;