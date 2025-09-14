import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mic, 
  Zap, 
  Shield, 
  Sparkles,
  MessageSquare,
  Brain,
  Link,
  Lock,
  Globe,
  Smartphone
} from 'lucide-react';

const Features: React.FC = () => {
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

  const cardHover = {
    y: -8,
    transition: {
      duration: 0.3,
    },
  };

  const iconHover = {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.2,
    },
  };

  const coreFeatures = [
    {
      icon: Mic,
      title: 'Smart Transcription',
      description: 'High-accuracy voice-to-text with automatic speaker identification and real-time processing.',
      details: ['99% accuracy rate', 'Multi-language support', 'Noise filtering', 'Speaker diarization'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: Brain,
      title: 'AI Summaries',
      description: 'Generate comprehensive summaries in multiple formats tailored to your team\'s needs.',
      details: ['Executive summaries', 'Action-focused briefs', 'Key decisions', 'Custom formats'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      icon: Link,
      title: 'Seamless Integrations',
      description: 'Connect with your existing workflow tools for automatic distribution and archiving.',
      details: ['Slack & Teams', 'Notion & Confluence', 'Google Workspace', 'CRM systems'],
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
    },
    {
      icon: Shield,
      title: 'Privacy-First',
      description: 'Enterprise-grade security with full compliance and data residency options.',
      details: ['GDPR compliant', 'SOC2 certified', 'End-to-end encryption', 'Data residency'],
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
    },
  ];

  const additionalFeatures = [
    { icon: MessageSquare, title: 'Real-time Collaboration', description: 'Live editing and commenting' },
    { icon: Sparkles, title: 'Smart Templates', description: 'Custom meeting formats' },
    { icon: Globe, title: 'Multi-language', description: '40+ languages supported' },
    { icon: Smartphone, title: 'Mobile Ready', description: 'iOS and Android apps' },
    { icon: Lock, title: 'Secure Storage', description: 'Encrypted cloud storage' },
    { icon: Zap, title: 'Instant Export', description: 'PDF, Word, Markdown formats' },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Powerful Features That <span className="text-gradient">Transform</span> Your Meetings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to capture, understand, and act on meeting insights
          </p>
        </motion.div>

        {/* Core Features Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl ${feature.bgColor} border-2 ${feature.borderColor} relative overflow-hidden group`}
              variants={itemVariants}
              whileHover={cardHover}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8">
                  <feature.icon className="w-full h-full" />
                </div>
              </div>

              <div className="relative">
                <motion.div
                  className={`inline-flex p-4 rounded-2xl ${feature.bgColor.replace('50', '100')} mb-6`}
                  whileHover={iconHover}
                >
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </motion.div>

                <h3 className={`text-2xl font-bold mb-4 ${feature.color}`}>
                  {feature.title}
                </h3>

                <p className="text-gray-700 text-lg mb-6">
                  {feature.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {feature.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * detailIndex }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-2 h-2 rounded-full ${feature.color.replace('text-', 'bg-')}`}></div>
                      <span className="text-gray-600 text-sm">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            And Much More
          </h3>
          <p className="text-gray-600">
            Additional capabilities designed to enhance your meeting experience
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0">
                <div className="p-3 bg-sage-100 rounded-lg">
                  <feature.icon className="h-6 w-6 text-sage-600" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Demo CTA */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
            <div className="flex -space-x-2">
              {[Mic, Brain, Link, Shield].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center border-2 border-white"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  <Icon className="h-6 w-6 text-sage-600" />
                </motion.div>
              ))}
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-xl text-gray-900 mb-2">
                Ready to see it in action?
              </h4>
              <p className="text-gray-600 mb-4">
                Experience all features in our interactive demo
              </p>
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Demo Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;