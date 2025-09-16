import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Filter } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Blog = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visiblePosts, setVisiblePosts] = useState(6);

  // Get unique categories
  const categories = ['all', ...new Set(data.map(blog => blog.category))];

  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory === 'all' 
    ? data 
    : data.filter(blog => blog.category === selectedCategory);

  const featuredBlogs = filteredBlogs.filter(blog => blog.featured);
  const regularBlogs = filteredBlogs.filter(blog => !blog.featured);

  const loadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Insights & Thought Leadership
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Strategic insights on technology leadership, digital transformation, and enterprise innovation
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center text-sm text-slate-600 mr-4">
            <Filter className="h-4 w-4 mr-2" />
            Filter by:
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600 border border-slate-200'
              }`}
            >
              {category === 'all' ? 'All Posts' : category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        {featuredBlogs.length > 0 && selectedCategory === 'all' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
              <BookOpen className="h-6 w-6 mr-2 text-blue-500" />
              Featured Articles
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredBlogs.slice(0, 2).map((blog) => (
                <Card key={blog.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border-0 shadow-lg">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                        {blog.category}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(blog.publishDate)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {blog.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-slate-100 text-slate-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-700 transition-colors">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(selectedCategory === 'all' ? regularBlogs : filteredBlogs)
            .slice(0, visiblePosts)
            .map((blog) => (
            <Card key={blog.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border-0 shadow-lg hover:-translate-y-1">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                    {blog.category}
                  </div>
                  <div className="text-xs text-slate-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {blog.readTime}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-slate-600 mb-4 text-sm line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-500 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(blog.publishDate)}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="p-0 h-auto text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-transform"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {(selectedCategory === 'all' ? regularBlogs : filteredBlogs).length > visiblePosts && (
          <div className="text-center mt-12">
            <Button 
              onClick={loadMore}
              variant="outline"
              className="px-8 py-3 text-blue-600 border-blue-200 hover:bg-blue-50"
            >
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Latest Insights</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get notified about new articles on technology leadership, digital transformation, and enterprise innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg text-slate-900 border-0 focus:ring-2 focus:ring-blue-300"
            />
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;