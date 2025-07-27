import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiShield, FiEye, FiLock, FiUser } from 'react-icons/fi';

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            <FiShield className="text-3xl text-primary-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white">
              Privacy Policy
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
                <FiUser className="mr-2 text-primary-600" />
                Information We Collect
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                This portfolio website collects minimal personal information to provide you with the best experience:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 dark:text-gray-300 ml-4">
                <li><strong>Contact Information:</strong> When you use the contact form, we collect your name, email address, and message content.</li>
                <li><strong>Usage Data:</strong> We may collect anonymous usage statistics to improve website performance and user experience.</li>
                <li><strong>Technical Information:</strong> Browser type, operating system, and device information for compatibility purposes.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4 flex items-center">
                <FiEye className="mr-2 text-primary-600" />
                How We Use Your Information
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                Your information is used solely for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 dark:text-gray-300 ml-4">
                <li>Responding to your inquiries and messages</li>
                <li>Providing technical support and website improvements</li>
                <li>Analyzing website usage to enhance user experience</li>
                <li>Ensuring website security and preventing fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4 flex items-center">
                <FiLock className="mr-2 text-primary-600" />
                Data Protection
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                We implement appropriate security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 dark:text-gray-300 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Secure hosting infrastructure with industry-standard protection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
                Third-Party Services
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                This website may use third-party services for analytics and functionality. These services have their own privacy policies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 dark:text-gray-300 ml-4">
                <li>Google Analytics (for website analytics)</li>
                <li>React and development tools (for website functionality)</li>
                <li>Hosting providers (for website hosting)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
                Your Rights
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 dark:text-gray-300 ml-4">
                <li><strong>Access:</strong> Request information about what data we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate personal information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
                Contact Information
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-secondary-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-secondary-700 dark:text-gray-300">
                  <strong>Email:</strong> info@tmmethode.com<br />
                  <strong>Location:</strong> Kigali, Rwanda<br />
                  <strong>Website:</strong> tmmethode.com
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
                Changes to This Policy
              </h2>
              <p className="text-secondary-700 dark:text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 