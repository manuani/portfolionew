import React from 'react';
import { ExternalLink, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Projects = ({ data }) => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Key Projects & Initiatives
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transformational projects that delivered measurable business impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {data.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="h-2 bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-emerald-600 font-medium text-sm mb-3">
                        {project.company}
                      </p>
                    </div>
                    <Award className="h-6 w-6 text-emerald-500" />
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <TrendingUp className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm font-semibold text-slate-900">Business Impact</span>
                    </div>
                    <p className="text-slate-600 bg-emerald-50 p-3 rounded-lg">
                      {project.impact}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary"
                          className="bg-slate-100 text-slate-700 hover:bg-slate-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 border-t border-slate-100">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-emerald-50 group-hover:border-emerald-200 group-hover:text-emerald-700 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              What Leaders Say
            </h3>
            <div className="w-16 h-1 bg-emerald-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "His strategic vision, technical expertise, and deep understanding of business processes, combined with a relentless focus on customer outcomes, make him an invaluable asset.",
                author: "Ari Bose",
                position: "CIO - Brocade & Nextiva"
              },
              {
                text: "Murali has a remarkable ability to understand business needs and effortlessly collaborate with diverse teams to achieve impactful outcomes.",
                author: "Peter Biber", 
                position: "VP Global Support - Nextiva"
              },
              {
                text: "Murali's commitment to achieving business results and his efforts to cultivate a culture of performance and operational excellence made him a highly trusted leader.",
                author: "Vikram Pamarthi",
                position: "Vice President of IT - Brocade"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 bg-slate-50 border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-4xl text-emerald-500 mb-4">"</div>
                  <p className="text-slate-600 mb-6 italic leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="border-t border-slate-200 pt-4">
                    <p className="font-semibold text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;