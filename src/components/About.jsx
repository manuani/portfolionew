import React from 'react';
import { TrendingUp, Users, Award, Globe } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = ({ data }) => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {data.summary.split('.')[0]}.
            </h3>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-slate-900">Key Highlights:</h4>
              <ul className="space-y-3">
                {data.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-slate-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {data.achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow bg-white border border-slate-200 shadow-md hover:border-blue-200">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {achievement.metric}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    {achievement.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div className="grid md:grid-cols-4 gap-8">
          <Card className="text-center p-6 hover:shadow-lg transition-all hover:-translate-y-1 bg-white border border-slate-200 shadow-md hover:border-blue-200">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Strategic Growth</h3>
              <p className="text-sm text-slate-600">Driving business transformation and revenue acceleration</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-all hover:-translate-y-1 bg-white border border-slate-200 shadow-md hover:border-blue-200">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Team Leadership</h3>
              <p className="text-sm text-slate-600">Building and leading high-performance global teams</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-all hover:-translate-y-1 bg-white border border-slate-200 shadow-md hover:border-blue-200">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Excellence</h3>
              <p className="text-sm text-slate-600">Delivering award-winning solutions and measurable results</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-all hover:-translate-y-1 bg-white border border-slate-200 shadow-md hover:border-blue-200">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Global Scale</h3>
              <p className="text-sm text-slate-600">Managing enterprise operations across multiple continents</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
