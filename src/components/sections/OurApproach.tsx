import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  RefreshCw, 
  Eye, 
  ArrowRight, 
  MessageSquare, 
  Code, 
  TestTube,
  CheckCircle 
} from 'lucide-react';

const OurApproach: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const approaches = [
    {
      icon: Users,
      title: 'User-Driven Development',
      description: 'Every feature starts with real user problems. We don\'t build what we think you need - we build what you tell us you need.',
      process: [
        'Research user pain points',
        'Validate problem importance',
        'Co-design solutions',
        'Test with real workflows'
      ],
      color: 'sky',
    },
    {
      icon: RefreshCw,
      title: 'Iterative Building',
      description: 'We build in small, testable pieces. You see progress weekly, provide feedback constantly, and influence direction continuously.',
      process: [
        'Weekly progress updates',
        'Rapid prototyping',
        'Continuous feedback loops',
        'Quick pivots when needed'
      ],
      color: 'cyan',
    },
    {
      icon: Eye,
      title: 'Transparent Process',
      description: 'No black boxes. You see our roadmap, know what we\'re building, why we\'re building it, and how your feedback shaped decisions.',
      process: [
        'Open development roadmap',
        'Regular community calls',
        'Feature decision explanations',
        'Impact tracking & reporting'
      ],
      color: 'skylight',
    },
  ];

  const developmentFlow = [
    { step: '1', title: 'Listen', desc: 'Collect user insights', icon: MessageSquare },
    { step: '2', title: 'Design', desc: 'Co-create solutions', icon: Users },
    { step: '3', title: 'Build', desc: 'Rapid development', icon: Code },
    { step: '4', title: 'Test', desc: 'User validation', icon: TestTube },
    { step: '5', title: 'Improve', desc: 'Iterate & refine', icon: RefreshCw },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-sky-50 via-cloud-50 to-skylight-50">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-900 mb-6">
            Our <span className="text-gradient">Development</span> Approach
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            We're not just building software. We're building a partnership with you to create 
            the meeting productivity tool that actually works.
          </p>
        </motion.div>

        {/* Approach Cards */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-white/50 hover:shadow-cloud transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Icon */}
              <motion.div
                className={`inline-flex p-4 rounded-2xl bg-${approach.color}-500 shadow-soft mb-6`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <approach.icon className="h-8 w-8 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                {approach.title}
              </h3>

              {/* Description */}
              <p className="text-charcoal-600 mb-6 leading-relaxed">
                {approach.description}
              </p>

              {/* Process Steps */}
              <div className="space-y-3">
                {approach.process.map((step, stepIndex) => (
                  <motion.div
                    key={stepIndex}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * stepIndex }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className={`h-4 w-4 text-${approach.color}-500 flex-shrink-0`} />
                    <span className="text-charcoal-600 text-sm">{step}</span>
                  </motion.div>
                ))}
              </div>

              {/* Hover Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br from-${approach.color}-400/5 to-${approach.color}-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Development Flow */}
        <motion.div
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-cloud border border-sky-200/30"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-charcoal-900 mb-4">
              How We Build <span className="text-gradient">Together</span>
            </h3>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Our development process puts you at the center of every decision
            </p>
          </div>

          {/* Flow Steps */}
          <div className="grid md:grid-cols-5 gap-6">
            {developmentFlow.map((item, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Step Number */}
                <motion.div
                  className="relative z-10 w-16 h-16 bg-gradient-sky rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-soft"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.step}
                </motion.div>

                {/* Icon */}
                <div className="flex justify-center mb-3">
                  <item.icon className="h-6 w-6 text-sky-600" />
                </div>

                {/* Content */}
                <h4 className="font-bold text-charcoal-900 mb-2">{item.title}</h4>
                <p className="text-sm text-charcoal-600">{item.desc}</p>

                {/* Arrow (except for last item) */}
                {index < developmentFlow.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-8 left-full w-full"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5 text-sky-400 mx-auto" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-12 pt-8 border-t border-sky-200"
            variants={itemVariants}
          >
            <h4 className="text-xl font-bold text-charcoal-900 mb-4">
              Ready to be part of this process?
            </h4>
            <p className="text-charcoal-600 mb-6">
              Your insights don't just inform our decisions - they drive them.
            </p>
            <motion.button
              className="btn-primary px-8 py-4 text-lg"
              onClick={() => {
                const formSection = document.getElementById('research-form');
                formSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Collaborating With Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurApproach;