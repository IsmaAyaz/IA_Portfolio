import { GraduationCap, Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      location: 'San Francisco, CA',
      period: '2014 - 2018',
      gpa: '3.8/4.0',
      description: 'Focused on software engineering, algorithms, and data structures. Completed senior capstone project building a full-stack web application.',
      coursework: [
        'Data Structures & Algorithms',
        'Software Engineering',
        'Database Systems',
        'Web Development',
        'Computer Networks',
        'Operating Systems'
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-SAA-123456'
    },
    {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      credentialId: 'GCP-PD-789012'
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2021',
      credentialId: 'MDB-DEV-345678'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2021',
      credentialId: 'META-REACT-901234'
    }
  ];

  const courses = [
    {
      title: 'Advanced React Patterns',
      provider: 'Frontend Masters',
      date: '2023',
      description: 'Deep dive into advanced React patterns, hooks, and performance optimization'
    },
    {
      title: 'System Design Interview',
      provider: 'Educative',
      date: '2022',
      description: 'Comprehensive course on designing scalable distributed systems'
    },
    {
      title: 'Docker & Kubernetes',
      provider: 'Udemy',
      date: '2022',
      description: 'Container orchestration and deployment strategies'
    },
    {
      title: 'GraphQL with Node.js',
      provider: 'Pluralsight',
      date: '2021',
      description: 'Building APIs with GraphQL, Apollo Server, and modern best practices'
    }
  ];

  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="portfolio-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Learning</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic background and continuous learning journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Formal Education */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Formal Education</h3>
              {education.map((edu, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{edu.degree}</CardTitle>
                        <p className="text-primary font-medium">{edu.institution}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground mt-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                          <span className="hidden sm:inline">•</span>
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                    <div>
                      <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {edu.coursework.map((course, courseIndex) => (
                          <span key={courseIndex} className="text-sm text-muted-foreground">
                            • {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <Card key={index} className="card-hover">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Award className="h-4 w-4 text-accent" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{cert.title}</h4>
                            <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
                            <p className="text-xs text-muted-foreground mt-1">ID: {cert.credentialId}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Continuous Learning */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Continuous Learning</h3>
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{course.title}</h4>
                          <p className="text-sm text-muted-foreground">{course.provider} • {course.date}</p>
                          <p className="text-sm text-muted-foreground mt-2">{course.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Learning Philosophy */}
              <Card className="mt-8 card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Learning Philosophy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    I believe in continuous learning and staying updated with the latest 
                    technologies. I regularly read technical blogs, contribute to open-source 
                    projects, and experiment with new frameworks and tools. My goal is to 
                    always be learning something new and sharing knowledge with the community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

