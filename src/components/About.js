import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaBrain, FaHeart } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Full-Stack Developer",
      description: "Proficient in modern web technologies, creating end-to-end solutions"
    },
    {
      icon: <FaBrain />,
      title: "AI Enthusiast", 
      description: "Passionate about machine learning and artificial intelligence applications"
    },
    {
      icon: <FaRocket />,
      title: "Innovation Driver",
      description: "Building cutting-edge solutions that make a real-world impact"
    },
    {
      icon: <FaHeart />,
      title: "Problem Solver",
      description: "Love tackling complex challenges with creative and efficient solutions"
    }
  ];

  return (
    <section id="about" className="section-padding elegant-gradient">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
            I'm a passionate developer and AI enthusiast from Chennai, India, dedicated to creating 
            intelligent solutions that bridge the gap between cutting-edge technology and real-world impact. 
            Currently building AI Buddy, recognized among India's top 100 most promising startups.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card text-center group"
            >
              <div className="text-3xl sm:text-4xl text-indigo-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="card max-w-4xl mx-auto"
        >
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">
              My Journey
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              <p>
                My passion for technology started early, leading me to excel academically while simultaneously 
                building innovative projects. I believe that when you're truly passionate about something, 
                you absorb knowledge through osmosis - and that's exactly how I approach learning new technologies.
              </p>
              <p>
                From winning national hackathons to organizing large-scale tech events, I've always been 
                driven by the desire to create meaningful impact. My work on AI Buddy, which earned recognition 
                in Navishkar 2024 as one of India's top 100 startups, exemplifies my commitment to translating 
                cutting-edge research into real-world solutions.
              </p>
              <p>
                When I'm not coding or researching AI, you might find me running competitively or 
                mentoring fellow developers. I believe in continuous growth, both personally and professionally.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;