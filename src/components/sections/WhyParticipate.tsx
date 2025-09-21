import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, Clock, BarChart, MessageCircle } from 'lucide-react';

const WhyParticipate: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const benefits = [
    {
      icon: Zap,
      title: '10x Faster Insights',
      subtitle: 'From weeks to hours',
      description: 'Transform your research workflow with AI that automatically processes, tags, and synthesizes data. What used to take weeks now happens in hours.',
      gradient: 'from-sky-500 to-sky-600',
      bgColor: 'from-sky-50 to-sky-100/50',
      iconBg: 'bg-sky-500',
    },
    {
      icon: Brain,
      title: 'AI-Native Intelligence',
      subtitle: 'Built for research, not retrofitted',
      description: 'Unlike tools that bolt on AI features, Skyfern is designed from the ground up to understand research data and generate meaningful insights automatically.',
      gradient: 'from-cyan-500 to-cyan-600',
      bgColor: 'from-cyan-50 to-cyan-100/50',
      iconBg: 'bg-cyan-500',
    },
    {
      icon: BarChart,
      title: 'Universal Data Ingestion',
      subtitle: 'Any source, any format',
      description: 'Meeting recordings, documents, interviews, surveys - our platform handles it all. Never worry about compatibility or manual data entry again.',
      gradient: 'from-skylight-500 to-skylight-600',
      bgColor: 'from-skylight-50 to-skylight-100/50',
      iconBg: 'bg-skylight-500',
    },
    {
      icon: Clock,
      title: 'Natural Language Interface',
      subtitle: 'Chat with your research data',
      description: 'Ask questions in plain English and get instant answers with source attribution. "What did users say about checkout?" - get results in seconds.',
      gradient: 'from-sky-600 to-cyan-500',
      bgColor: 'from-sky-50 to-cyan-50/50',
      iconBg: 'bg-gradient-to-r from-sky-600 to-cyan-500',
    },
  ];

  const stats = [
    { number: '10x', label: 'Faster Insights', icon: Zap },
    { number: '87%', label: 'Time Reduction', icon: Clock },
    { number: '100+', label: 'Data Formats', icon: BarChart },
    { number: '24/7', label: 'AI Processing', icon: Brain },
  ];

  return (
    <section id="why-participate" className="section-padding bg-gradient-to-br from-cloud-50 to-sky-50">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-900 mb-6">
            Why Choose <span className="text-gradient">Skyfern AI</span>?
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Stop wrestling with data and start leading with insights. The first AI research platform that actually understands UX.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-3xl bg-gradient-to-br ${benefit.bgColor} backdrop-blur-sm shadow-soft border border-white/40 overflow-hidden group`}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 } 
              }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8">
                  <benefit.icon className="w-full h-full" />
                </div>
              </div>

              <div className="relative">
                <motion.div
                  className={`inline-flex p-4 rounded-2xl ${benefit.iconBg} mb-6 shadow-soft`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <benefit.icon className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-charcoal-900 mb-2">
                  {benefit.title}
                </h3>
                
                <h4 className="text-lg font-semibold text-sky-600 mb-4">
                  {benefit.subtitle}
                </h4>

                <p className="text-charcoal-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-cyan-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-cloud border border-sky-200/30"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-charcoal-900 mb-4">
              Powered by <span className="text-gradient">AI Intelligence</span>
            </h3>
            <p className="text-lg text-charcoal-600">
              Built from the ground up to understand research data and generate actionable insights
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-sky rounded-2xl group-hover:shadow-cloud transition-shadow duration-300">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-charcoal-900 mb-2">{stat.number}</div>
                <div className="text-charcoal-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12 pt-8 border-t border-sky-200"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <MessageCircle className="h-6 w-6 text-sky-600" />
              <p className="text-lg text-charcoal-700 font-medium">
                Ready to transform your research workflow?
              </p>
            </div>
            <motion.button
              className="btn-primary px-8 py-4 text-lg"
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
        </motion.div>
      </div>
    </section>
  );
};

export default WhyParticipate;