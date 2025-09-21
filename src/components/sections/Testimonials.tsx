import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
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

  const testimonials = [
    {
      quote: "I spent more time organizing research than doing research. Now I can run 3x more studies with the same effort. The AI actually understands UX terminology.",
      name: "Sarah Chen",
      role: "Senior UX Researcher",
      company: "Stripe",
      gradient: "from-sky-500/10 to-sky-600/10",
      borderColor: "border-sky-500/20",
    },
    {
      quote: "Finally, our PMs can self-serve insights without bothering me every day. The natural language search actually works - it finds insights I forgot we had.",
      name: "Marcus Rodriguez",
      role: "Design Research Lead",
      company: "Figma",
      gradient: "from-cyan-500/10 to-cyan-600/10",
      borderColor: "border-cyan-500/20",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-skylight-50 to-sky-50">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-soft border border-sky-200/50 mb-6">
            <span className="text-charcoal-700 font-medium">What Researchers Say</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-900 mb-6">
            Join Teams Saving <span className="text-gradient">12+ Hours Per Study</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            See why research teams are switching from Dovetail and LoopPanel
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`relative bg-gradient-to-br ${testimonial.gradient} backdrop-blur-sm rounded-3xl p-8 shadow-soft border ${testimonial.borderColor} hover:shadow-cloud transition-all duration-300 group`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                {/* Quote */}
                <p className="text-lg text-charcoal-600 leading-relaxed mb-8 italic font-medium">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  {/* Avatar placeholder with gradient */}
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-br ${index === 0 ? 'from-sky-400 to-sky-600' : 'from-cyan-400 to-cyan-600'} rounded-full flex items-center justify-center shadow-soft`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </motion.div>

                  <div>
                    <div className="font-semibold text-charcoal-900">
                      {testimonial.name}
                    </div>
                    <div className="text-charcoal-600 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-sky-400/5 to-cyan-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
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
            Start Your Free Trial
          </motion.button>
          <p className="mt-4 text-charcoal-600">
            ✓ Import your existing research &nbsp;&nbsp; ✓ Cancel anytime &nbsp;&nbsp; ✓ SOC2 compliant
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;