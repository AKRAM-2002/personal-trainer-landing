"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, Calendar, Trophy } from 'lucide-react';

const Results = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const transformations = [
    {
      name: "John D.",
      duration: "12 weeks",
      beforeImage: "",  // Replace with actual before image
      afterImage: "https://images.unsplash.com/photo-1539794830467-1f1755804d13?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",   // Replace with actual after image
      stats: {
        weightLoss: "15kg",
        muscleGain: "+5kg",
        bodyFat: "-12%"
      },
      testimonial: "This program completely changed my approach to fitness. The results speak for themselves!"
    },
    {
      name: "Mike R.",
      duration: "16 weeks",
      beforeImage: "",
      afterImage: "https://i.pinimg.com/736x/7b/96/cc/7b96cca5dbfb5a0cd114150487058e13.jpg",
      stats: {
        weightLoss: "18kg",
        muscleGain: "+6kg",
        bodyFat: "-15%"
      },
      testimonial: "The structured approach and constant support made all the difference in achieving my goals."
    },
    {
      name: "David S.",
      duration: "24 weeks",
      beforeImage: "",
      afterImage: "https://i.pinimg.com/736x/77/ee/b4/77eeb45f571c65803fcd1e555933564a.jpg",
      stats: {
        weightLoss: "22kg",
        muscleGain: "+8kg",
        bodyFat: "-18%"
      },
      testimonial: "From skeptic to believer. The results exceeded my expectations!"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results, Real People
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See the transformations that prove our methods work. 
            These results come from dedication, expert guidance, and our proven system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Transformation Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative aspect-[3/4] bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-2 gap-2 p-2">
                <div className="relative">
                  <div className="absolute top-2 left-2 bg-red-500 px-3 py-1 rounded-full text-sm font-semibold z-10">
                    BEFORE
                  </div>
                  <img
                    src={transformations[activeIndex].beforeImage}
                    alt={`${transformations[activeIndex].name} before`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="relative">
                  <div className="absolute top-2 left-2 bg-green-500 px-3 py-1 rounded-full text-sm font-semibold z-10">
                    AFTER
                  </div>
                  <img
                    src={transformations[activeIndex].afterImage}
                    alt={`${transformations[activeIndex].name} after`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              
              {/* Navigation buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>

          {/* Results Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-800/50 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-6 h-6 text-red-500" />
                <span className="text-xl">{transformations[activeIndex].duration} Transformation</span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-red-500">
                    {transformations[activeIndex].stats.weightLoss}
                  </div>
                  <div className="text-sm text-gray-400">Weight Loss</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-500">
                    {transformations[activeIndex].stats.muscleGain}
                  </div>
                  <div className="text-sm text-gray-400">Muscle Gain</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-500">
                    {transformations[activeIndex].stats.bodyFat}
                  </div>
                  <div className="text-sm text-gray-400">Body Fat</div>
                </div>
              </div>

              {/* Testimonial */}
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "{transformations[activeIndex].testimonial}"
              </blockquote>
              <p className="text-red-500 font-semibold">
                - {transformations[activeIndex].name}
              </p>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 px-8 bg-gradient-to-r from-red-600 to-red-500 rounded-xl font-semibold text-lg hover:from-red-700 hover:to-red-600 transition-all duration-300"
            >
              Start Your Transformation
            </motion.button>
          </motion.div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="bg-gray-800/50 rounded-xl p-6 text-center">
            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-gray-400">Transformations</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 text-center">
            <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">10+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 text-center">
            <Trophy className="w-8 h-8 text-green-500 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;