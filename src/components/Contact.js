import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open default email client
    window.location.href = `mailto:nusrathfarheen33@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "nusrathfarheen33@gmail.com",
      link: "mailto:nusrathfarheen33@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 8825571766",
      link: "tel:+918825571766"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Chennai, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/NusrathFarheen",
      color: "hover:text-gray-300"
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/nusrathfarheen",
      color: "hover:text-blue-400"
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "https://x.com/NusrathFar15401",
      color: "hover:text-blue-300"
    }
  ];

  return (
    <section id="contact" className="section-padding elegant-gradient">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from you.
            Send me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300"
                  >
                    <div className="text-xl sm:text-2xl text-indigo-400 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-gray-400">{info.title}</p>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-sm sm:text-base text-white hover:text-indigo-400 transition-colors duration-300 break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                Connect With Me
              </h3>
              <div className="flex space-x-4 sm:space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-xl sm:text-2xl text-gray-400 ${social.color} transition-all duration-300 p-2 rounded-lg hover:bg-gray-800/50`}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit} className="card space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">
                Send Me a Message
              </h3>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 resize-none"
                  placeholder="Enter your message"
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary"
              >
                Send Message via Email
              </motion.button>
              
              <p className="text-sm text-gray-400 text-center">
                This will open your default email client with the message pre-filled.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;