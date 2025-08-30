import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.jsx";
import AnimatedBackground from "../components/AnimatedBackground";
import TypewriterText from "../components/TypewriterText";

// Function to create Gmail compose URL (same as in ContactPage)
const getGmailUrl = (email, subject = '', body = '') => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedBody}`;
};

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ismaayaz987@gmail.com",
      href: getGmailUrl('ismaayaz987@gmail.com', 'Job Opportunity/Project Inquiry'),
      description: "Reach out via email anytime.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 3185248626",
      href: "tel:+923185248626",
      description: "Available for quick calls or WhatsApp.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen pt-20 relative">
      <AnimatedBackground variant="contact" />

      <div className="portfolio-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Page Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get In Touch / Hire Me
            </motion.h1>

            <motion.div
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I'm always open to discussing{" "}
              <TypewriterText
                texts={[
                  "job opportunities",
                  "new projects",
                  "freelance work",
                  "collaborations",
                  "career growth",
                ]}
                className="text-primary font-semibold"
                speed={80}
                deleteSpeed={40}
                delayBetween={2000}
              />
            </motion.div>

            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I'm actively looking for opportunities where I can contribute as a
              Frontend / Fullstack developer. Feel free to reach out if you're
              hiring or have an exciting project in mind!
            </motion.p>

            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mt-4 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </motion.div>

          {/* Contact Information Only */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mt-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="relative overflow-hidden border-border/50 bg-card/70 backdrop-blur-lg shadow-lg rounded-2xl">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 hover:opacity-15 transition-opacity duration-500`}
                  ></div>

                  <CardContent className="p-8 relative z-10 flex flex-col items-center text-center">
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center shadow-lg mb-4`}
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="font-semibold text-lg mb-2">{info.label}</h3>
                    <motion.a
                      href={info.href}
                      target={info.label === 'Email' ? '_blank' : '_self'}
                      className="text-primary hover:text-accent font-medium text-sm transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {info.value}
                    </motion.a>
                    <p className="text-xs text-muted-foreground mt-2">
                      {info.description}
                    </p>
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

export default ContactPage;