import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiSettings, FiEye, FiShield } from 'react-icons/fi';

const CookiePolicy = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container-max py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300 mb-6"
          >
            <FiArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
          
          <div className="flex items-center space-x-3 mb-4">
            <FiSettings className="text-3xl text-primary-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white">
              Cookie Policy
            </h1>
          </div>
          <p className="text-secondary-600 dark:text-gray-300">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none dark:prose-invert"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4 flex items-center">
                <FiSettings className="mr-2 text-primary-600" />
                What Are Cookies
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4 flex items-center">
                <FiSettings className="mr-2 text-primary-600" />
                How We Use Cookies
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                This portfolio website uses cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 dark:text-gray-300 ml-4">
                <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> To understand how visitors interact with the website</li>
                <li><strong>Preference Cookies:</strong> To remember your settings and preferences</li>
                <li><strong>Security Cookies:</strong> To ensure the security of the website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
                Types of Cookies We Use
              </h2>
              <div className="space-y-4">
                <div className="bg-secondary-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-secondary-900 dark:text-white mb-2">Essential Cookies</h3>
                  <p className="text-secondary-700 dark:text-gray-300 text-sm">
                    These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
                  </p>
                </div>
                
                <div className="bg-secondary-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-secondary-900 dark:text-white mb-2">Analytics Cookies</h3>
                  <p className="text-secondary-700 dark:text-gray-300 text-sm">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                  </p>
                </div>
                
                <div className="bg-secondary-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-secondary-900 dark:text-white mb-2">Preference Cookies</h3>
                  <p className="text-secondary-700 dark:text-gray-300 text-sm">
                    These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4 flex items-center">
                <FiEye className="mr-2 text-primary-600" />
                Third-Party Cookies
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                Some cookies are placed by third-party services that appear on our pages:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 dark:text-gray-300 ml-4">
                <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                <li><strong>Social Media:</strong> For social media integration and sharing features</li>
                <li><strong>Hosting Services:</strong> For website performance and security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
                Managing Your Cookie Preferences
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site.
              </p>
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                <h3 className="font-semibold text-primary-900 dark:text-primary-200 mb-2">How to Manage Cookies:</h3>
                <ul className="list-disc list-inside space-y-1 text-primary-800 dark:text-primary-300 text-sm">
                  <li>Check your browser settings for cookie controls</li>
                  <li>Use browser privacy modes to limit cookie tracking</li>
                  <li>Install browser extensions that block cookies</li>
                  <li>Clear cookies regularly through browser settings</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4 flex items-center">
                <FiShield className="mr-2 text-primary-600" />
                Cookie Security
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                We take the security of your data seriously. Our cookies are:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 dark:text-gray-300 ml-4">
                <li>Encrypted and secure</li>
                <li>Used only for legitimate purposes</li>
                <li>Not shared with unauthorized third parties</li>
                <li>Automatically deleted when no longer needed</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
                Updates to This Policy
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
                Contact Information
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="bg-secondary-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-secondary-700 dark:text-gray-300">
                  <strong>Email:</strong> info@tmmethode.com<br />
                  <strong>Location:</strong> Kigali, Rwanda<br />
                  <strong>Website:</strong> tmmethode.com
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy; 