"use client";
import { motion } from 'framer-motion';
import { Dumbbell, Flame, Target } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Elite Weight Loss",
      description: "Transform your body with our science-backed approach to sustainable fat loss. Including nutrition coaching, progressive workouts, and lifestyle optimization.",
      icon: Flame,
      features: ["Custom Meal Plans", "HIIT Workouts", "Progress Tracking"],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Muscle Mastery",
      description: "Build strength and lean muscle with our comprehensive hypertrophy program. Expert guidance on form, progression, and recovery.",
      icon: Dumbbell,
      features: ["Strength Training", "Recovery Protocols", "Supplement Guidance"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Athletic Performance",
      description: "Enhance your functional fitness and athletic capabilities. Focus on mobility, power, and overall performance optimization.",
      icon: Target,
      features: ["Mobility Work", "Power Development", "Sport-Specific Training"],
      color: "from-green-500 to-teal-500"
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
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, white 2%, transparent 0%)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Elite Training Programs
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose your path to greatness with our specialized training programs, 
            each designed to deliver exceptional results.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{
                     backgroundImage: `linear-gradient(to right, #FF0080, #7928CA)`,
                     filter: 'blur(15px)',
                     transform: 'scale(0.9)',
                   }}
              />
              <div className="relative bg-gray-800 rounded-xl p-8 transition-transform duration-300 group-hover:-translate-y-2">
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${program.color} mb-6`}>
                  <program.icon size={24} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                <p className="text-gray-400 mb-6">{program.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-red-500 to-purple-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-red-500 to-purple-500 text-white font-semibold hover:from-red-600 hover:to-purple-600 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;