import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to discuss your next transformational technology initiative? Let's explore how we can drive results together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-slate-300 leading-relaxed mb-8">
                I'm always interested in discussing strategic technology leadership opportunities, 
                consulting engagements, or sharing insights on enterprise transformation.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <a 
                        href={`mailto:${data.email}`}
                        className="text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        {data.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Phone</h4>
                      <a 
                        href={`tel:${data.phone}`}
                        className="text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        {data.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                      <Linkedin className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">LinkedIn</h4>
                      <a 
                        href={data.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        Connect with me
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Availability</h4>
                      <p className="text-emerald-400">{data.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Connect */}
            <div className="pt-8 border-t border-slate-700">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Connect</h4>
              <div className="flex space-x-4">
                <Button 
                  onClick={() => window.open(`mailto:${data.email}`, '_blank')}
                  className="btn-primary"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Me
                </Button>
                <Button 
                  onClick={() => window.open(data.linkedin, '_blank')}
                  variant="outline"
                  className="btn-secondary"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-slate-800 border-slate-700">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-emerald-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-emerald-500"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Company
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-emerald-500"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-emerald-500"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-emerald-500"
                    placeholder="Tell me about your project, opportunity, or question..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-primary"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;