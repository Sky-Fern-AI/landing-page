import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MessageSquare,
  Twitter,
  Linkedin,
  Github,
  Cloud
} from 'lucide-react';

const FooterResearch: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/skyfernai', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/skyfernai', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/skyfernai', label: 'GitHub' },
    { icon: MessageSquare, href: '#discord', label: 'Discord Community' },
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
    <footer className="bg-gradient-to-br from-charcoal-900 via-sky-900 to-charcoal-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 transform -translate-x-32 -translate-y-32">
          <Cloud className="w-full h-full animate-gentle-float" />
        </div>
        <div className="absolute bottom-0 right-0 w-48 h-48 transform translate-x-24 translate-y-24">
          <Cloud className="w-full h-full animate-float" />
        </div>
      </div>

      <div className="relative container-max">
        {/* Main Footer Content */}
        <motion.div
          className="py-16 px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Brand Section */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-sky rounded-2xl shadow-soft">
                  <Cloud className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Sky Fern AI</div>
                  <div className="text-sm text-sky-200 font-medium">AI-Native Research Platform</div>
                </div>
              </div>

              <p className="text-cloud-200 mb-6 leading-relaxed">
                Transform raw research data into structured insights automatically.
                The first AI research platform that eliminates data wrangling.
              </p>

              <div className="flex items-center space-x-2 mb-6 p-4 bg-white/10 rounded-2xl backdrop-blur">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-soft-pulse"></div>
                <span className="text-cloud-200 text-sm">Beta launching Q1 2025</span>
              </div>

              <div className="flex items-center space-x-2 mb-6">
                <Mail className="h-5 w-5 text-cyan-400" />
                <a 
                  href="mailto:contact@skyfernai.com" 
                  className="text-cloud-200 hover:text-white transition-colors duration-300 underline decoration-cyan-400"
                >
                  contact@skyfernai.com
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="p-3 bg-white/10 backdrop-blur rounded-2xl hover:bg-sky-600/20 transition-colors duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-cloud-200 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h4 className="font-semibold text-white mb-4">Product</h4>
                  <div className="space-y-3">
                    <a href="#features" className="block text-cloud-200 hover:text-white transition-colors">Features</a>
                    <a href="#pricing" className="block text-cloud-200 hover:text-white transition-colors">Pricing</a>
                    <a href="#security" className="block text-cloud-200 hover:text-white transition-colors">Security</a>
                    <a href="#api" className="block text-cloud-200 hover:text-white transition-colors">API</a>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-4">Company</h4>
                  <div className="space-y-3">
                    <a href="#about" className="block text-cloud-200 hover:text-white transition-colors">About</a>
                    <a href="#blog" className="block text-cloud-200 hover:text-white transition-colors">Blog</a>
                    <a href="#careers" className="block text-cloud-200 hover:text-white transition-colors">Careers</a>
                    <a href="mailto:contact@skyfernai.com" className="block text-cloud-200 hover:text-white transition-colors">Contact</a>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-4">Resources</h4>
                  <div className="space-y-3">
                    <a href="#docs" className="block text-cloud-200 hover:text-white transition-colors">Documentation</a>
                    <a href="#help" className="block text-cloud-200 hover:text-white transition-colors">Help Center</a>
                    <a href="#community" className="block text-cloud-200 hover:text-white transition-colors">Community</a>
                    <a href="#status" className="block text-cloud-200 hover:text-white transition-colors">Status</a>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-4">Legal</h4>
                  <div className="space-y-3">
                    <a href="#privacy" className="block text-cloud-200 hover:text-white transition-colors">Privacy</a>
                    <a href="#terms" className="block text-cloud-200 hover:text-white transition-colors">Terms</a>
                    <a href="#gdpr" className="block text-cloud-200 hover:text-white transition-colors">GDPR</a>
                    <a href="#soc2" className="block text-cloud-200 hover:text-white transition-colors">SOC2</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="py-6 px-4 sm:px-6 lg:px-8 border-t border-white/20"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-cloud-300 text-sm text-center md:text-left">
              © {currentYear} Skyfern AI. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterResearch;