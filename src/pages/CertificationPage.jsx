import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import AnimatedBackground from '../components/AnimatedBackground';

const CertificationPage = () => {
  const certifications = [
    {
      title: 'Bachelor of Computer Science',
      issuer: 'NUML',
      date: '2021 - 2025',
      description: 'Pursuing/Completed Bachelor of Computer Science degree at NUML.',
      link: '',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Data Analyst Certificate',
      issuer: 'Leverify Quest',
      date: '5 Weeks',
      description: 'Completed a 5-week Data Analyst course covering data analysis tools and techniques.',
      link: '',
      gradient: 'from-green-500 to-lime-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  return (
    <div className="min-h-screen pt-20 relative">
      <AnimatedBackground variant="certifications" />

      <div className="portfolio-container relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight text-white">
              Certifications
            </motion.h1>
            <motion.p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
              My professional certifications and achievements
            </motion.p>
            <motion.div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full" initial={{ width: 0 }} animate={{ width: 96 }} transition={{ duration: 1 }} />
          </motion.div>

          {/* Certifications Grid */}
          <motion.div className="grid md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" animate="visible">
            {certifications.map((cert, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} className="group">
                <Card className="relative overflow-hidden border border-gray-700 bg-card/50 backdrop-blur-md shadow-lg hover:shadow-2xl transition-shadow duration-500 h-full">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-5 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start space-x-4 mb-4">
                      <motion.div className={`w-14 h-14 bg-gradient-to-br ${cert.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 text-white`} whileHover={{ rotate: 360, scale: 1.15 }} transition={{ duration: 0.6 }}>
                        <Award className="h-7 w-7" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-300">{cert.title}</h3>
                        <p className="text-gray-400 text-sm flex items-center gap-1"><Star className="h-4 w-4 text-yellow-400"/> {cert.issuer}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{cert.date}</span>
                      </div>
                      {cert.link && (
                        <motion.a href={cert.link} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-purple-400 hover:text-pink-400 font-medium"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          View Credential <CheckCircle className="h-4 w-4" />
                        </motion.a>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-600 text-purple-400 font-semibold">
                        Certified
                      </Badge>
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

export default CertificationPage;