import React from 'react';
import { FiCode, FiServer, FiDatabase, FiCpu } from 'react-icons/fi';

const LoadingFallback = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
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
        <div className="relative mb-6">
          <div className="w-16 h-16 border-4 border-secondary-200 dark:border-gray-700 rounded-full mx-auto shadow-lg">
            <div className="w-16 h-16 border-4 border-primary-600 dark:border-primary-400 border-t-transparent rounded-full animate-spin shadow-inner"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-primary-600 dark:bg-primary-400 rounded-full animate-ping shadow-lg"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-6">
          <p className="text-secondary-700 dark:text-gray-200 font-medium text-lg mb-2">{message}</p>
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full animate-bounce shadow-sm"></div>
            <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-48 mx-auto mb-4">
          <div className="w-full bg-secondary-200 dark:bg-gray-700 rounded-full h-2 shadow-inner">
            <div className="bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 dark:from-primary-400 dark:via-blue-400 dark:to-purple-400 h-2 rounded-full animate-pulse shadow-sm"></div>
          </div>
        </div>

        {/* Loading Steps */}
        <div className="text-xs text-secondary-500 dark:text-gray-400 space-y-1">
          <p className="animate-pulse">Initializing components...</p>
          <p className="animate-pulse" style={{ animationDelay: '0.5s' }}>Loading content...</p>
          <p className="animate-pulse" style={{ animationDelay: '1s' }}>Preparing interface...</p>
        </div>

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingFallback; 