import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaHeart } from 'react-icons/fa';

const Extras = () => {
  const personalQuote = {
    quote: "Built with curiosity, caffeine, and a little AI magic ✨",
    author: "Nusrath Farheen",
    role: "My Philosophy"
  };

  const funFacts = [
    { icon: <FaStar />, fact: "Won multiple national hackathons", color: "text-yellow-400" },
    { icon: <FaHeart />, fact: "Passionate about mentoring developers", color: "text-red-400" },
    { icon: <FaStar />, fact: "Top 100 Startups India recognition", color: "text-purple-400" },
    { icon: <FaHeart />, fact: "Competitive runner in free time", color: "text-green-400" }
  ];

  return (
    <section id="extras" className="section-padding elegant-gradient">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            More About Me
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Testimonials, fun facts, and what drives my passion for technology
          </p>
        </motion.div>

        {/* Fun Facts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {funFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card text-center"
            >
              <div className={`text-2xl sm:text-3xl ${fact.color} mb-2 sm:mb-3`}>
                {fact.icon}
              </div>
              <p className="text-xs sm:text-sm text-gray-300">
                {fact.fact}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Personal Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="card relative text-center bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30"
        >
          <FaQuoteLeft className="text-3xl sm:text-4xl text-purple-400/50 absolute top-4 left-1/2 transform -translate-x-1/2" />
          <div className="pt-10 sm:pt-12">
            <p className="text-lg sm:text-xl text-gray-200 mb-4 sm:mb-6 italic leading-relaxed font-medium">
              "{personalQuote.quote}"
            </p>
            <div className="text-center">
              <p className="text-base sm:text-lg font-bold text-white">
                {personalQuote.author}
              </p>
              <p className="text-sm text-purple-400">
                {personalQuote.role}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Extras;
