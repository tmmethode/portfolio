import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiFileText, FiCheckCircle, FiXCircle, FiAlertTriangle } from 'react-icons/fi';

const TermsOfService = () => {
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
            <FiFileText className="text-3xl text-primary-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white">
              Terms of Service
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
                <FiCheckCircle className="mr-2 text-primary-600" />
                Acceptance of Terms
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                By accessing and using this portfolio website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
                Use License
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                Permission is granted to temporarily access the materials on TMMETHODE's portfolio website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 dark:text-gray-300 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4 flex items-center">
                <FiAlertTriangle className="mr-2 text-primary-600" />
                Disclaimer
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                The materials on TMMETHODE's portfolio website are provided on an 'as is' basis. TMMETHODE makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
                Limitations
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                In no event shall TMMETHODE or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TMMETHODE's portfolio website, even if TMMETHODE or a TMMETHODE authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
                Accuracy of Materials
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                The materials appearing on TMMETHODE's portfolio website could include technical, typographical, or photographic errors. TMMETHODE does not warrant that any of the materials on its website are accurate, complete, or current. TMMETHODE may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
                Links
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                TMMETHODE has not reviewed all of the sites linked to its portfolio website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by TMMETHODE of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
                Modifications
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                TMMETHODE may revise these terms of service for its portfolio website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
                Governing Law
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of Rwanda and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
                Contact Information
              </h2>
              <p className="text-secondary-700 dark:text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfService; 