import { motion } from 'framer-motion';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card.jsx';
import AnimatedBackground from '../components/AnimatedBackground';

const AboutPage = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Turning complex challenges into elegant solutions',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with cross-functional teams',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Coffee,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and best practices',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Animated background only for the main content area */}
      <div className="relative flex-grow">
        <AnimatedBackground variant="about" />
        
        {/* Main content container with proper z-index */}
        <div className="relative z-10 pt-16">
          <div className="max-w-6xl mx-auto px-4">
            {/* Page Header */}
            <motion.div 
              className="text-center mb-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                About Me
              </motion.h1>
              <motion.p 
                className="text-lg text-muted-foreground mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Web Developer & AI/ML Enthusiast, constantly learning and building impactful solutions.
              </motion.p>

              <motion.div 
                className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              />
            </motion.div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-10">
              {/* Text Content */}
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div className="prose max-w-none" variants={itemVariants}>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    I'm a passionate Web Developer and AI/ML enthusiast who loves building impactful digital 
                    experiences. With a strong foundation in modern web technologies 
                    like React, Node.js, and Python, I enjoy turning complex problems into clean, user-friendly 
                    solutions.
                  </p>
                </motion.div>
                
                <motion.div className="prose max-w-none" variants={itemVariants}>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    My journey in tech is driven by curiosity and continuous learning — from developing web 
                    applications to exploring artificial intelligence and machine learning. I'm always eager 
                    to embrace new tools and technologies that push my skills forward.
                  </p>
                </motion.div>
                
                <motion.div className="prose max-w-none" variants={itemVariants}>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    I'm still growing as a developer, but I strongly believe in collaboration, creativity, 
                    and writing clean, meaningful code. Whether it's building small projects, experimenting with AI models, 
                    or learning from open-source communities, I aim to improve every day and create technology that adds value.
                  </p>
                </motion.div>
              </motion.div>

              {/* Profile Image */}
              <motion.div 
                className="flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-60 h-60">
                    {/* Animated Background Rings */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Glassmorphism Frame */}
                    <div className="relative w-full h-full bg-card/80 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-lg border border-white/20">
                      <div className="w-52 h-52 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl flex items-center justify-center shadow-md border border-border/50 relative overflow-hidden">
                        {/* Profile initials */}
                        <span className="text-5xl font-bold text-white relative z-10">IA</span>
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <motion.div 
                      className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-md"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-md"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        y: [0, -6, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    />
                    <motion.div 
                      className="absolute top-1/2 -left-4 w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-md"
                      animate={{ 
                        x: [0, 6, 0],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Highlights Grid */}
            <motion.div 
              className="mb-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 
                className="text-2xl font-bold text-center mb-6"
                variants={itemVariants}
              >
                What I Bring
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.04, 
                      y: -6,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm group h-full">
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      <CardContent className="p-4 text-center relative z-10">
                        <motion.div 
                          className={`w-12 h-12 bg-gradient-to-br ${highlight.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md`}
                          whileHover={{ 
                            rotate: 360,
                            scale: 1.1
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <highlight.icon className="h-6 w-6 text-white" />
                        </motion.div>
                        <h3 className="font-semibold mb-2 text-base">{highlight.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{highlight.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* This empty div ensures the footer appears below the content */}
      <div className="flex-shrink-0"></div>
    </div>
  );
};

export default AboutPage;