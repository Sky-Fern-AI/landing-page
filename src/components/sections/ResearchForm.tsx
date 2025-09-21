import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, Users, Clock, Calendar } from 'lucide-react';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';

const researchFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  role: z.string().min(2, 'Role/title must be at least 2 characters'),
  companySize: z.string().min(1, 'Please select your company size'),
  researchChallenges: z.string().min(10, 'Please share at least 10 characters about your challenges'),
  dataTypes: z.array(z.string()).min(1, 'Please select at least one data type'),
  currentTools: z.array(z.string()).min(1, 'Please select at least one tool'),
  betaInterest: z.string().min(1, 'Please select your beta interest'),
});

type ResearchFormData = z.infer<typeof researchFormSchema>;

const ResearchForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [selectedDataTypes, setSelectedDataTypes] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ResearchFormData>({
    resolver: zodResolver(researchFormSchema),
  });

  const companySizeOptions = [
    { value: '1-10', label: '1-10 employees' },
    { value: '11-50', label: '11-50 employees' },
    { value: '51-200', label: '51-200 employees' },
    { value: '201-1000', label: '201-1000 employees' },
    { value: '1000+', label: '1000+ employees' },
  ];

  const dataTypeOptions = [
    'Meeting recordings', 'Interview transcripts', 'Survey responses',
    'User feedback', 'Support tickets', 'Documents & PDFs',
    'Notes & observations', 'Video files', 'Other'
  ];

  const toolOptions = [
    'Dovetail', 'LoopPanel', 'Aurelius', 'Miro', 'FigJam',
    'Notion', 'Airtable', 'Google Sheets', 'Excel', 'Otter.ai',
    'Rev', 'Zoom', 'No specific tools', 'Other'
  ];

  const betaInterestOptions = [
    { value: 'immediate', label: 'Yes, sign me up for early access!' },
    { value: 'interested', label: 'Interested, keep me updated' },
    { value: 'learning', label: 'Just learning about the product' },
  ];

  const handleToolToggle = (tool: string) => {
    const updated = selectedTools.includes(tool)
      ? selectedTools.filter(t => t !== tool)
      : [...selectedTools, tool];

    setSelectedTools(updated);
    setValue('currentTools', updated);
  };

  const handleDataTypeToggle = (dataType: string) => {
    const updated = selectedDataTypes.includes(dataType)
      ? selectedDataTypes.filter(t => t !== dataType)
      : [...selectedDataTypes, dataType];

    setSelectedDataTypes(updated);
    setValue('dataTypes', updated);
  };

  const onSubmit = async (data: ResearchFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Beta signup data:', { ...data, currentTools: selectedTools, dataTypes: selectedDataTypes });

    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setSelectedTools([]);
    setSelectedDataTypes([]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  if (isSubmitted) {
    return (
      <section id="research-form" className="section-padding bg-gradient-to-br from-sky-50 to-cyan-50">
        <div className="container-max">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-cloud border border-sky-200/30">
              <motion.div
                className="w-20 h-20 bg-gradient-sky rounded-full flex items-center justify-center mx-auto mb-8"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2 }}
              >
                <CheckCircle className="h-10 w-10 text-white" />
              </motion.div>

              <h2 className="text-4xl font-bold text-charcoal-900 mb-6">
                Welcome to the Waitlist! 🎉
              </h2>

              <p className="text-xl text-charcoal-600 mb-8 leading-relaxed">
                You're all set! We'll keep you updated on our progress and notify you as soon as beta access is available.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-sky-50/50 rounded-2xl">
                  <Users className="h-8 w-8 text-sky-600 mb-2 mx-auto" />
                  <h4 className="font-semibold mb-1">Priority Access</h4>
                  <p className="text-sm text-charcoal-600">First to try our beta</p>
                </div>

                <div className="text-center p-4 bg-sky-50/50 rounded-2xl">
                  <Calendar className="h-8 w-8 text-sky-600 mb-2 mx-auto" />
                  <h4 className="font-semibold mb-1">Product Updates</h4>
                  <p className="text-sm text-charcoal-600">Development progress</p>
                </div>

                <div className="text-center p-4 bg-sky-50/50 rounded-2xl">
                  <Clock className="h-8 w-8 text-sky-600 mb-2 mx-auto" />
                  <h4 className="font-semibold mb-1">Launch Notification</h4>
                  <p className="text-sm text-charcoal-600">Be first to know</p>
                </div>
              </div>

              <p className="text-charcoal-500">
                Questions? Reach out to{' '}
                <a href="mailto:contact@skyfernai.com" className="text-sky-600 hover:text-sky-700 underline">
                  contact@skyfernai.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="research-form" className="section-padding bg-gradient-to-br from-sky-50 to-cyan-50">
      <div className="container-max">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-900 mb-6">
              Join the <span className="text-gradient">AI Research Revolution</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              Get early access to the first AI-native research platform that transforms data into insights automatically
            </p>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-cloud border border-sky-200/30"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Your Name *"
                  placeholder="Enter your full name"
                  error={errors.name?.message}
                  {...register('name')}
                />

                <Input
                  label="Email Address *"
                  type="email"
                  placeholder="your.email@company.com"
                  error={errors.email?.message}
                  {...register('email')}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Role/Title *"
                  placeholder="e.g., UX Researcher, Product Manager, Designer"
                  error={errors.role?.message}
                  {...register('role')}
                />

                <Select
                  label="Company Size *"
                  options={companySizeOptions}
                  error={errors.companySize?.message}
                  {...register('companySize')}
                />
              </div>

              {/* Main Questions */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    What are your biggest research challenges? *
                  </label>
                  <motion.textarea
                    {...register('researchChallenges')}
                    className="w-full px-4 py-4 rounded-2xl border-2 border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-colors resize-none"
                    rows={4}
                    placeholder="Tell us about your pain points - time spent organizing data, finding insights across studies, manual tagging, stakeholder reporting, etc."
                    whileFocus={{ scale: 1.01 }}
                  />
                  {errors.researchChallenges && (
                    <p className="mt-2 text-sm text-red-600">{errors.researchChallenges.message}</p>
                  )}
                </div>

                {/* Data Types */}
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-4">
                    What types of research data do you work with? * (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {dataTypeOptions.map((dataType) => (
                      <motion.button
                        key={dataType}
                        type="button"
                        onClick={() => handleDataTypeToggle(dataType)}
                        className={`p-3 rounded-2xl border-2 text-sm font-medium transition-all ${
                          selectedDataTypes.includes(dataType)
                            ? 'bg-sky-100 border-sky-300 text-sky-800'
                            : 'bg-white border-sky-200 text-charcoal-600 hover:border-sky-300'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {dataType}
                      </motion.button>
                    ))}
                  </div>
                  {errors.dataTypes && (
                    <p className="mt-2 text-sm text-red-600">{errors.dataTypes.message}</p>
                  )}
                </div>

                {/* Current Tools */}
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-4">
                    What tools do you currently use for research? * (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {toolOptions.map((tool) => (
                      <motion.button
                        key={tool}
                        type="button"
                        onClick={() => handleToolToggle(tool)}
                        className={`p-3 rounded-2xl border-2 text-sm font-medium transition-all ${
                          selectedTools.includes(tool)
                            ? 'bg-sky-100 border-sky-300 text-sky-800'
                            : 'bg-white border-sky-200 text-charcoal-600 hover:border-sky-300'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {tool}
                      </motion.button>
                    ))}
                  </div>
                  {errors.currentTools && (
                    <p className="mt-2 text-sm text-red-600">{errors.currentTools.message}</p>
                  )}
                </div>

                <Select
                  label="How interested are you in trying our beta? *"
                  options={betaInterestOptions}
                  error={errors.betaInterest?.message}
                  {...register('betaInterest')}
                />
              </div>

              {/* Submit Button */}
              <motion.div className="text-center pt-6">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full md:w-auto min-w-[300px] text-lg py-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                      Joining Waitlist...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Join Beta Waitlist
                      <Send className="ml-2 h-5 w-5" />
                    </div>
                  )}
                </Button>

                <p className="text-charcoal-500 text-sm mt-4">
                  Join the waitlist for priority access. We'll never spam you.
                </p>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchForm;