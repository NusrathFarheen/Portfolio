import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaRocket, FaCode, FaBrain } from 'react-icons/fa';

const Hero = () => {
  // Floating icons animation
  const floatingIcons = [
    { icon: <FaRocket />, delay: 0, x: "10%", y: "20%" },
    { icon: <FaCode />, delay: 0.5, x: "85%", y: "25%" },
    { icon: <FaBrain />, delay: 1, x: "15%", y: "70%" },
    { icon: <FaRocket />, delay: 1.5, x: "80%", y: "75%" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-purple-500/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
            y: [-10, 10, -10],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-indigo-500/20 rotate-45"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-sm"
        />

        {/* Floating Tech Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 6,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute text-2xl text-indigo-400/30"
            style={{ left: item.x, top: item.y }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated greeting */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-2 sm:mb-4"
          >
            <span className="text-sm sm:text-base text-indigo-400 font-medium">
              👋 Hello, I'm
            </span>
          </motion.div>

          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text relative">
              Nusrath Farheen
              {/* Decorative elements */}
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                className="absolute -top-2 -right-8 text-2xl"
              >
                ✨
              </motion.span>
            </span>
          </motion.h1>

          {/* Animated subtitle with typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-4 sm:mb-6"
          >
            <div className="text-lg sm:text-xl md:text-2xl text-indigo-300 font-medium">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 2, delay: 1 }}
                className="overflow-hidden whitespace-nowrap border-r-2 border-indigo-400 pr-1"
              >
                AI Enthusiast & Full-Stack Developer
              </motion.span>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI Enthusiast & Full-Stack Developer crafting intelligent solutions 
            that bridge technology and real-world impact
          </motion.p>
          
          {/* Enhanced social links with stagger animation */}
          <motion.div 
            className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { href: "https://github.com/NusrathFarheen", icon: <FaGithub />, color: "hover:text-white", hoverBg: "hover:bg-gray-800/80" },
              { href: "https://www.linkedin.com/in/nusrathfarheen", icon: <FaLinkedin />, color: "hover:text-blue-400", hoverBg: "hover:bg-blue-500/20" },
              { href: "https://x.com/NusrathFar15401", icon: <FaTwitter />, color: "hover:text-blue-300", hoverBg: "hover:bg-sky-500/20" },
              { href: "mailto:nusrathfarheen33@gmail.com", icon: <FaEnvelope />, color: "hover:text-red-400", hoverBg: "hover:bg-red-500/20" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.includes('mailto') ? undefined : "_blank"}
                rel={social.href.includes('mailto') ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                className={`text-2xl sm:text-3xl text-gray-400 ${social.color} ${social.hoverBg} transition-all duration-300 p-3 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-current/50 hover:shadow-lg hover:shadow-current/25`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
          
          {/* Enhanced CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.a 
              href="#projects" 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2 group relative overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                🚀
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            
            <motion.a 
              href="#contact" 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center gap-2 group"
            >
              <span>Get In Touch</span>
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                👋
              </motion.span>
            </motion.a>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-gray-400"
            >
              <span className="text-xs mb-2">Scroll to explore</span>
              <div className="w-0.5 h-8 bg-gradient-to-b from-indigo-400 to-transparent rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;