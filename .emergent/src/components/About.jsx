import React from 'react';
import { Card } from './ui/card';
import { Trophy, TrendingUp, Users, Award } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      value: "$2B+",
      label: "Revenue Growth"
    },
    {
      icon: <Trophy className="w-8 h-8 text-blue-600" />,
      value: "55%",
      label: "Efficiency Gains"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      value: "$30M+",
      label: "Cost Savings"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      value: "20+",
      label: "Years Experience"
    }
  ];

  const competencies = [
    "Digital Transformation",
    "Technology Strategy",
    "Enterprise Architecture",
    "Team Leadership",
    "Innovation Management",
    "Change Management"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformational technology executive driving enterprise growth through strategic innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Professional Story */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Highlights</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Seasoned technology executive with over two decades of experience driving digital transformation 
                and enterprise growth. Proven track record of delivering $2B+ in revenue growth through strategic 
                technology initiatives.
              </p>
              <p>
                Expertise spans enterprise architecture, cloud migration, AI/ML implementation, and large-scale 
                digital transformations. Successfully led teams of 100+ professionals across multiple continents.
              </p>
              <p>
                Passionate about leveraging emerging technologies to solve complex business challenges and 
                create sustainable competitive advantages.
              </p>
            </div>
          </div>

          {/* Achievement Metrics */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border border-gray-200">
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-600 text-sm">
                  {achievement.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {competencies.map((competency, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-md transition-all hover:border-blue-200 border border-gray-200">
                <span className="text-gray-700 font-medium">{competency}</span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;