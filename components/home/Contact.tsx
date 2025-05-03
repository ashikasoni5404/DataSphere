"use client";

import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      if (Math.random() > 0.2) { // 80% success rate for demo
        setFormStatus('success');
        // Reset form after success
        setFormState({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        setFormStatus('error');
      }
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      label: "Email Us",
      value: "contact@datasphere.ai",
      href: "mailto:contact@datasphere.ai"
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      label: "Call Us",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      label: "Visit Us",
      value: "123 Data Street, San Francisco, CA 94103",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Ready to transform your data into actionable intelligence? Contact us today.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Have questions or want to discuss a potential project? Reach out to our team using any of the methods below.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.href}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="flex-shrink-0 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-full group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {item.label}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Business Hours
              </h4>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
            <form onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Us a Message
              </h3>

              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg flex items-center text-green-800 dark:text-green-300">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Your message has been sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg flex items-center text-red-800 dark:text-red-300">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  <span>There was an error sending your message. Please try again later.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your Company"
                    value={formState.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service of Interest</Label>
                  <Select onValueChange={handleSelectChange} value={formState.service}>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="data-engineering">Data Engineering</SelectItem>
                      <SelectItem value="data-science">Data Science</SelectItem>
                      <SelectItem value="ai-solutions">AI Solutions</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  rows={6}
                  value={formState.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full sm:w-auto"
                size="lg"
                disabled={formStatus !== 'idle'}
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}