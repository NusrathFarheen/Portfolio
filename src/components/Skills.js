import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TailwindCSS", level: 88 },
        { name: "HTML/CSS", level: 90 },
        { name: "Framer Motion", level: 80 }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development", 
      skills: [
        { name: "Python", level: 88 },
        { name: "Node.js", level: 82 },
        { name: "FastAPI", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Natural Language Processing", level: 80 },
        { name: "TensorFlow", level: 75 },
        { name: "Scikit-learn", level: 82 },
        { name: "Data Analysis", level: 78 }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 72 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 80 }
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="section-padding elegant-gradient">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="card"
            >
              <h3 className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                  >
                    <div className="flex justify-between items-center mb-1 sm:mb-2">
                      <span className="text-sm sm:text-base text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1), ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 sm:mt-12"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-white">
            Additional Expertise
          </h3>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              "Problem Solving", "Algorithm Design", "System Architecture", "API Development",
              "Database Design", "UI/UX Design", "Agile Methodology", "Team Leadership",
              "Technical Writing", "Code Review", "Performance Optimization", "Testing"
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="refined-pill text-xs sm:text-sm cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;