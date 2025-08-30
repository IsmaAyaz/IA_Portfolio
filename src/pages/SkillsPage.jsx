import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Progress } from '@/components/ui/progress.jsx';
import { Sparkles, TrendingUp } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const SkillsPage = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'React Native', level: 80, icon: '📱' },
        { name: 'Tailwind CSS', level: 95, icon: '🎨' },
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'CSS3', level: 90, icon: '🎨' }
      ]
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Python', level: 80, icon: '🐍' },
        { name: 'Express.js', level: 85, icon: '🚀' },
        { name: 'MongoDB', level: 80, icon: '🍃' }
      ]
    },
    {
      title: 'Tools & DevOps',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Git', level: 90, icon: '📚' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'Collab', level: 70, icon: '🔥' },
      ]
    }
  ];

  const additionalTechnologies = [
    'API Integration', 'Firebase', 'Figma', 'Photoshop', 'Canva', 'Linux',
    'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV',
    'Bootstrap', 'REST APIs'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const skillVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen pt-16 relative">
      <AnimatedBackground variant="skills" />
      
      <div className="portfolio-container relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Page Header - Reduced spacing */}
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Skills & Technologies
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A comprehensive overview of my technical expertise and proficiency levels
            </motion.p>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </motion.div>

          {/* Skills Categories - Reduced spacing and card padding */}
          <motion.div 
            className="grid lg:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm group h-full">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <CardContent className="p-5 relative z-10">
                    {/* Category Header */}
                    <motion.div 
                      className="flex items-center mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.2 }}
                    >
                      <motion.div 
                        className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full mr-3 shadow-lg`}
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: categoryIndex * 0.5
                        }}
                      />
                      <h3 className="text-lg font-bold">{category.title}</h3>
                    </motion.div>

                    {/* Skills List - Reduced spacing */}
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          variants={skillVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: 1 + categoryIndex * 0.3 + skillIndex * 0.1 }}
                          whileHover={{ 
                            x: 5,
                            transition: { duration: 0.2 }
                          }}
                          className="group/skill"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center space-x-2">
                              <motion.span 
                                className="text-base"
                                whileHover={{ 
                                  scale: 1.3,
                                  rotate: 360
                                }}
                                transition={{ duration: 0.5 }}
                              >
                                {skill.icon}
                              </motion.span>
                              <span className="font-medium text-sm group-hover/skill:text-primary transition-colors duration-300">
                                {skill.name}
                              </span>
                            </div>
                            <motion.span 
                              className="text-xs font-semibold text-muted-foreground group-hover/skill:text-primary transition-colors duration-300"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.2 + categoryIndex * 0.3 + skillIndex * 0.1 }}
                            >
                              {skill.level}%
                            </motion.span>
                          </div>
                          
                          {/* Enhanced Progress Bar - Thinner */}
                          <div className="relative">
                            <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ 
                                  duration: 1.5, 
                                  delay: 1.4 + categoryIndex * 0.3 + skillIndex * 0.1,
                                  ease: "easeOut"
                                }}
                              >
                                {/* Shimmer Effect */}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                  animate={{ x: ['-100%', '100%'] }}
                                  transition={{ 
                                    duration: 2, 
                                    repeat: Infinity,
                                    delay: 2 + categoryIndex * 0.3 + skillIndex * 0.1
                                  }}
                                />
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Technologies - Reduced spacing */}
         
<motion.div 
  className="mb-12"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1.5 }}
>
  <Card className="border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden group">
    {/* Animated Background */}
    <motion.div 
      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
      animate={{ 
        background: [
          'linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(16, 185, 129, 0.05))',
          'linear-gradient(45deg, rgba(16, 185, 129, 0.05), rgba(139, 92, 246, 0.05))',
          'linear-gradient(45deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05))'
        ]
      }}
      transition={{ duration: 8, repeat: Infinity }}
    />
    
    <CardContent className="p-6 relative z-10">
      <motion.h2 
        className="text-xl font-bold text-center mb-6 flex items-center justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.7 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="h-5 w-5 text-primary" />
        </motion.div>
        Additional Technologies
      </motion.h2>
      
      <div className="flex flex-wrap justify-center gap-3">
        {additionalTechnologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 1.9 + index * 0.05,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.08,
              y: -3,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Badge 
              variant="secondary" 
              className="px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-muted to-muted/80 hover:from-primary/10 hover:to-accent/10 border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-default"
            >
              {tech}
            </Badge>
          </motion.div>
        ))}
      </div>
    </CardContent>
  </Card>
</motion.div>
          {/* Learning Philosophy - Reduced spacing */}
         
<motion.div 
  className="text-center pb-8"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 2 }}
>
  <Card className="max-w-4xl mx-auto border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden group">
    {/* Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 group-hover:from-green-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
    
    <CardContent className="p-6 relative z-10">
      <motion.div 
        className="flex items-center justify-center mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2.2 }}
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <TrendingUp className="h-7 w-7 text-primary mr-3" />
        </motion.div>
        <h3 className="text-xl font-bold">My Learning Philosophy</h3>
      </motion.div>
      
      <motion.p 
        className="text-md text-muted-foreground leading-relaxed mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.4 }}
      >
        I believe in continuous learning and adaptability. Instead of just memorizing tools, I focus on mastering core principles and best practices—so I can quickly learn new technologies and apply the right solution for each project.
      </motion.p>
      
      <motion.div 
        className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20 text-primary text-sm font-semibold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.6 }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)"
        }}
      >
        <motion.span
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🚀
        </motion.span>
        <span className="ml-2">Always Learning, Always Growing</span>
      </motion.div>
    </CardContent>
  </Card>
</motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;