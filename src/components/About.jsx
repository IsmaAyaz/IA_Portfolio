import { Code, Coffee, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card.jsx';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Turning complex challenges into elegant solutions'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with cross-functional teams'
    },
    {
      icon: Coffee,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and best practices'
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="portfolio-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a love for creating digital experiences
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a full-stack developer with over 5 years of experience building 
                web applications that solve real-world problems. My journey started 
                with a curiosity about how websites work, and it has evolved into a 
                passion for creating seamless user experiences.
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in modern JavaScript frameworks, particularly React and 
                Node.js, but I'm always eager to learn new technologies. When I'm not 
                coding, you can find me contributing to open-source projects, writing 
                technical blogs, or exploring the latest in web development.
              </p>
              <p className="text-lg leading-relaxed">
                I believe in the power of collaboration and continuous learning. 
                Every project is an opportunity to grow, innovate, and create 
                something meaningful.
              </p>
            </div>

            {/* Profile Image Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 bg-card rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-6xl font-bold text-muted-foreground">JD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

