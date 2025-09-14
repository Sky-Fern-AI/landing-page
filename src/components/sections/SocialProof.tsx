import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Quote, 
  Users, 
  TrendingUp,
  CheckCircle,
  Award
} from 'lucide-react';

const SocialProof: React.FC = () => {
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

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'VP of Operations',
      company: 'TechFlow Inc',
      quote: 'Sky Fern AI has completely transformed how we handle meeting follow-ups. We\'ve saved 8+ hours per week and our team accountability has skyrocketed.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      role: 'Project Manager',
      company: 'StartupCo',
      quote: 'The AI summaries are incredibly accurate. No more missed action items or forgotten decisions. It\'s like having a perfect assistant in every meeting.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      id: 3,
      name: 'Lisa Rodriguez',
      role: 'Legal Counsel',
      company: 'LawFirm Partners',
      quote: 'The transcription accuracy is outstanding. We use it for client meetings and the compliance features give us complete confidence in our documentation.',
      rating: 5,
      avatar: '👩‍⚖️',
    },
  ];

  const logos = [
    'TechFlow', 'StartupCo', 'InnovateNow', 'GrowthLabs', 
    'ScaleUp', 'NextGen', 'FutureTech', 'DynamicCorp'
  ];

  const metrics = [
    {
      icon: Users,
      value: '500+',
      label: 'Beta Users',
      description: 'Forward-thinking professionals',
    },
    {
      icon: TrendingUp,
      value: '12K+',
      label: 'Meetings Processed',
      description: 'And counting every day',
    },
    {
      icon: CheckCircle,
      value: '99.2%',
      label: 'Satisfaction Rate',
      description: 'Based on user feedback',
    },
    {
      icon: Award,
      value: '4.9/5',
      label: 'User Rating',
      description: 'Across all platforms',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-sage-50 to-lime-50">
      <div className="container-max">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Trusted by <span className="text-gradient">Forward-Thinking</span> Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of teams already transforming their meeting productivity with Sky Fern AI
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-2xl border border-sage-200 hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-sage-100 rounded-full">
                  <metric.icon className="h-8 w-8 text-sage-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {metric.value}
              </div>
              <div className="font-semibold text-gray-900 mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-gray-600">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl border border-sage-200 hover:shadow-xl transition-all duration-300 relative"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-12 w-12" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-lime-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="text-3xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}
                  </div>
                  <div className="text-sage-600 text-sm font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Logos */}
        <motion.div
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-gray-500 text-sm mb-8 uppercase tracking-wide font-medium">
            Trusted by innovative companies
          </p>
          
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 opacity-40"
            variants={containerVariants}
          >
            {logos.map((logo) => (
              <motion.div
                key={logo}
                className="px-6 py-3 bg-gray-100 rounded-lg font-semibold text-gray-600 hover:opacity-80 transition-opacity"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                {logo}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Beta Counter */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center bg-white border border-sage-200 rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {['👩‍💼', '👨‍💻', '👩‍⚖️', '👨‍💼', '👩‍🔬'].map((emoji, index) => (
                  <motion.div
                    key={index}
                    className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center text-lg border-2 border-white"
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">
                  <motion.span
                    className="text-2xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    500+
                  </motion.span>{' '}
                  beta users joined this week
                </div>
                <div className="text-sage-600 text-sm">
                  Limited spots available
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;