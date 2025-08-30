import { motion } from 'framer-motion';
import { Calendar, Users, Star, Zap, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import AnimatedBackground from '../components/AnimatedBackground';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Advancing Truth: ML Model for Fake News Detection',
      description: 'Full-stack web app using React.js and ML to detect and verify fake news.',
      technologies: ['React', 'Python', 'Machine Learning', 'CSS'],
      featured: true,
      duration: '7 months',
      team: '2 developers',
      highlights: ['ML-powered verification', 'Interactive UI', 'High accuracy detection'],
      gradient: 'from-red-500 to-yellow-500',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'PDF/Word to Text Converter',
      description: 'Web app to convert PDF/Word documents to plain text with ML backend.',
      technologies: ['React', 'Python', 'Machine Learning'],
      featured: true,
      duration: '2 months',
      team: 'Solo project',
      highlights: ['Supports multiple file types', 'Fast processing', 'ML-based text extraction'],
      gradient: 'from-green-500 to-teal-500',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Library Management System',
      description: 'Manages library operations including book lending and user accounts.',
      technologies: ['C#', 'SQL'],
      featured: false,
      duration: '1 month',
      team: '4 people',
      highlights: ['Inventory management', 'User account handling', 'Borrow/return tracking'],
      gradient: 'from-purple-500 to-pink-500',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Student Management System',
      description: 'Handles student records, grades, and course info.',
      technologies: ['Java', 'HTML', 'CSS', 'SQL'],
      featured: false,
      duration: '1 month',
      team: '4 people',
      highlights: ['Student database management', 'Grades tracking', 'Course info management'],
      gradient: 'from-yellow-500 to-orange-500',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'English-Urdu Translator',
      description: 'ML model to translate English text into Urdu and vice versa.',
      technologies: ['Python', 'Machine Learning', 'NLP'],
      featured: false,
      duration: '2 months',
      team: 'Solo project',
      highlights: ['ML-based translation', 'Supports multiple text inputs', 'Accurate translations'],
      gradient: 'from-cyan-500 to-blue-500',
      githubUrl: '#',
      liveUrl: '#'
    }
  ];

  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    } 
  };
  
  const itemVariants = { 
    hidden: { opacity: 0, y: 30 }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: 'easeOut' 
      } 
    } 
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      <AnimatedBackground variant="projects" />
      
      {/* Floating elements animation */}
      <motion.div 
        className="absolute top-20 left-10 w-4 h-4 rounded-full bg-purple-500 opacity-20"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-40 right-16 w-6 h-6 rounded-full bg-teal-500 opacity-20"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-yellow-500 opacity-20"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header with enhanced animation */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.8,
              ease: "easeOut"
            } 
          }}
        >
          <motion.h1 
            className="text-3xl md:text-4xl font-extrabold mb-3 text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { 
                duration: 0.7,
                delay: 0.2
              } 
            }}
          >
            My Projects
          </motion.h1>
          <motion.p 
            className="text-md md:text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { 
                duration: 0.6,
                delay: 0.4
              } 
            }}
          >
            A showcase of my recent work, personal projects, and contributions to the development community.
          </motion.p>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={{ 
              width: 80,
              transition: { 
                duration: 0.8, 
                delay: 0.6 
              } 
            }}
          />
        </motion.div>

        {/* Featured Projects with enhanced animations */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          className="mb-12 space-y-8"
        >
          <motion.h2 
            className="text-2xl font-bold text-center text-white mb-4"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h2>
          
          {featuredProjects.map((project, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
              className="relative group"
            >
              <motion.div
                variants={cardHoverVariants}
              >
                <Card className="overflow-hidden border border-gray-700 bg-gray-900/80 backdrop-blur-md shadow-xl group relative min-h-[340px] hover:shadow-2xl transition-all duration-300">
                  {/* Animated gradient border effect */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg -z-10`}
                    whileHover={{ 
                      opacity: 0.1,
                    }}
                  />
                  
                  {/* Shimmer effect on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"
                    initial={{ x: "-100%" }}
                    whileHover={{ 
                      x: "100%",
                      transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                  />
                  
                  <CardContent className="relative z-10 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <motion.p 
                      className="text-gray-300 mb-4 text-sm"
                      whileHover={{ color: "#ddd" }}
                    >
                      {project.description}
                    </motion.p>
                    
                    <div className="flex gap-4 text-xs text-gray-400 mb-4">
                      <motion.div 
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Calendar className="w-4 h-4" />{project.duration}
                      </motion.div>
                      <motion.div 
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Users className="w-4 h-4" />{project.team}
                      </motion.div>
                    </div>
                    
                    <h4 className="text-teal-400 font-semibold mb-2 flex items-center gap-1 text-sm">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Star className="w-4 h-4 text-teal-400" />
                      </motion.div>
                      Highlights
                    </h4>
                    
                    <ul className="mb-4 space-y-1 text-xs">
                      {project.highlights.map((h, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-center gap-1 text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ 
                            opacity: 1, 
                            x: 0,
                            transition: { 
                              delay: 0.8 + i * 0.1,
                              duration: 0.4 
                            } 
                          }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                          >
                            <Zap className="w-3 h-3 text-teal-400" />
                          </motion.div>
                          {h}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <motion.div
                          key={i}
                          custom={i}
                          variants={badgeVariants}
                          whileHover={{ 
                            scale: 1.1,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="bg-gray-700 text-white border border-gray-600 px-2 py-0.5 text-xs cursor-default"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Project links with animation */}
                    <motion.div 
                      className="flex gap-3 mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: 1,
                        transition: { delay: 1.2 }
                      }}
                    >
                      <motion.a 
                        href={project.githubUrl}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(255, 255, 255, 0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1 px-3 py-1 text-xs rounded-md bg-gray-800 text-white border border-gray-700"
                      >
                        <Github className="w-3 h-3" /> Code
                      </motion.a>
                      
                      <motion.a 
                        href={project.liveUrl}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(255, 255, 255, 0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1 px-3 py-1 text-xs rounded-md bg-gray-800 text-white border border-gray-700"
                      >
                        <ExternalLink className="w-3 h-3" /> Live Demo
                      </motion.a>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects with enhanced animations */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          className="mb-8"
        >
          <motion.h2 
            className="text-2xl font-bold text-center text-white mb-6"
            variants={itemVariants}
          >
            Other Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover="hover"
                className="group h-full" // Added h-full here
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="h-full" // Added h-full here
                >
                  <Card className="relative border border-gray-700 bg-gray-900/80 backdrop-blur-md overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"> {/* Added h-full and flex flex-col */}
                    {/* Gradient overlay on hover */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}
                      whileHover={{ 
                        opacity: 0.1,
                      }}
                    />
                    
                    <CardContent className="relative z-10 p-5 flex flex-col flex-grow"> {/* Added flex and flex-grow */}
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-400 transition-all duration-300">
                        {project.title}
                      </h3>
                      
                      <motion.p 
                        className="text-gray-300 text-xs md:text-sm mb-3 flex-grow" // Added flex-grow
                        whileHover={{ color: "#ddd" }}
                      >
                        {project.description}
                      </motion.p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.map((tech, i) => (
                          <motion.div
                            key={i}
                            custom={i}
                            variants={badgeVariants}
                            whileHover={{ 
                              scale: 1.1,
                              transition: { duration: 0.2 }
                            }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="bg-gray-700 text-white border border-gray-600 px-2 py-0.5 text-xs cursor-default"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="mt-auto"> {/* Added mt-auto to push to bottom */}
                        <motion.div 
                          className="flex items-center gap-1 text-xs text-gray-400 mb-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Calendar className="w-3 h-3" /> {project.duration}
                        </motion.div>
                        
                        {/* Quick action buttons */}
                        <motion.div 
                          className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ opacity: 0 }}
                        >
                          <motion.a 
                            href={project.githubUrl}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-1.5 rounded-md bg-gray-700 text-white border border-gray-600"
                          >
                            <Github className="w-3 h-3" />
                          </motion.a>
                          
                          <motion.a 
                            href={project.liveUrl}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-1.5 rounded-md bg-gray-700 text-white border border-gray-600"
                          >
                            <ExternalLink className="w-3 h-3" />
                          </motion.a>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;