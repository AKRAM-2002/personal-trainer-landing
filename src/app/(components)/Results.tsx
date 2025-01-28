"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, Calendar, Trophy } from 'lucide-react';

const Results = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const transformations = [
    {
      name: "Achraf B.",
      duration: "6 Months",
      beforeImage: "/images/transformations/achraf-before.jpeg",
      afterImage: "/images/transformations/achraf-after.jpeg",
      stats: {
        weightLoss: "8kg",
        muscleGain: "+10kg",
        bodyFat: "-12%"
      },
      testimonial: "This program completely changed my approach to fitness. The results speak for themselves!"
    },
    {
      name: "Mike R.",
      duration: "16 weeks",
      beforeImage: "/images/transformations/akram-before.jpeg",
      afterImage: "/images/transformations/akram-after.jpeg",
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

  const ImageWithFallback = ({ src, label, type }) => (
    <div className="relative h-64 md:h-full">
      {src ? (
        <img
          src={src}
          alt={`${transformations[activeIndex].name} ${type}`}
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
          <p className="text-gray-400">Image not available</p>
        </div>
      )}
      <div className={`absolute top-2 left-2 ${label === 'BEFORE' ? 'bg-red-500' : 'bg-green-500'} px-3 py-1 rounded-full text-sm font-semibold z-10`}>
        {label}
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Transformation Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-4">
              <div className="space-y-4">
                <ImageWithFallback 
                  src={transformations[activeIndex].beforeImage}
                  label="BEFORE"
                  type="before"
                />
                <ImageWithFallback 
                  src={transformations[activeIndex].afterImage}
                  label="AFTER"
                  type="after"
                />
              </div>
              
              {/* Navigation buttons */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={prevSlide}
                  className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
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

              <blockquote className="text-lg text-gray-300 italic mb-4">
                "{transformations[activeIndex].testimonial}"
              </blockquote>
              <p className="text-red-500 font-semibold">
                - {transformations[activeIndex].name}
              </p>
            </div>

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