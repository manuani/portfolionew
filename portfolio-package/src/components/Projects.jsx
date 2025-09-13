import React from 'react';
import { Card } from './ui/card';
import { ExternalLink, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Global Digital Transformation",
      category: "Enterprise Architecture",
      description: "Led comprehensive digital transformation across 15+ countries, modernizing legacy systems and implementing cloud-first architecture.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["AWS", "Kubernetes", "Microservices", "AI/ML", "DevOps"],
      metrics: {
        impact: "$800M Revenue Increase",
        timeline: "24 months",
        team: "150+ professionals",
        efficiency: "45% cost reduction"
      },
      achievements: [
        "Migrated 200+ applications to cloud infrastructure",
        "Implemented AI-powered analytics platform",
        "Reduced operational costs by $180M annually",
        "Achieved 99.9% system uptime"
      ]
    },
    {
      title: "AI-Powered Customer Analytics Platform",
      category: "Data & Analytics",
      description: "Designed and implemented enterprise-scale analytics platform processing 50M+ daily transactions with real-time insights.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "TensorFlow", "Apache Kafka", "Redis", "MongoDB"],
      metrics: {
        impact: "$300M Revenue Growth",
        timeline: "18 months",
        team: "45 data scientists",
        efficiency: "60% faster insights"
      },
      achievements: [
        "Processed 50M+ daily transactions",
        "Improved customer satisfaction by 35%",
        "Reduced churn rate by 28%",
        "Generated 15+ predictive models"
      ]
    },
    {
      title: "Zero-Downtime Migration Strategy",
      category: "Cloud Infrastructure",
      description: "Orchestrated seamless migration of mission-critical systems serving 10M+ users with zero business disruption.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Azure", "Docker", "Terraform", "Jenkins", "Monitoring"],
      metrics: {
        impact: "$120M Cost Savings",
        timeline: "12 months",
        team: "80 engineers",
        efficiency: "100% uptime maintained"
      },
      achievements: [
        "Zero downtime during migration",
        "50% improvement in system performance",
        "Reduced infrastructure costs by 40%",
        "Implemented automated disaster recovery"
      ]
    },
    {
      title: "Enterprise Security Framework",
      category: "Cybersecurity",
      description: "Developed comprehensive security framework protecting $2B+ in digital assets across multiple business units.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Security Tools", "IAM", "Encryption", "Compliance", "Monitoring"],
      metrics: {
        impact: "Zero Security Breaches",
        timeline: "15 months",
        team: "25 security experts",
        efficiency: "90% threat detection"
      },
      achievements: [
        "Implemented zero-trust architecture",
        "Achieved SOC 2 and ISO 27001 compliance",
        "Reduced security incidents by 85%",
        "Automated threat response protocols"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp Global",
      content: "His leadership in our digital transformation was exceptional. The results exceeded all expectations and delivered substantial ROI.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Michael Chen",
      role: "CTO, Innovation Systems",
      content: "A visionary leader who consistently delivers complex projects on time and under budget. His technical expertise is unmatched.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, Digital Solutions Pro",
      content: "His ability to translate business requirements into scalable technical solutions is remarkable. A true technology strategist.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformational initiatives delivering measurable business impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Impact Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-sm">
                    <DollarSign className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-gray-700">{project.metrics.impact}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-gray-700">{project.metrics.timeline}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 text-purple-600 mr-2" />
                    <span className="text-gray-700">{project.metrics.team}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <TrendingUp className="w-4 h-4 text-orange-600 mr-2" />
                    <span className="text-gray-700">{project.metrics.efficiency}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.achievements.slice(0, 2).map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-4 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  View Details →
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Client Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border border-gray-200">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;