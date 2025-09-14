import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  ArrowRight, 
  Sparkles, 
  Shield, 
  Clock,
  CheckCircle,
  Loader
} from 'lucide-react';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';

const betaSignupSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  workEmail: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company/role must be at least 2 characters'),
  teamSize: z.string().min(1, 'Please select your team size'),
  useCase: z.string().min(1, 'Please select your primary use case'),
});

type BetaSignupForm = z.infer<typeof betaSignupSchema>;

const BetaSignup: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BetaSignupForm>({
    resolver: zodResolver(betaSignupSchema),
  });

  const teamSizeOptions = [
    { value: '1-5', label: '1-5 people' },
    { value: '6-20', label: '6-20 people' },
    { value: '21-50', label: '21-50 people' },
    { value: '51-200', label: '51-200 people' },
    { value: '200+', label: '200+ people' },
  ];

  const useCaseOptions = [
    { value: 'meetings', label: 'General meeting notes' },
    { value: 'client-calls', label: 'Client calls & consultations' },
    { value: 'team-standups', label: 'Team standups & reviews' },
    { value: 'interviews', label: 'Interviews & recruitment' },
    { value: 'training', label: 'Training & workshops' },
    { value: 'legal', label: 'Legal & compliance' },
    { value: 'other', label: 'Other' },
  ];

  const onSubmit = async (data: BetaSignupForm) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Beta signup data:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
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
      <section className="section-padding bg-gradient-to-br from-forest-950 to-sage-600">
        <div className="container-max">
          <motion.div
            className="max-w-2xl mx-auto text-center text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-8"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 1 }}
            >
              <CheckCircle className="h-10 w-10 text-forest-950" />
            </motion.div>

            <h2 className="text-4xl font-bold mb-6">
              Welcome to the Sky Fern AI Beta! 🎉
            </h2>
            
            <p className="text-xl text-sage-100 mb-8 leading-relaxed">
              Thank you for joining our exclusive beta program. We'll send you an invitation 
              within 48 hours with access instructions and your lifetime discount code.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <Clock className="h-8 w-8 text-lime-400 mb-4 mx-auto" />
                <h4 className="font-semibold mb-2">48-Hour Access</h4>
                <p className="text-sm text-sage-200">Quick onboarding process</p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <Sparkles className="h-8 w-8 text-lime-400 mb-4 mx-auto" />
                <h4 className="font-semibold mb-2">50% Lifetime Discount</h4>
                <p className="text-sm text-sage-200">Exclusive beta pricing</p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <Shield className="h-8 w-8 text-lime-400 mb-4 mx-auto" />
                <h4 className="font-semibold mb-2">Priority Support</h4>
                <p className="text-sm text-sage-200">Direct line to our team</p>
              </div>
            </div>

            <p className="text-sage-200">
              Check your email for further instructions from{' '}
              <span className="font-semibold text-lime-400">hello@skyfern.ai</span>
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gradient-to-br from-forest-950 to-sage-600" id="beta-signup">
      <div className="container-max">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Header */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Be Among the First to Experience{' '}
              <span className="text-lime-400">Sky Fern AI</span>
            </h2>
            <p className="text-xl text-sage-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our exclusive beta program and get lifetime 50% discount plus priority access 
              to all new features
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur">
                <Sparkles className="h-5 w-5 text-lime-400" />
                <span className="text-white">50% Lifetime Discount</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur">
                <Shield className="h-5 w-5 text-lime-400" />
                <span className="text-white">Priority Support</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur">
                <Clock className="h-5 w-5 text-lime-400" />
                <span className="text-white">Early Access</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Full Name *"
                  placeholder="Enter your full name"
                  error={errors.fullName?.message}
                  {...register('fullName')}
                />

                <Input
                  label="Work Email *"
                  type="email"
                  placeholder="your.email@company.com"
                  error={errors.workEmail?.message}
                  {...register('workEmail')}
                />
              </div>

              <Input
                label="Company / Role *"
                placeholder="Your company name or role"
                error={errors.company?.message}
                {...register('company')}
              />

              <div className="grid md:grid-cols-2 gap-6">
                <Select
                  label="Team Size *"
                  options={teamSizeOptions}
                  error={errors.teamSize?.message}
                  {...register('teamSize')}
                />

                <Select
                  label="Primary Use Case *"
                  options={useCaseOptions}
                  error={errors.useCase?.message}
                  {...register('useCase')}
                />
              </div>

              {/* Privacy Notice */}
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <Shield className="h-5 w-5 text-sage-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-600">
                  <p className="font-medium text-gray-900 mb-1">Privacy Promise</p>
                  <p>
                    We respect your privacy and will never share your information. 
                    You can unsubscribe at any time. Read our{' '}
                    <a href="#" className="text-sage-600 hover:text-sage-700 underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <motion.div className="text-center pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full md:w-auto min-w-[300px] text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <Loader className="animate-spin -ml-1 mr-3 h-5 w-5" />
                      Securing Your Beta Access...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Secure My Beta Access
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  )}
                </Button>

                <p className="text-gray-500 text-sm mt-4">
                  * Required fields. Limited beta spots available.
                </p>
              </motion.div>
            </form>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="text-center mt-12"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center space-x-8 text-sage-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>GDPR compliant</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BetaSignup;