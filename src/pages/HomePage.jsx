import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomePage = () => {
  // Function to create Gmail compose URL (same as in ContactPage)
  const getGmailUrl = (email, subject = '', body = '') => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Adjusted spacing */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6 mt-10"> {/* Increased mt to 12 */}
        {/* Profile Picture & Welcome Section */}
        <motion.div className="flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-4"> {/* Increased back to original size */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-sm"></div>
            <div className="relative w-full h-full bg-card/80 backdrop-blur-md rounded-full border border-white/20 shadow-xl overflow-hidden flex items-center justify-center">
              <img src="/images.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <motion.div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 bg-green-500 rounded-full border-2 border-background shadow-md" animate={{ y: [0, -2, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
            </motion.div>
          </div>

          <motion.div className="inline-block px-4 py-1 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-full border border-primary/20 text-xs font-medium mb-3" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <span className="flex items-center gap-1.5">
              <motion.span animate={{ rotate: [0, 20, 0] }} transition={{ duration: 2, repeat: Infinity }}>👋</motion.span>
              Welcome to my portfolio
            </span>
          </motion.div>
        </motion.div>

        {/* Intro Text */}
        <div className="text-center max-w-md">
          <motion.h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug" initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Hi, I'm <span className="gradient-text block md:inline">Isma Ayaz</span>
          </motion.h1>

          <motion.h2 className="text-lg md:text-xl text-muted-foreground mb-4 font-light" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            💻 Web Developer | 🤖 AI/ML Enthusiast
          </motion.h2>

          <motion.p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}>
            I craft beautiful, responsive, and user-friendly web applications with modern technologies. Passionate about clean code, smart design, and turning innovative ideas into digital solutions, I combine my front-end expertise with a growing background in AI/ML to create impactful projects.
          </motion.p>

          {/* Action Buttons */}
          <motion.div className="flex flex-col sm:flex-row justify-center gap-3 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <Link to="/projects" className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-center">
              View My Work
            </Link>
            
            <Link to="/contact" className="px-4 py-2 text-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors text-center">
              Get In Touch
            </Link>
            
            <a 
              href="/CV_Isma_Ayaz.pdf" 
              download="Isma_Ayaz_Resume.pdf"
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-primary hover:underline transition-colors text-center"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div className="flex justify-center space-x-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1 }}>
            {[
              { 
                icon: Github, 
                href: "https://github.com/ismaayaz", 
                label: "GitHub" 
              },
              { 
                icon: Linkedin, 
                href: "https://www.linkedin.com/in/isma-ayaz-8021b72b5/", 
                label: "LinkedIn" 
              },
              { 
                icon: Mail, 
                href: getGmailUrl("ismaayaz987@gmail.com", ""), 
                label: "Email" 
              }
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-muted/50 hover:bg-primary/30 text-primary hover:text-primary-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Footer that will only show when scrolling down */}
      <footer className="py-4 px-4 text-center text-sm text-muted-foreground border-t border-border mt-auto hidden">
        <p>© {new Date().getFullYear()} Isma Ayaz. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;