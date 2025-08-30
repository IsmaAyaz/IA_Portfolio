import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Lead development of scalable web applications serving 100k+ users. Mentor junior developers and architect solutions using modern technologies.',
      achievements: [
        'Improved application performance by 40% through code optimization',
        'Led migration from monolithic to microservices architecture',
        'Mentored 5 junior developers and conducted technical interviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects from conception to deployment. Worked closely with design and product teams.',
      achievements: [
        'Built 8 client websites resulting in $500k+ revenue',
        'Reduced bug reports by 50% through comprehensive testing',
        'Implemented responsive design increasing mobile traffic by 35%',
        'Collaborated with UX team to improve user engagement by 25%'
      ],
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Stripe', 'Heroku']
    },
    {
      title: 'Frontend Developer',
      company: 'WebSolutions LLC',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Focused on creating responsive, accessible web interfaces. Collaborated with backend developers to integrate APIs and optimize user experience.',
      achievements: [
        'Developed component library used across 15+ projects',
        'Improved website accessibility scores to 95+ on all projects',
        'Reduced page load times by 30% through optimization',
        'Trained team on modern CSS techniques and best practices'
      ],
      technologies: ['React', 'TypeScript', 'Sass', 'Webpack', 'Jest']
    },
    {
      title: 'Junior Web Developer',
      company: 'Digital Agency Pro',
      location: 'New York, NY',
      period: '2018 - 2019',
      description: 'Started my professional journey building websites for small businesses. Learned industry best practices and modern development workflows.',
      achievements: [
        'Completed 20+ client projects with 100% satisfaction rate',
        'Learned and implemented modern JavaScript frameworks',
        'Contributed to open-source projects gaining 500+ GitHub stars',
        'Achieved Google PageSpeed scores of 90+ on all projects'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'WordPress', 'MySQL']
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="portfolio-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and key accomplishments
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{experience.title}</CardTitle>
                      <div className="space-y-1">
                        <p className="text-lg font-medium text-primary">{experience.company}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{experience.description}</p>
                  
                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-muted text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

