import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const TypewriterText = ({ 
  texts = [], 
  speed = 100, 
  deleteSpeed = 50, 
  delayBetween = 2000,
  className = "",
  infinite = true 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => {
            if (infinite) {
              return (prev + 1) % texts.length;
            } else {
              return prev < texts.length - 1 ? prev + 1 : prev;
            }
          });
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        
        if (currentText === fullText) {
          if (infinite || currentTextIndex < texts.length - 1) {
            setIsPaused(true);
          }
        }
      }
    }, isPaused ? delayBetween : isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, speed, deleteSpeed, delayBetween, infinite]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block w-0.5 h-[1em] bg-current ml-1"
      />
    </span>
  );
};

export default TypewriterText;

