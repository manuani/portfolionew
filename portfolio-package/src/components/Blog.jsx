import React, { useState } from 'react';
import { Card } from './ui/card';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Enterprise AI: Strategic Implementation",
      excerpt: "How organizations can successfully integrate AI technologies while maintaining operational excellence and compliance.",
      category: "AI & Technology",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Digital Transformation: Lessons from the Trenches",
      excerpt: "Real-world insights from leading multi-billion dollar digital transformation initiatives.",
      category: "Digital Transformation",
      date: "2024-01-10",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 3,
      title: "Cloud-First Architecture: Best Practices",
      excerpt: "Essential strategies for building scalable, resilient cloud infrastructure that drives business growth.",
      category: "Cloud & Infrastructure",
      date: "2024-01-05",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 4,
      title: "Leadership in Technology: Building High-Performance Teams",
      excerpt: "Proven methodologies for scaling technology teams and fostering innovation culture.",
      category: "Leadership",
      date: "2023-12-28",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 5,
      title: "Zero-Trust Security: Implementation Roadmap",
      excerpt: "Step-by-step guide to implementing zero-trust security architecture in enterprise environments.",
      category: "Security",
      date: "2023-12-20",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 6,
      title: "Data-Driven Decision Making: Analytics Strategy",
      excerpt: "How to build analytics capabilities that deliver actionable insights and drive business outcomes.",
      category: "Data & Analytics",
      date: "2023-12-15",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    }
  ];

  const categories = ['all', 'AI & Technology', 'Digital Transformation', 'Cloud & Infrastructure', 'Leadership', 'Security', 'Data & Analytics'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Insights & Thought Leadership</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing expertise and insights on technology leadership, digital transformation, and innovation
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'All Articles' : category}
            </button>
          ))}
        </div>

        {/* Featured Articles */}
        {selectedCategory === 'all' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map(post => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      <Tag className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="text-blue-600 font-medium text-sm">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <button className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                      Read More 
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Articles */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            {selectedCategory === 'all' ? 'Latest Articles' : `${selectedCategory} Articles`}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === 'all' ? regularPosts : filteredPosts).map(post => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    <Tag className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="text-blue-600 font-medium text-sm">{post.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <button className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm">
                    Read More 
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 text-center border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to receive the latest insights on technology leadership, digital transformation, 
              and innovation strategies directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;