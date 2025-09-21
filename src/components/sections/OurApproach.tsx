import React from 'react';
import { motion } from 'framer-motion';
import {
  Upload,
  Brain,
  Zap,
  ArrowRight,
  MessageSquare,
  Database,
  Search,
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
      icon: Upload,
      title: 'Universal Data Ingestion',
      description: 'Our AI handles any research data format - from live meeting recordings to legacy documents. No manual preprocessing required.',
      process: [
        'Live meeting transcription',
        'Document & PDF processing',
        'Audio/video file analysis',
        'Survey & feedback import'
      ],
      color: 'sky',
    },
    {
      icon: Brain,
      title: 'AI-Native Processing',
      description: 'Built from the ground up for research analysis. Our models understand context, sentiment, and patterns humans might miss.',
      process: [
        'Contextual auto-tagging',
        'Semantic clustering',
        'Cross-study pattern recognition',
        'Sentiment & intent analysis'
      ],
      color: 'cyan',
    },
    {
      icon: Zap,
      title: 'Instant Intelligence',
      description: 'Get insights as fast as you can think of questions. Natural language queries with source attribution and confidence scores.',
      process: [
        'Chat with your data',
        'Real-time synthesis',
        'Source attribution',
        'Executive summaries'
      ],
      color: 'skylight',
    },
  ];

  const aiPipeline = [
    { step: '1', title: 'Ingest', desc: 'Upload any data', icon: Upload },
    { step: '2', title: 'Process', desc: 'AI analysis', icon: Brain },
    { step: '3', title: 'Structure', desc: 'Smart organization', icon: Database },
    { step: '4', title: 'Query', desc: 'Natural language', icon: MessageSquare },
    { step: '5', title: 'Insights', desc: 'Actionable results', icon: Search },
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
            The <span className="text-gradient">AI Intelligence</span> Pipeline
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            See how our AI transforms messy research data into structured insights automatically.
            From raw data to actionable intelligence in minutes, not weeks.
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
              How the <span className="text-gradient">AI Pipeline</span> Works
            </h3>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              From raw data to insights in 5 simple steps, powered by advanced AI
            </p>
          </div>

          {/* Flow Steps */}
          <div className="grid md:grid-cols-5 gap-6">
            {aiPipeline.map((item, index) => (
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
                {index < aiPipeline.length - 1 && (
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
              Ready to experience the future of research?
            </h4>
            <p className="text-charcoal-600 mb-6">
              Join the waitlist and be among the first to transform your research workflow with AI.
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
              Get Early Access
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurApproach;