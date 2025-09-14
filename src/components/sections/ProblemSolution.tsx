import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, TrendingUp, Users, Clock, Target } from 'lucide-react';

const ProblemSolution: React.FC = () => {
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

  const problems = [
    {
      icon: Clock,
      title: '23 Hours Weekly',
      description: 'Average time spent in meetings per employee',
    },
    {
      icon: AlertTriangle,
      title: '67% Struggle',
      description: 'Teams that fail at follow-through on meeting outcomes',
    },
    {
      icon: Users,
      title: 'Lost Context',
      description: 'Important decisions buried in scattered notes and memory',
    },
  ];

  const solutions = [
    {
      icon: Target,
      title: 'Save 5+ Hours Weekly',
      description: 'Automated note-taking eliminates manual transcription',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: CheckCircle,
      title: 'Never Miss Action Items',
      description: 'AI extracts and organizes tasks with clear ownership',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: TrendingUp,
      title: 'Team-Wide Knowledge',
      description: 'Searchable repository accessible to entire organization',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
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
            The Meeting <span className="text-gradient">Productivity Crisis</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Organizations lose millions of hours and countless opportunities due to inefficient meeting follow-through
          </p>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-red-50 border border-red-100"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-red-100 rounded-full">
                  <problem.icon className="h-8 w-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-3">
                {problem.title}
              </h3>
              <p className="text-red-700">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Transformation Visual */}
        <motion.div
          className="relative mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center justify-center">
            <motion.div
              className="text-6xl font-bold text-gray-300"
              variants={itemVariants}
            >
              BEFORE
            </motion.div>
            <motion.div
              className="mx-8 p-4 bg-gradient-to-r from-forest-950 to-sage-600 rounded-full"
              animate={{ rotate: 180 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <TrendingUp className="h-8 w-8 text-white" />
            </motion.div>
            <motion.div
              className="text-6xl font-bold text-gradient"
              variants={itemVariants}
            >
              AFTER
            </motion.div>
          </div>
        </motion.div>

        {/* Solution Benefits */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className={`text-center p-8 rounded-2xl ${solution.bgColor} border border-opacity-20 border-current`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.2 } 
              }}
            >
              <div className="flex justify-center mb-6">
                <div className={`p-4 rounded-full ${solution.bgColor.replace('50', '100')}`}>
                  <solution.icon className={`h-10 w-10 ${solution.color}`} />
                </div>
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${solution.color}`}>
                {solution.title}
              </h3>
              <p className="text-gray-700 text-lg">
                {solution.description}
              </p>
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
          <div className="bg-gradient-to-r from-forest-950 to-sage-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Meetings?
            </h3>
            <p className="text-xl mb-6 text-sage-100">
              Join the beta and experience the future of meeting productivity
            </p>
            <motion.button
              className="bg-lime-400 text-forest-950 px-8 py-4 rounded-lg font-bold text-lg hover:bg-lime-300 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Early Access
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;