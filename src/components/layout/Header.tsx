import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Leaf, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(8px)']
  );

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', updateScrolled);
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'For Teams', href: '#audiences' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Beta Access', href: '#beta-signup' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = (element as HTMLElement).offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ backgroundColor, backdropFilter: backdropBlur }}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection('#hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-sage-600 shadow-lg' 
                    : 'bg-white/10 backdrop-blur border border-white/20'
                }`}
                whileHover={{ rotate: 5 }}
              >
                <Leaf className="h-6 w-6 text-white" />
              </motion.div>
              <div className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Sky Fern AI
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-colors duration-300 hover:text-sage-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white hover:text-sage-200'
                  }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="secondary"
                onClick={() => scrollToSection('#beta-signup')}
                className="group"
              >
                Join Beta
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Border */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-sage-300 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <motion.div
        className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 lg:hidden"
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-sage-600 rounded-lg">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-gray-900">Sky Fern AI</span>
            </div>
            <motion.button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <X className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="flex-1 py-6">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-6 py-4 text-gray-700 hover:bg-sage-50 hover:text-sage-700 transition-colors font-medium"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu CTA */}
          <div className="p-6 border-t border-gray-200">
            <Button
              variant="primary"
              className="w-full justify-center group"
              onClick={() => scrollToSection('#beta-signup')}
            >
              Join Beta Access
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              Limited spots available
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;