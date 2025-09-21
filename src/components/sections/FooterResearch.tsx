import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MessageSquare,
  Twitter,
  Linkedin,
  Github,
  Cloud,
  Zap,
  Brain,
  Clock,
  Heart
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

            {/* Product Features Info */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20">
                <h3 className="font-bold text-xl text-white mb-6 flex items-center">
                  <Brain className="h-6 w-6 mr-3 text-cyan-400" />
                  Transform Your Research Workflow
                </h3>

                <p className="text-cloud-200 mb-8 leading-relaxed">
                  Experience the future of research analysis. From raw data to actionable insights
                  in minutes, not weeks. Join the waitlist for priority access.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/10 rounded-2xl">
                    <Zap className="h-8 w-8 text-cyan-400 mb-3 mx-auto" />
                    <h4 className="font-semibold mb-2">10x Faster</h4>
                    <p className="text-sm text-cloud-200">Automated insight generation</p>
                  </div>

                  <div className="text-center p-4 bg-white/10 rounded-2xl">
                    <Brain className="h-8 w-8 text-cyan-400 mb-3 mx-auto" />
                    <h4 className="font-semibold mb-2">AI-Native</h4>
                    <p className="text-sm text-cloud-200">Built for research intelligence</p>
                  </div>

                  <div className="text-center p-4 bg-white/10 rounded-2xl">
                    <Clock className="h-8 w-8 text-cyan-400 mb-3 mx-auto" />
                    <h4 className="font-semibold mb-2">Real-time</h4>
                    <p className="text-sm text-cloud-200">Instant insights on demand</p>
                  </div>
                </div>

                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.button
                    className="bg-cyan-500 text-charcoal-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-cyan-400 transition-colors duration-300 shadow-soft"
                    onClick={() => {
                      const formSection = document.getElementById('research-form');
                      formSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join Beta Waitlist
                  </motion.button>
                </motion.div>
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
            <div className="text-cloud-300 text-sm">
              © {currentYear} Sky Fern AI. AI-Native Research Platform.
            </div>

            <div className="flex items-center space-x-6 text-sm text-cloud-300">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms</a>
              <a href="mailto:contact@skyfernai.com" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="flex items-center space-x-2 text-sm text-cloud-300">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-cyan-400 animate-pulse" />
              <span>and AI intelligence</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterResearch;