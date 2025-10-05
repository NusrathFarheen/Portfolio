import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaRocket, FaBrain, FaMedal, FaAward, FaRunning } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: "Academic Excellence",
      description: "Maintained top academic performance while simultaneously building innovative projects and taking AI Buddy to the Top 100",
      color: "from-pink-500 to-purple-600",
      glowColor: "rgba(219, 39, 119, 0.3)"
    },
    {
      icon: <FaRocket />,
      title: "Innovation Drive", 
      description: "Demonstrated exceptional intelligence and innovation by applying cutting-edge AI research to create real-world impact. When I'm passionate about something, I absorb knowledge through osmosis.",
      color: "from-blue-500 to-purple-600",
      glowColor: "rgba(59, 130, 246, 0.3)"
    },
    {
      icon: <FaBrain />,
      title: "AI Expertise",
      description: "Deep expertise in artificial intelligence, machine learning, and innovative technology solutions with practical applications",
      color: "from-yellow-400 to-orange-500",
      glowColor: "rgba(245, 158, 11, 0.3)"
    },
    {
      icon: <FaAward />,
      title: "National Hackathon Winner",
      description: "Won multiple national-level hackathons with innovative AI solutions and cutting-edge technology implementations",
      color: "from-pink-500 to-purple-600",
      glowColor: "rgba(219, 39, 119, 0.3)"
    },
    {
      icon: <FaRocket />,
      title: "Top 100 Startups India",
      description: "AI Buddy recognized in Navishkar 2024 as one of the top 100 most promising startups in India",
      color: "from-pink-500 to-purple-600", 
      glowColor: "rgba(219, 39, 119, 0.3)"
    },
    {
      icon: <FaTrophy />,
      title: "Hackathon Organizer",
      description: "Successfully organized and managed large-scale hackathons, fostering innovation and collaboration in tech community",
      color: "from-pink-500 to-purple-600",
      glowColor: "rgba(219, 39, 119, 0.3)"
    },
    {
      icon: <FaAward />,
      title: "Web Designer (DECO)",
      description: "Professional web design expertise with modern frameworks and user experience focus",
      color: "from-blue-500 to-purple-600",
      glowColor: "rgba(59, 130, 246, 0.3)"
    },
    {
      icon: <FaMedal />,
      title: "State Spelling Bee Champion", 
      description: "Demonstrated exceptional linguistic skills and competitive excellence at state level competition",
      color: "from-yellow-400 to-orange-500",
      glowColor: "rgba(245, 158, 11, 0.3)"
    },
    {
      icon: <FaRunning />,
      title: "Competitive Runner",
      description: "Maintained physical excellence through competitive running, demonstrating discipline and endurance",
      color: "from-green-400 to-blue-500", 
      glowColor: "rgba(34, 197, 94, 0.3)"
    }
  ];

  return (
    <section id="achievements" className="section-padding elegant-gradient">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A collection of milestones that reflect my journey of innovation, excellence, and continuous growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="card group relative overflow-hidden"
              style={{
                background: `linear-gradient(145deg, var(--bg-panel-dark), rgba(26, 26, 29, 0.95))`,
              }}
            >
              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl"
                style={{ 
                  background: `radial-gradient(circle at center, ${achievement.glowColor} 0%, transparent 70%)`,
                  transform: 'scale(1.1)'
                }}
              />
              
              <div className="relative z-10">
                {/* Icon with enhanced visibility */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div 
                    className={`text-4xl sm:text-5xl lg:text-6xl p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${achievement.color} text-white shadow-2xl transform group-hover:scale-110 transition-all duration-300`}
                    style={{
                      boxShadow: `0 8px 32px ${achievement.glowColor}, 0 0 0 1px rgba(255,255,255,0.1)`
                    }}
                  >
                    {achievement.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center px-2">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm group-hover:text-gray-200 transition-colors duration-300">
                    {achievement.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div 
                  className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${achievement.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
