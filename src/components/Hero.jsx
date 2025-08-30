import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      
      <div className="portfolio-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="gradient-text">John Doe</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Full-Stack Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
              I create beautiful, responsive web applications with modern technologies. 
              Passionate about clean code, user experience, and innovative solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animate-delay-200">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('#projects')}
              className="min-w-[160px]"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="min-w-[160px]"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up animate-delay-300">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:john@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in-up animate-delay-400">
            <button
              onClick={() => scrollToSection('#about')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 animate-bounce"
            >
              <ArrowDown className="h-6 w-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

