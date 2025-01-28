'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, CheckCircle } from 'lucide-react';

const CTA = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How long does the transformation program take?",
      answer: "Our transformation programs typically run for 12-16 weeks, though we customize the duration based on your specific goals and starting point. We've seen significant results in as little as 8 weeks with dedicated clients."
    },
    {
      question: "Do I need gym experience to start?",
      answer: "Not at all! Our programs are designed for all fitness levels. Whether you're a complete beginner or an experienced athlete, we'll create a customized plan that matches your experience level and progressively builds your strength and confidence."
    },
    {
      question: "What support do I get during the program?",
      answer: "You'll receive 24/7 access to your coach, weekly check-ins, customized workout and nutrition plans, form checks, and progress tracking. We're with you every step of your transformation journey."
    },
    {
      question: "Can I train from home?",
      answer: "Yes! We can design your program around home workouts, gym workouts, or a combination of both. We'll work with whatever equipment and space you have available."
    }
  ];

  const benefits = [
    "Personalized Training Program",
    "24/7 Coach Support",
    "Custom Nutrition Plan",
    "Weekly Progress Tracking"
  ];

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-gray-300">
              Book your free consultation today and take the first step towards your fitness goals.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-red-500" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white text-lg font-semibold rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-300"
            >
              Get Started Now
            </motion.button>
          </motion.div>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions</h3>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-800 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300"
                >
                  <span className="text-left font-semibold">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 text-gray-300 bg-gray-800/30">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;