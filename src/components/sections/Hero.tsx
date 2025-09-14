import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Clock, Target } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-lime-400 rounded-full opacity-20"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
    />
  ));

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-sage-50 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements}
      </div>

      {/* Main Content */}
      <div className="relative container-max section-padding pt-24 pb-16">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Text Content */}
          <div className="max-w-2xl">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Turn Meeting{' '}
                <span className="text-gradient">Chaos</span>{' '}
                Into{' '}
                <span className="text-gradient">Actionable Insights</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              AI-powered transcription and smart summaries that save hours and 
              improve team follow-through. Never miss an action item again.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={itemVariants}
            >
              <Button variant="primary" size="lg" className="group">
                Join the Beta
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="secondary" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="h-8 w-8 text-forest-950" />
                </div>
                <div className="text-2xl font-bold text-forest-950">5+</div>
                <div className="text-sm text-gray-600">Hours Saved Weekly</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Target className="h-8 w-8 text-forest-950" />
                </div>
                <div className="text-2xl font-bold text-forest-950">95%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-forest-950" />
                </div>
                <div className="text-2xl font-bold text-forest-950">500+</div>
                <div className="text-sm text-gray-600">Beta Users</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Meeting Flow Visualization */}
              <div className="space-y-6">
                {/* Meeting Input */}
                <motion.div
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">Live Meeting</div>
                    <div className="text-xs text-gray-500">Recording audio...</div>
                  </div>
                </motion.div>

                {/* Arrow */}
                <motion.div
                  className="flex justify-center"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="h-6 w-6 text-sage-500 transform rotate-90" />
                </motion.div>

                {/* Transcript */}
                <motion.div
                  className="p-4 bg-sage-50 rounded-lg border border-sage-200"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <div className="text-sm font-medium text-gray-900 mb-2">Smart Transcript</div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div><span className="font-medium">Sarah:</span> We need to launch by Q4...</div>
                    <div><span className="font-medium">Mike:</span> I'll handle the design specs...</div>
                  </div>
                </motion.div>

                {/* Arrow */}
                <motion.div
                  className="flex justify-center"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <ArrowRight className="h-6 w-6 text-sage-500 transform rotate-90" />
                </motion.div>

                {/* Action Items */}
                <motion.div
                  className="p-4 bg-lime-50 rounded-lg border border-lime-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 }}
                >
                  <div className="text-sm font-medium text-gray-900 mb-2">Action Items</div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-xs">
                      <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                      <span>Mike: Finalize design by Friday</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs">
                      <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                      <span>Sarah: Review budget allocation</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating elements around the visualization */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Target className="h-8 w-8 text-sage-600" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;