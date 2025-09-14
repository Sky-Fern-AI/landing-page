import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Lightbulb, Heart } from 'lucide-react';

const HeroResearch: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  // Floating cloud-like elements
  const floatingElements = Array.from({ length: 8 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute opacity-10"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${20 + Math.random() * 40}px`,
        height: `${20 + Math.random() * 40}px`,
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, -10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        repeat: Infinity,
        delay: Math.random() * 2,
        ease: 'easeInOut',
      }}
    >
      <div className="w-full h-full bg-gradient-to-br from-sky-400 to-cyan-400 rounded-full blur-sm" />
    </motion.div>
  ));

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cloud-50 via-sky-50 to-skylight-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingElements}
        
        {/* Large organic shapes */}
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-sky-200/30 to-cyan-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        <motion.div
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-skylight-300/20 to-sky-300/20 rounded-full blur-2xl"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative container-max section-padding pt-24 pb-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-soft border border-sky-200/50 mb-8"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-soft-pulse"></div>
            <span className="text-charcoal-700 font-medium">Currently in Research & Development</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl lg:text-7xl font-bold leading-tight mb-8"
            variants={itemVariants}
          >
            <span className="text-charcoal-900">Help Us Build the</span><br />
            <span className="text-gradient">Meeting Tool</span><br />
            <span className="text-charcoal-900">You Actually Want</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl lg:text-2xl text-charcoal-600 mb-12 leading-relaxed max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Join our user research community and shape the future of meeting productivity. 
            Your insights drive our development.
          </motion.p>

          {/* Research Values */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
          >
            {[
              { icon: Users, title: 'Co-Create', desc: 'Build together' },
              { icon: MessageSquare, title: 'Your Voice', desc: 'Direct input' },
              { icon: Lightbulb, title: 'Early Access', desc: 'Try first' },
              { icon: Heart, title: 'Community', desc: 'Connect & share' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl shadow-soft border border-white/40 hover:shadow-cloud transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  y: -5, 
                  transition: { duration: 0.2 } 
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-gradient-sky rounded-2xl mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-charcoal-900 mb-1">{item.title}</h3>
                  <p className="text-charcoal-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section - Teaser */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-cloud border border-sky-200/30 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold text-charcoal-900 mb-4">
              Ready to Share Your Meeting Challenges?
            </h2>
            <p className="text-charcoal-600 mb-6 leading-relaxed">
              Join hundreds of professionals helping us understand what makes meetings 
              productive. Your input shapes every feature we build.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                className="btn-primary px-8 py-4 text-lg font-semibold"
                onClick={() => {
                  const formSection = document.getElementById('research-form');
                  formSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Share Your Pain Points
              </motion.button>
              
              <motion.button
                className="btn-secondary px-8 py-4 text-lg font-semibold"
                onClick={() => {
                  const whySection = document.getElementById('why-participate');
                  whySection?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-16"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-1 h-16 bg-gradient-to-b from-sky-400 to-transparent rounded-full mx-auto"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroResearch;