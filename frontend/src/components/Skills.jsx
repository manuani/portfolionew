import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Skills = ({ data }) => {
  const [activeTab, setActiveTab] = useState('technical');

  const skillCategories = {
    technical: {
      title: 'Technical Expertise',
      skills: data.technical
    },
    leadership: {
      title: 'Leadership & Management',
      skills: data.leadership
    }
  };

  const getSkillColor = (level) => {
    if (level >= 90) return 'bg-blue-500';
    if (level >= 80) return 'bg-blue-400';
    if (level >= 70) return 'bg-blue-300';
    return 'bg-blue-200';
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Proven expertise across enterprise technology, leadership, and strategic transformation
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 p-1 rounded-lg">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === category
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {skillCategories[category].title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Content */}
        <div className="transition-all duration-300">
          {activeTab === 'technical' ? (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.technical.skills.map((skill, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 bg-white border border-slate-200 shadow-md hover:border-blue-200">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-slate-900">{skill.name}</h3>
                        {skill.category && (
                          <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-100">
                            {skill.category}
                          </Badge>
                        )}
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Proficiency</span>
                          <span className="text-slate-900 font-medium">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${getSkillColor(skill.level)} transition-all duration-1000`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.leadership.skills.map((skill, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 bg-white border border-slate-200 shadow-md hover:border-blue-200">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-slate-900">{skill.name}</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Proficiency</span>
                        <span className="text-slate-900 font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getSkillColor(skill.level)} transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;