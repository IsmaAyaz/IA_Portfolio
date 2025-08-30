# Customization Guide

This guide will help you customize the portfolio template to make it your own.

## 🎯 Quick Start Checklist

- [ ] Update personal information in Hero section
- [ ] Replace placeholder content in About section
- [ ] Add your skills and proficiency levels
- [ ] Add your projects with images and descriptions
- [ ] Update work experience and achievements
- [ ] Add your education and certifications
- [ ] Update contact information and social links
- [ ] Add your profile photo
- [ ] Customize colors (optional)

## 📝 Content Customization

### 1. Hero Section (`src/components/Hero.jsx`)

Replace the following:
```jsx
// Line 15-16: Your name and title
<span className="gradient-text">John Doe</span>
<p className="text-xl md:text-2xl text-muted-foreground mb-4">
  Full-Stack Developer
</p>

// Line 18-21: Your tagline
<p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
  I create beautiful, responsive web applications with modern technologies. 
  Passionate about clean code, user experience, and innovative solutions.
</p>

// Line 54-70: Update social links
<a href="https://github.com/yourusername" ...>
<a href="https://linkedin.com/in/yourusername" ...>
<a href="mailto:your.email@example.com" ...>
```

### 2. About Section (`src/components/About.jsx`)

```jsx
// Line 32-50: Replace with your story
<p className="text-lg leading-relaxed">
  Your personal story and background...
</p>

// Line 55-65: Replace placeholder with your photo
<div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
  <img 
    src="/src/assets/your-photo.jpg" 
    alt="Your Name"
    className="w-56 h-56 rounded-full object-cover shadow-lg"
  />
</div>

// Line 70-95: Customize highlight cards
const highlights = [
  {
    icon: Code,
    title: 'Your Strength',
    description: 'Your description'
  },
  // ... add more
];
```

### 3. Skills Section (`src/components/Skills.jsx`)

```jsx
// Line 8-42: Update your skills and levels
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'Your Skill', level: 85, icon: '📘' },
      // ... add your skills
    ]
  },
  // ... update other categories
];

// Line 109-116: Update additional technologies
{[
  'Your', 'Additional', 'Technologies', 'Here'
].map((tech, index) => (
  // ...
))}
```

### 4. Projects Section (`src/components/Projects.jsx`)

```jsx
// Line 7-67: Replace with your projects
const projects = [
  {
    title: 'Your Project Name',
    description: 'Your project description...',
    image: '/src/assets/project1.jpg', // Add your project image
    technologies: ['React', 'Node.js', 'Your', 'Tech', 'Stack'],
    liveUrl: 'https://your-project-demo.com',
    githubUrl: 'https://github.com/yourusername/project',
    featured: true
  },
  // ... add more projects
];
```

### 5. Experience Section (`src/components/Experience.jsx`)

```jsx
// Line 6-67: Replace with your work experience
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    location: 'City, State',
    period: '2022 - Present',
    description: 'Your role description...',
    achievements: [
      'Your achievement 1',
      'Your achievement 2',
      // ... add more
    ],
    technologies: ['Tech1', 'Tech2', 'Tech3']
  },
  // ... add more experiences
];
```

### 6. Education Section (`src/components/Education.jsx`)

```jsx
// Line 6-25: Update your education
const education = [
  {
    degree: 'Your Degree',
    institution: 'Your University',
    location: 'City, State',
    period: '2018 - 2022',
    gpa: '3.8/4.0',
    description: 'Your education description...',
    coursework: [
      'Relevant Course 1',
      'Relevant Course 2',
      // ... add more
    ]
  }
];

// Line 27-50: Update your certifications
const certifications = [
  {
    title: 'Your Certification',
    issuer: 'Issuing Organization',
    date: '2023',
    credentialId: 'CERT-123456'
  },
  // ... add more
];

// Line 52-75: Update your courses
const courses = [
  {
    title: 'Course Name',
    provider: 'Platform',
    date: '2023',
    description: 'Course description'
  },
  // ... add more
];
```

### 7. Contact Section (`src/components/Contact.jsx`)

```jsx
// Line 25-39: Update your contact information
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Your City, State',
    href: null
  }
];

// Line 41-59: Update social links
const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/yourusername',
    username: '@yourusername'
  },
  // ... update other social links
];
```

## 🎨 Visual Customization

### Colors

Edit `src/App.css` to change the color scheme:

```css
:root {
  /* Primary color (Navy Blue) */
  --primary: oklch(0.25 0.05 240);
  
  /* Accent color (Teal) */
  --accent: oklch(0.6 0.08 200);
  
  /* You can also customize other colors */
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* ... */
}

/* Dark mode colors */
.dark {
  --background: oklch(0.08 0.01 240);
  --primary: oklch(0.6 0.08 200);
  /* ... */
}
```

### Fonts

The template uses Inter font. To change it:

1. Update the Google Fonts import in `src/App.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
```

2. Update the font family:
```css
.font-sans {
  font-family: 'YourFont', system-ui, sans-serif;
}
```

### Animations

Customize animations in `src/App.css`:

```css
/* Modify existing animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Add new animations */
@keyframes yourCustomAnimation {
  /* ... */
}
```

## 📸 Adding Images

### Profile Photo
1. Add your photo to `src/assets/profile.jpg`
2. Update the About component to use your photo

### Project Images
1. Add project screenshots to `src/assets/`
2. Update the Projects component with correct paths
3. Optimize images for web (recommended: WebP format, max 800px width)

### Favicon
Replace `public/favicon.ico` with your own favicon.

## 🔧 Advanced Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`

### Custom Components

Use the existing shadcn/ui components or add your own:

```jsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
// ... use in your components
```

### Form Functionality

To make the contact form functional:

1. Add a form handler service (EmailJS, Formspree, etc.)
2. Update the `handleSubmit` function in `src/components/Contact.jsx`
3. Add proper error handling and success messages

## 🚀 Deployment Tips

### Before Deploying
- [ ] Test on different screen sizes
- [ ] Check all links work
- [ ] Optimize images
- [ ] Update meta tags in `index.html`
- [ ] Test contact form (if implemented)

### SEO Optimization
Update `index.html`:
```html
<title>Your Name - Software Developer</title>
<meta name="description" content="Your description">
<meta name="keywords" content="your, keywords, here">
```

## 💡 Tips

1. **Keep it updated**: Regularly update your projects and experience
2. **Performance**: Optimize images and minimize bundle size
3. **Accessibility**: Ensure good contrast ratios and keyboard navigation
4. **Mobile-first**: Always test on mobile devices
5. **Personal touch**: Add elements that reflect your personality

Need help? Feel free to reach out or check the main README for more information!

