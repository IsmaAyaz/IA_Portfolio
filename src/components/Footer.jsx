import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Function to create Gmail compose URL (same as in ContactPage)
  const getGmailUrl = (email, subject = '', body = '') => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedBody}`;
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/ismaayaz',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/isma-ayaz-8021b72b5/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: getGmailUrl('ismaayaz987@gmail.com', 'Portfolio Inquiry'),
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border relative z-10">
      <div className="portfolio-container py-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center mb-4">
            <button
              onClick={scrollToTop}
              className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity mb-2"
            >
              IA
            </button>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Thanks for visiting my portfolio. Let's build something amazing together!
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
              © {currentYear} IsmaAyaz. Made with{' '}
              <Heart className="h-3 w-3 text-red-500 fill-current" />
              {' '}and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;