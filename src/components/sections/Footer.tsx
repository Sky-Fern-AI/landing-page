import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MessageSquare, 
  Twitter, 
  Linkedin, 
  Github,
  Leaf,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Demo', href: '#demo' },
      { label: 'API Documentation', href: '#api' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Blog', href: '#blog' },
      { label: 'Careers', href: '#careers' },
      { label: 'Press Kit', href: '#press' },
    ],
    support: [
      { label: 'Help Center', href: '#help' },
      { label: 'Contact Support', href: '#support' },
      { label: 'System Status', href: '#status' },
      { label: 'Community', href: '#community' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
      { label: 'GDPR', href: '#gdpr' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/skyfernai', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/skyfernai', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/skyfernai', label: 'GitHub' },
    { icon: MessageSquare, href: '#discord', label: 'Discord' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <footer className="bg-forest-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 transform -translate-x-32 -translate-y-32">
          <Leaf className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 transform translate-x-32 translate-y-32">
          <Leaf className="w-full h-full transform rotate-180" />
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute top-8 right-8 p-3 bg-sage-600 rounded-full hover:bg-sage-500 transition-colors duration-300 z-10"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>

      <div className="relative container-max">
        {/* Main Footer Content */}
        <motion.div
          className="py-16 px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-sage-600 rounded-lg">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold">
                  Sky Fern AI
                </div>
              </div>

              <p className="text-sage-200 mb-6 leading-relaxed">
                Transform meeting chaos into actionable insights with AI-powered 
                transcription and smart summaries. Join the productivity revolution.
              </p>

              <div className="flex items-center space-x-2 mb-6">
                <Mail className="h-5 w-5 text-sage-400" />
                <a 
                  href="mailto:hello@skyfern.ai" 
                  className="text-sage-200 hover:text-white transition-colors duration-300"
                >
                  hello@skyfern.ai
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="p-2 bg-forest-800 rounded-lg hover:bg-sage-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sage-200 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sage-200 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sage-200 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sage-200 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            className="mt-16 pt-12 border-t border-forest-800"
            variants={itemVariants}
          >
            <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left">
              <h3 className="text-xl font-semibold text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-sage-200 mb-6">
                Get the latest updates on Sky Fern AI features and beta access.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-forest-800 border border-forest-700 text-white placeholder-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:border-transparent"
                />
                <motion.button
                  className="px-6 py-3 bg-sage-600 text-white rounded-lg font-medium hover:bg-sage-500 transition-colors duration-300 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="py-6 px-4 sm:px-6 lg:px-8 border-t border-forest-800"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sage-300 text-sm">
              © {currentYear} Sky Fern AI. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-sage-300">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>for better meetings</span>
            </div>

            <div className="flex items-center space-x-4 text-sm text-sage-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;