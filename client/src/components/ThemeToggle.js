import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`p-1.5 sm:p-2 rounded-lg backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center z-10 relative ${
        isDark 
          ? 'bg-gray-800 text-gray-100 border-gray-600 hover:text-primary-400' 
          : 'bg-white text-secondary-700 border-secondary-200 hover:text-primary-600'
      }`}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <FiSun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
        ) : (
          <FiMoon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 