import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Rocket, 
  Briefcase, 
  Users, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const TargetAudience: React.FC = () => {
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

  const cardHover = {
    y: -12,
    scale: 1.02,
    transition: {
      duration: 0.3,
    },
  };

  const audiences = [
    {
      icon: Rocket,
      title: 'SMEs & Startups',
      subtitle: 'Fast & Affordable',
      description: 'Perfect for growing teams that need efficient meeting capture without breaking the bank.',
      benefits: [
        'Quick setup in under 5 minutes',
        'Affordable per-seat pricing',
        'Essential features for small teams',
        'Scale as you grow'
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      textColor: 'text-blue-700',
      accentColor: 'bg-blue-500',
      borderColor: 'border-blue-200',
    },
    {
      icon: Building2,
      title: 'Enterprise Teams',
      subtitle: 'Compliance Ready',
      description: 'Enterprise-grade security and compliance for organizations with strict data requirements.',
      benefits: [
        'SOC2 Type II certified',
        'HIPAA compliance roadmap',
        'Advanced user management',
        'Custom data residency'
      ],
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-indigo-50',
      textColor: 'text-purple-700',
      accentColor: 'bg-purple-500',
      borderColor: 'border-purple-200',
    },
    {
      icon: Briefcase,
      title: 'Professionals',
      subtitle: 'Accuracy Focused',
      description: 'Lawyers, consultants, and PMs who need precise meeting documentation and action tracking.',
      benefits: [
        '99% transcription accuracy',
        'Legal-grade documentation',
        'Detailed audit trails',
        'Professional templates'
      ],
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-green-50',
      textColor: 'text-emerald-700',
      accentColor: 'bg-emerald-500',
      borderColor: 'border-emerald-200',
    },
  ];

  const stats = [
    { value: '500+', label: 'Active Teams', icon: Users },
    { value: '10K+', label: 'Hours Saved', icon: Zap },
    { value: '99%', label: 'Accuracy Rate', icon: Shield },
    { value: '24/7', label: 'Support', icon: CheckCircle },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Built for <span className="text-gradient">Every Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a startup moving fast or an enterprise prioritizing compliance, 
            Sky Fern AI adapts to your unique needs
          </p>
        </motion.div>

        {/* Audience Cards */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-3xl ${audience.bgColor} border-2 ${audience.borderColor} group cursor-pointer overflow-hidden`}
              variants={itemVariants}
              whileHover={cardHover}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Floating Icon Background */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <audience.icon className="h-20 w-20" />
              </div>

              <div className="relative">
                {/* Icon */}
                <motion.div
                  className={`inline-flex p-4 rounded-2xl ${audience.accentColor} mb-6`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <audience.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Title and Subtitle */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {audience.title}
                  </h3>
                  <p className={`text-lg font-semibold ${audience.textColor}`}>
                    {audience.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {audience.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefitIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * benefitIndex }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className={`h-5 w-5 ${audience.textColor} flex-shrink-0`} />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  className="mt-8 pt-6 border-t border-gray-200"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                    <span className="font-medium">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-forest-950 to-sage-600 rounded-3xl p-12 text-white"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Trusted by Forward-Thinking Teams
            </h3>
            <p className="text-sage-100 text-lg">
              Join hundreds of teams already transforming their meeting productivity
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
                  <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors duration-300">
                    <stat.icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sage-200 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-lime-400 text-forest-950 px-8 py-4 rounded-xl font-bold text-lg hover:bg-lime-300 transition-colors duration-300">
              Join the Beta Today
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;