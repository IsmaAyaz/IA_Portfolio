import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [skillsRef, visibleSkills] = useStaggeredAnimation(3, 200);

  const skillCategories = [
    {
      title: 'Frontend',
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
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Python', level: 80, icon: '🐍' },
        { name: 'Express.js', level: 85, icon: '🚀' },
        { name: 'MongoDB', level: 80, icon: '🍃' }
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
         { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Git', level: 90, icon: '📚' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'Collab', level: 70, icon: '🔥' },
       
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="portfolio-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${
              headerVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          {/* Skills Grid */}
          <div ref={skillsRef} className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex} 
                className={`card-hover transition-all duration-700 ${
                  visibleSkills.has(categoryIndex)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-center">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out ${
                            visibleSkills.has(categoryIndex) ? '' : 'w-0'
                          }`}
                          style={{ 
                            width: visibleSkills.has(categoryIndex) ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-6">Other Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Redux', 'Sass', 'Firebase', 'Stripe', 'Socket.io', 
                'Prisma', 'Figma', 'Photoshop', 'Linux', 'Nginx'
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-primary/10 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

