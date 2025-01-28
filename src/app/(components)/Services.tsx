"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Dumbbell, Apple, ClipboardCheck } from 'lucide-react';

const Services = () => {
  const services = [
    { 
      title: "Direct Access", 
      description: "24/7 access to your personal trainer through our dedicated platform. Get answers when you need them most.", 
      icon: MessageCircle,
      color: "text-red-500"
    },
    { 
      title: "Custom Workouts", 
      description: "Scientifically designed workout plans tailored to your goals, experience, and available equipment.", 
      icon: Dumbbell,
      color: "text-blue-500"
    },
    { 
      title: "Meal Plans", 
      description: "Personalized nutrition plans that fit your lifestyle, preferences, and support your fitness journey.", 
      icon: Apple,
      color: "text-green-500"
    },
    { 
      title: "Accountability", 
      description: "Regular check-ins and progress tracking to keep you motivated and moving towards your goals.", 
      icon: ClipboardCheck,
      color: "text-yellow-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Elite Coaching Experience
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to transform your body and mind, backed by science and proven results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-xl" />
              <div className="relative z-10">
                <service.icon className={`w-12 h-12 ${service.color} mb-6`} />
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
              <div className="absolute inset-0 border border-gray-700 rounded-xl group-hover:border-gray-500 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300">
            Explore Our Programs
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;