import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRobot, FaCode, FaChartLine } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "AI Buddy",
      description: "An intelligent AI assistant platform that provides personalized support and automation. Featured in Navishkar 2024 as one of India's top 100 most promising startups.",
      technologies: ["Python", "Machine Learning", "NLP", "React", "FastAPI"],
      icon: <FaRobot />,
      github: "https://github.com/NusrathFarheen",
      live: "#",
      gradient: "from-blue-500 to-purple-600",
      featured: true
    },
    {
      title: "Smart E-Commerce Platform",
      description: "Full-stack e-commerce solution with AI-powered product recommendations, real-time inventory management, and secure payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      icon: <FaCode />,
      github: "https://github.com/NusrathFarheen",
      live: "#",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analytics. Built with modern web technologies and real-time data processing capabilities.",
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "Express"],
      icon: <FaChartLine />,
      github: "https://github.com/NusrathFarheen",
      live: "#",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      technologies: ["React", "Socket.io", "Firebase", "Material-UI", "PWA"],
      icon: <FaCode />,
      github: "https://github.com/NusrathFarheen",
      live: "#",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Weather Prediction ML Model",
      description: "Machine learning model for accurate weather forecasting using historical data and advanced algorithms. Includes web interface for predictions.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "OpenWeather API"],
      icon: <FaRobot />,
      github: "https://github.com/NusrathFarheen",
      live: "#",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Framer Motion. Features smooth animations, dark theme, and mobile-first design.",
      technologies: ["React", "TailwindCSS", "Framer Motion", "JavaScript"],
      icon: <FaCode />,
      github: "https://github.com/NusrathFarheen",
      live: "#",
      gradient: "from-pink-500 to-purple-600"
    }
  ];

  return (
    <section id="projects" className="section-padding elegant-gradient">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            A showcase of my recent work in AI, web development, and innovative technology solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`card group relative overflow-hidden ${
                project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                  Featured
                </div>
              )}
              
              <div className="relative z-10">
                {/* Project Icon */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className={`text-4xl sm:text-5xl p-4 sm:p-5 rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                </div>

                {/* Project Content */}
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6 leading-relaxed px-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="refined-pill text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex justify-center space-x-3 sm:space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-lg sm:text-xl p-2 rounded-lg hover:bg-gray-800/50"
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-lg sm:text-xl p-2 rounded-lg hover:bg-gray-800/50"
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-8 sm:mt-12"
        >
          <a
            href="https://github.com/NusrathFarheen"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-block"
          >
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;