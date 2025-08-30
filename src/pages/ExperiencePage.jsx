import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import AnimatedBackground from '../components/AnimatedBackground';

const ExperiencePage = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Ash Tech',
      location: 'Remote',
      startDate: 'July 2024',
      endDate: 'Present',
      description: [
        'Developing and maintaining responsive web applications using React.js, Tailwind CSS, and modern JavaScript frameworks.',
        'Collaborating with backend developers to integrate REST APIs and enhance performance of frontend systems.',
        'Implementing reusable UI components and improving website accessibility and performance.',
        'Working in an agile remote team environment, ensuring timely delivery of features and bug fixes.'
      ],
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Git', 'REST API', ],
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'AI/ML Intern',
      company: 'Inotech Solutions',
      location: 'Onsite',
      startDate: 'Jun 2024',
      endDate: 'August 2024',
      description: [
        'Built and trained machine learning models for predictive analytics using Python, TensorFlow, and Scikit-learn.',
        'Worked on data preprocessing, feature engineering, and model optimization to improve accuracy and performance.',
        'Developed Jupyter Notebook and Google Colab workflows for rapid prototyping of ML solutions.',
        'Collaborated with the AI team to deploy ML models on cloud environments for real-world applications.'
      ],
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Google Colab', 'Pandas', 'NumPy'],
      gradient: 'from-green-500 to-teal-500'
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
    <div className="min-h-screen pt-18 relative">
      <AnimatedBackground variant="experience" />
      
      <div className="portfolio-container relative z-10 h-full">
        <div className="max-w-6xl mx-auto px-4">
          {/* Page Header */}
          <motion.div 
            className="text-center mb-13"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Work Experience
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              My professional journey and contributions in the software development industry
            </motion.p>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </motion.div>

          {/* Experience List */}
          <motion.div 
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.01,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="flex-1"
              >
                <Card className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm group h-full">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start space-x-3 mb-3">
                      <motion.div 
                        className={`w-11 h-11 bg-gradient-to-br ${exp.gradient} rounded-lg flex items-center justify-center shadow-lg flex-shrink-0`}
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Briefcase className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-muted-foreground text-xs">
                          {exp.company} | {exp.location}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-xs text-muted-foreground mb-3">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{exp.startDate} - {exp.endDate}</span>
                    </div>

                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-4 pl-1">
                      {exp.description.map((point, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 + idx * 0.05 }}
                          className="leading-tight"
                        >
                          {point}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1">
                      {exp.technologies.map((tech, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + index * 0.1 + idx * 0.05 }}
                          whileHover={{ 
                            scale: 1.05,
                            y: -2,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <Badge 
                            variant="secondary"
                            className="text-xs bg-gradient-to-r from-muted to-muted/80 hover:from-primary/10 hover:to-accent/10 border border-border/50 hover:border-primary/30 transition-all duration-300 py-0 px-2"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;