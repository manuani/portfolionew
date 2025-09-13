import React, { useState } from 'react';
import { Card } from './ui/card';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const technicalSkills = [
    { name: 'Enterprise Architecture', level: 95 },
    { name: 'Cloud Technologies', level: 90 },
    { name: 'AI/ML Implementation', level: 85 },
    { name: 'DevOps & Automation', level: 88 },
    { name: 'Data Analytics', level: 82 },
    { name: 'Cybersecurity', level: 80 },
    { name: 'System Integration', level: 92 },
    { name: 'Emerging Technologies', level: 87 }
  ];

  const leadershipSkills = [
    { name: 'Strategic Planning', level: 98 },
    { name: 'Team Leadership', level: 95 },
    { name: 'Change Management', level: 90 },
    { name: 'Stakeholder Management', level: 93 },
    { name: 'Innovation Management', level: 88 },
    { name: 'Digital Transformation', level: 95 },
    { name: 'Business Development', level: 85 },
    { name: 'Executive Communication', level: 92 }
  ];

  const currentSkills = activeTab === 'technical' ? technicalSkills : leadershipSkills;

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive skill set spanning technology leadership and strategic execution
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-lg shadow-sm border border-gray-200">
            <button
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'technical'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('technical')}
            >
              Technical Expertise
            </button>
            <button
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'leadership'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('leadership')}
            >
              Leadership & Management
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {currentSkills.map((skill, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                <span className="text-blue-600 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Professional Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'AWS Solutions Architect',
              'Azure Enterprise Architect',
              'PMP Certified',
              'CISSP',
              'TOGAF',
              'Agile/Scrum Master'
            ].map((cert, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border border-blue-200 text-blue-700 rounded-full font-medium hover:bg-blue-50 transition-colors"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;