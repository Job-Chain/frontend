"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-blue-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <Image src="/images/jobchain-logo.svg" alt="JobChain Logo" width={150} height={40} />
            <p className="mt-4 text-sm text-gray-200">
              Decentralized skills verification on NEAR blockchain
            </p>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-200 transition-colors">Home</Link></li>
              <li><Link href="/profile" className="hover:text-blue-200 transition-colors">My Profile</Link></li>
              <li><Link href="/generate-cv" className="hover:text-blue-200 transition-colors">Generate CV</Link></li>
              <li><Link href="/verified-skills" className="hover:text-blue-200 transition-colors">Verified Skills</Link></li>
            </ul>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-200 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">API</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">Privacy Policy</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
            <div className="mt-4">
              <a href="https://near.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <span className="mr-2">Powered by</span>
                <Image src="/images/near-logo.svg" alt="NEAR Logo" width={80} height={24} />
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-400 text-center">
          <p>&copy; {new Date().getFullYear()} JobChain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;