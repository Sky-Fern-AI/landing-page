import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Tag, Search, TrendingUp, Users, BookOpen, MessageCircle } from 'lucide-react';

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
      icon: Mic,
      title: 'One-Click User Interviews',
      subtitle: 'Join instantly, capture everything',
      description: 'Join Zoom, Teams, or Meet instantly. Automatic transcription with speaker identification. Take notes while AI captures everything else.',
      gradient: 'from-sky-500 to-sky-600',
      bgColor: 'from-sky-50 to-sky-100/50',
      iconBg: 'bg-sky-500',
    },
    {
      icon: Tag,
      title: 'Smart Auto-Tagging',
      subtitle: 'Trained on real research sessions',
      description: 'Trained on thousands of real research sessions. Identifies pain points, needs, and behaviors automatically. Learns your taxonomy over time.',
      gradient: 'from-cyan-500 to-cyan-600',
      bgColor: 'from-cyan-50 to-cyan-100/50',
      iconBg: 'bg-cyan-500',
    },
    {
      icon: Search,
      title: 'Ask Your Research Anything',
      subtitle: 'Natural language queries',
      description: '"What frustrates users about onboarding?" Get instant answers with quotes and sources. No more hunting through transcripts.',
      gradient: 'from-skylight-500 to-skylight-600',
      bgColor: 'from-skylight-50 to-skylight-100/50',
      iconBg: 'bg-skylight-500',
    },
    {
      icon: TrendingUp,
      title: 'Pattern Detection',
      subtitle: 'Surface themes across studies',
      description: 'Surface themes across all your studies. See how user sentiment evolves over time. Spot emerging issues before they become problems.',
      gradient: 'from-sky-600 to-cyan-500',
      bgColor: 'from-sky-50 to-cyan-50/50',
      iconBg: 'bg-gradient-to-r from-sky-600 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Stakeholder Self-Service',
      subtitle: 'Reduce interruptions',
      description: 'PMs and designers can explore insights directly. Reduce "quick question" interruptions. Keep everyone aligned on user needs.',
      gradient: 'from-sky-500 to-sky-600',
      bgColor: 'from-sky-50 to-sky-100/50',
      iconBg: 'bg-sky-500',
    },
    {
      icon: BookOpen,
      title: 'Living Research Repository',
      subtitle: 'All research in one place',
      description: 'All your research in one searchable place. From usability tests to diary studies. Build institutional knowledge that lasts.',
      gradient: 'from-cyan-500 to-cyan-600',
      bgColor: 'from-cyan-50 to-cyan-100/50',
      iconBg: 'bg-cyan-500',
    },
  ];

  const stats = [
    { number: '10x', label: 'Faster Insights', icon: TrendingUp },
    { number: '87%', label: 'Time Reduction', icon: Search },
    { number: '100+', label: 'Data Formats', icon: BookOpen },
    { number: '24/7', label: 'AI Processing', icon: Users },
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
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-soft border border-cyan-200/50 mb-6">
            <span className="text-charcoal-700 font-medium">Why Researchers Love Skyfern</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-900 mb-6">
            Finally, a Tool That Gets <span className="text-gradient">UX Research</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Stop choosing between LoopPanel's limited repository or Dovetail's manual workflows
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
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
              Start Free Trial
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyParticipate;