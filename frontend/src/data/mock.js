// Professional Portfolio Data for Srinivasan "Murali" Muralidharan
export const portfolioData = {
  personal: {
    name: "Srinivasan Muralidharan",
    nickname: "Murali",
    title: "Transformational Technology Executive",
    tagline: "Where Innovation Meets Impact",
    description: "Strategic technology leader with 20+ years of experience driving digital transformation, enterprise-wide implementations, and delivering extraordinary business results across Fortune 500 companies.",
    contact: {
      email: "smdharan@gmail.com",
      phone: "303-641-8104",
      linkedin: "https://www.linkedin.com/in/srinimuralidharan/",
      location: "Available for Remote & Hybrid Opportunities"
    },
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },

  about: {
    summary: "Transformational technology executive whose strategic vision has redefined digital landscapes across Fortune 500 enterprises and high-growth tech innovators in the worlds of HCM, ERP and CRM. With an exceptional talent for aligning cutting-edge technology with ambitious business objectives, I orchestrate enterprise-wide transformations that deliver extraordinary financial and operational results.",
    highlights: [
      "Led enterprise transformations delivering $2B+ in business growth",
      "Managed $30M+ technology portfolios across global organizations", 
      "Built and led high-performance teams of 40-100+ professionals",
      "Delivered measurable results: $700M in quotes, 55% efficiency gains",
      "Expert in AI/ML, RPA, and predictive analytics implementations"
    ],
    achievements: [
      {
        metric: "$2B+",
        description: "Business Growth Enabled"
      },
      {
        metric: "55%",
        description: "Efficiency Improvements"
      },
      {
        metric: "$30M+",
        description: "Portfolio Management"
      },
      {
        metric: "20+",
        description: "Years Experience"
      }
    ]
  },

  skills: {
    technical: [
      { name: "Salesforce Platform", level: 95, category: "CRM" },
      { name: "Oracle ERP/CPQ", level: 90, category: "Enterprise" },
      { name: "AI/ML & Analytics", level: 85, category: "Innovation" },
      { name: "HubSpot & Marketing Automation", level: 88, category: "Marketing" },
      { name: "Process Automation & RPA", level: 92, category: "Automation" },
      { name: "Data Architecture & MDM", level: 87, category: "Data" }
    ],
    leadership: [
      { name: "Team Leadership", level: 95 },
      { name: "Change Management", level: 90 },
      { name: "Stakeholder Management", level: 93 },
      { name: "Strategic Planning", level: 91 },
      { name: "Digital Transformation", level: 94 },
      { name: "Global Operations", level: 89 }
    ]
  },

  experience: [
    {
      id: 1,
      company: "Nextiva",
      role: "Senior Director, Enterprise Systems",
      duration: "2021 - 2024",
      location: "Scottsdale, AZ (Hybrid)",
      description: "$2B SaaS communications platform supporting 150K+ customers across healthcare, education, and small business sectors.",
      achievements: [
        "Led GTM systems transformation to support IPO-readiness and $2B SaaS growth",
        "Delivered 55% faster quote turnaround and 99% billing accuracy",
        "Implemented Experience Cloud portals and subscription billing integrations",
        "Managed global team of 28 FTEs + vendors with Jira/Confluence sprints",
        "Enforced GDPR-compliant data governance with 'Right to Be Forgotten' workflows"
      ],
      technologies: ["Salesforce CRM", "Oracle CPQ", "HubSpot", "Conga CLM", "Oracle ERP"]
    },
    {
      id: 2,
      company: "Extreme Networks",
      role: "Senior Director, Enterprise Applications",
      duration: "2018 - 2021", 
      location: "San Jose, CA (Hybrid)",
      description: "$2B publicly traded networking SaaS solutions provider, including wired and wireless network infrastructure, network management software, security, and analytics.",
      achievements: [
        "Built $700M+ quoting engine, cut cycle times by 40%, increased pipeline accuracy",
        "Rolled out AI-based renewal automations improving throughput by 85%",
        "Managed $30M portfolio supporting Sales, Legal, Finance, Marketing, and Customer Support",
        "Led MDM and real-time Salesforce integrations across ERP, billing, and quoting systems",
        "Championed AI discounting models and RPA bots, saving $100K+/quarter"
      ],
      technologies: ["Oracle CPQ", "Salesforce", "Informatica MDM", "AI/ML", "RPA"]
    },
    {
      id: 3,
      company: "Brocade",
      role: "Director, GTM-CX Applications",
      duration: "2007 - 2018",
      location: "San Jose, CA",
      description: "$4B provider of data center networking solutions, acquired by Broadcom. Led enterprise applications during periods of M&A, growth, and transformation.",
      achievements: [
        "Delivered $400M+ renewal platform on Oracle EBS",
        "Improved quoting throughput by 40% through process optimization",
        "Implemented Experience Cloud portals, IoT analytics, and service automation",
        "Built and led 50+ person global team across sales systems and support technologies",
        "Earned Excellence Award for IoT + Big Data initiative reducing analysis time by 80%"
      ],
      technologies: ["Oracle EBS", "Experience Cloud", "IoT Analytics", "Big Data"]
    },
    {
      id: 4,
      company: "Earlier Experience",
      role: "Oracle ERP Consultant & Manager",
      duration: "1998 - 2007",
      location: "Various Locations",
      description: "Roles at McDATA, GE, and Exabyte focusing on Oracle ERP implementations and early-stage CRM integrations.",
      achievements: [
        "Delivered Oracle EBS implementations across manufacturing, supply chain, and finance",
        "Led early-stage CRM and ERP integrations for global customers",
        "Established foundation expertise in enterprise applications"
      ],
      technologies: ["Oracle EBS", "CRM", "ERP", "Supply Chain"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "AI-Powered Quote Processing Platform",
      description: "Revolutionary $700M quoting platform that reduced processing times by 55% and enabled self-service capabilities for channel partners.",
      technologies: ["Oracle CPQ", "Salesforce", "AI/ML", "Microservices"],
      impact: "$700M+ in quotes processed, 85% adoption rate",
      company: "Extreme Networks"
    },
    {
      id: 2,
      title: "Enterprise Digital Transformation",
      description: "Comprehensive GTM systems transformation supporting IPO readiness and global scale for 150K+ customers.",
      technologies: ["Salesforce CRM", "Oracle ERP", "HubSpot", "Experience Cloud"],
      impact: "55% efficiency gain, 99% billing accuracy",
      company: "Nextiva"
    },
    {
      id: 3,
      title: "IoT Analytics & Big Data Initiative",
      description: "Groundbreaking IoT and big data platform that compressed factory analysis from 8 hours to minutes.",
      technologies: ["IoT", "Big Data", "Predictive Analytics", "Real-time Processing"],
      impact: "80% reduction in analysis time, Excellence Award winner",
      company: "Brocade"
    },
    {
      id: 4,
      title: "RPA & Process Automation Center",
      description: "Established Center of Excellence for RPA and automation, deploying 20+ bots across enterprise operations.",
      technologies: ["RPA", "Automation Anywhere", "Process Mining", "AI"],
      impact: "$100K+ quarterly savings, 20+ bots deployed",
      company: "Multiple Organizations"
    }
  ],

  education: [
    {
      degree: "Master of Science",
      field: "Business Administration",
      school: "Indian Institute of Technology",
      year: "Graduate"
    },
    {
      degree: "Bachelor of Technology",
      field: "Electronics Engineering", 
      school: "Madras Institute of Technology",
      year: "Graduate"
    }
  ],

  certifications: [
    "Salesforce Certified AI Specialist",
    "Agentforce Innovator",
    "PMP Certified",
    "APICS CSCP",
    "Salesforce Admin Certification (In Progress)"
  ],

  blogs: [
    {
      id: 1,
      title: "The Future of Enterprise AI: Strategic Implementation for Executives",
      excerpt: "As AI transforms enterprise operations, here's how technology leaders can build successful AI strategies that deliver measurable business results.",
      content: "Full blog content here...",
      category: "AI & Technology",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      featured: true,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      tags: ["AI", "Enterprise", "Strategy", "Leadership"]
    },
    {
      id: 2,
      title: "Digital Transformation: Lessons from $2B+ Enterprise Implementations", 
      excerpt: "Key insights from leading digital transformation initiatives across Fortune 500 companies and high-growth tech organizations.",
      content: "Full blog content here...",
      category: "Digital Transformation",
      publishDate: "2024-01-08",
      readTime: "12 min read",
      featured: true,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
      tags: ["Digital Transformation", "Enterprise", "Leadership", "Technology"]
    },
    {
      id: 3,
      title: "Building High-Performance Global Technology Teams",
      excerpt: "Strategies for scaling technology teams across multiple continents while maintaining culture, productivity, and innovation.",
      content: "Full blog content here...",
      category: "Leadership",
      publishDate: "2024-01-01", 
      readTime: "6 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
      tags: ["Leadership", "Team Building", "Global Teams", "Management"]
    },
    {
      id: 4,
      title: "CRM Modernization: From Legacy Systems to AI-Powered Platforms",
      excerpt: "A comprehensive guide to modernizing enterprise CRM systems, based on successful implementations at Nextiva, Extreme Networks, and Brocade.",
      content: "Full blog content here...",
      category: "CRM & Sales Tech",
      publishDate: "2023-12-20",
      readTime: "10 min read", 
      featured: false,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      tags: ["CRM", "Salesforce", "Modernization", "Enterprise"]
    },
    {
      id: 5,
      title: "The ROI of Process Automation: Real-World Case Studies",
      excerpt: "How strategic process automation delivered 55% efficiency gains and $100K+ quarterly savings across enterprise operations.",
      content: "Full blog content here...",
      category: "Process Automation",
      publishDate: "2023-12-15",
      readTime: "7 min read",
      featured: false, 
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop",
      tags: ["Automation", "RPA", "Process Improvement", "ROI"]
    },
    {
      id: 6,
      title: "Executive's Guide to Cloud Migration Strategy",
      excerpt: "Best practices for enterprise cloud migration, from planning and risk assessment to execution and optimization.",
      content: "Full blog content here...",
      category: "Cloud Strategy", 
      publishDate: "2023-12-10",
      readTime: "9 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
      tags: ["Cloud", "Migration", "Strategy", "Enterprise"]
    }
  ],

  testimonials: [
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
  ]
};