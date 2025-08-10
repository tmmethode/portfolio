import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';
import { FiCode, FiServer, FiDatabase, FiCpu } from 'react-icons/fi';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import AdminPanel from './components/AdminPanel';
import SEO from './components/SEO';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import ErrorBoundary from './components/ErrorBoundary';

// Loading Component with Theme Access
const LoadingScreen = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`min-h-screen bg-gradient-to-br from-secondary-50 to-primary-50 ${isDark ? 'dark:from-gray-900 dark:via-gray-800 dark:to-gray-900' : ''} flex items-center justify-center`}>
      <div className="text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex space-x-1">
              <FiCode className="text-primary-600 dark:text-primary-500 text-2xl animate-pulse shadow-lg" />
              <FiServer className="text-blue-600 dark:text-blue-500 text-2xl animate-pulse shadow-lg" style={{ animationDelay: '0.1s' }} />
              <FiDatabase className="text-green-600 dark:text-green-500 text-2xl animate-pulse shadow-lg" style={{ animationDelay: '0.2s' }} />
              <FiCpu className="text-purple-600 dark:text-purple-500 text-2xl animate-pulse shadow-lg" style={{ animationDelay: '0.3s' }} />
            </div>
            <span className="font-samsung font-bold text-2xl text-secondary-900 dark:text-white tracking-wider drop-shadow-sm">TMMETHODE</span>
          </div>
          <p className="text-secondary-600 dark:text-gray-300 text-sm font-medium">Cloud Engineer & Systems Administrator</p>
        </div>

        {/* Loading Animation */}
        <div className="relative">
          <div className="w-20 h-20 border-4 border-secondary-200 dark:border-gray-700 rounded-full mx-auto shadow-lg">
            <div className="w-20 h-20 border-4 border-primary-600 dark:border-primary-400 border-t-transparent rounded-full animate-spin shadow-inner"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-primary-600 dark:bg-primary-400 rounded-full animate-ping shadow-lg"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mt-6 space-y-2">
          <p className="text-secondary-700 dark:text-gray-200 font-medium text-lg">Loading Portfolio</p>
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full animate-bounce shadow-sm"></div>
            <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="w-full bg-secondary-200 dark:bg-gray-700 rounded-full h-2 shadow-inner">
            <div className="bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 dark:from-primary-400 dark:via-blue-400 dark:to-purple-400 h-2 rounded-full animate-pulse shadow-sm"></div>
          </div>
        </div>

        {/* Loading Steps */}
        <div className="mt-6 text-xs text-secondary-500 dark:text-gray-400 space-y-1">
          <p className="animate-pulse">Initializing components...</p>
          <p className="animate-pulse" style={{ animationDelay: '0.5s' }}>Loading animations...</p>
          <p className="animate-pulse" style={{ animationDelay: '1s' }}>Preparing content...</p>
        </div>

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>
    </div>
  );
};

// Main App Content Component
const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <PerformanceOptimizer />
      <SEO 
        title="Home"
        description="Methode TWIZEYIMANA is a Cloud Engineer & Systems Administrator with expertise in AWS, Google Cloud, Azure, DevOps, cybersecurity, and software development. Based in Kigali, Rwanda."
        keywords="cloud engineer, systems administrator, devops, aws, google cloud, azure, cybersecurity, software development, kigali, rwanda, IT professional, Methode TWIZEYIMANA"
        url="/"
      />
      <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <Routes>
          <Route path="/" element={
            <ErrorBoundary>
              <>
                <Navbar />
                <main className="relative z-0">
                  <Hero />
                  <About />
                  <Skills />
                  <Experience />
                  <Education />
                  <Projects />
                  <Contact />
                </main>
                <Footer />
              </>
            </ErrorBoundary>
          } />
          <Route path="/privacy-policy" element={
            <>
              <SEO 
                title="Privacy Policy"
                description="Privacy Policy for Methode TWIZEYIMANA Portfolio - Learn how we protect your data and privacy."
                url="/privacy-policy"
              />
              <PrivacyPolicy />
            </>
          } />
          <Route path="/terms-of-service" element={
            <>
              <SEO 
                title="Terms of Service"
                description="Terms of Service for Methode TWIZEYIMANA Portfolio - Read our terms and conditions."
                url="/terms-of-service"
              />
              <TermsOfService />
            </>
          } />
          <Route path="/cookie-policy" element={
            <>
              <SEO 
                title="Cookie Policy"
                description="Cookie Policy for Methode TWIZEYIMANA Portfolio - Learn about our cookie usage."
                url="/cookie-policy"
              />
              <CookiePolicy />
            </>
          } />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
};

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <DataProvider>
          <ErrorBoundary>
            <AppContent />
          </ErrorBoundary>
        </DataProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App; 