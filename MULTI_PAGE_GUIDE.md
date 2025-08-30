# Multi-Page Portfolio Guide

This guide explains the refactored multi-page portfolio structure and how to customize it for your needs.

## 🎯 What's New

The portfolio has been converted from a single-page scrolling site to a multi-page application using React Router. Each section now has its own dedicated page with enhanced UI and smooth transitions.

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation with active link highlighting
│   ├── Footer.jsx          # Footer component
│   └── ui/                 # Shadcn/UI components
├── pages/
│   ├── HomePage.jsx        # Enhanced hero/landing page
│   ├── AboutPage.jsx       # About me page
│   ├── SkillsPage.jsx      # Skills and technologies
│   ├── ProjectsPage.jsx    # Projects showcase
│   └── ContactPage.jsx     # Contact form and info
├── hooks/
│   └── useScrollAnimation.js # Custom animation hooks
├── App.jsx                 # Main app with React Router
└── App.css                 # Enhanced styles and animations
```

## 🚀 Key Features

### Enhanced Home Page
- **Modern Hero Section**: Gradient backgrounds, glassmorphism effects
- **Animated Elements**: Smooth fade-in animations with staggered delays
- **Stats Cards**: Professional statistics display with hover effects
- **Social Links**: Stylized social media links with hover animations
- **Call-to-Action Buttons**: Multiple CTAs for different user intents

### Navigation System
- **React Router**: Smooth page transitions between sections
- **Active Link Highlighting**: Current page is highlighted in navigation
- **Mobile Responsive**: Hamburger menu for mobile devices
- **Fixed Header**: Navigation stays accessible while scrolling

### Page-Specific Enhancements
- **About Page**: Professional layout with highlight cards and values
- **Skills Page**: Animated progress bars with categorized skills
- **Projects Page**: Featured projects with detailed cards and status badges
- **Contact Page**: Functional form with response time information

## 🎨 Design Improvements

### Visual Enhancements
- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Gradient Accents**: Subtle gradients throughout the design
- **Enhanced Typography**: Better font weights and spacing
- **Improved Color Scheme**: More sophisticated color palette
- **Card Hover Effects**: Smooth hover animations on interactive elements

### Animation System
- **Scroll Animations**: Elements animate in as they come into view
- **Staggered Animations**: Sequential animation delays for lists
- **Page Transitions**: Smooth transitions between pages
- **Micro-interactions**: Button hovers, form interactions

## 📱 Responsive Design

The portfolio is fully responsive across all device sizes:
- **Desktop**: Full layout with side-by-side sections
- **Tablet**: Adjusted layouts with proper spacing
- **Mobile**: Stacked layouts with touch-friendly interactions

## 🛠️ Customization Guide

### 1. Personal Information

Update your details in each page component:

**HomePage.jsx** (Lines 15-25):
```jsx
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
  Hi, I'm{' '}
  <span className="gradient-text block md:inline">Your Name</span>
</h1>

<h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-4 font-light">
  Your Job Title
</h2>
```

**AboutPage.jsx** (Lines 32-50):
```jsx
<p className="text-lg leading-relaxed text-muted-foreground">
  Your personal story and background...
</p>
```

### 2. Navigation Links

Update the navigation in **Header.jsx** (Lines 8-14):
```jsx
const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' }
];
```

### 3. Skills and Technologies

Update your skills in **SkillsPage.jsx** (Lines 8-42):
```jsx
const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Your Skill', level: 90, icon: '🎯' },
      // Add more skills...
    ]
  }
];
```

### 4. Projects

Update your projects in **ProjectsPage.jsx** (Lines 7-67):
```jsx
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    technologies: ['React', 'Node.js', 'Your Tech Stack'],
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/you/project',
    featured: true,
    status: 'Completed'
  }
];
```

### 5. Contact Information

Update contact details in **ContactPage.jsx** (Lines 25-45):
```jsx
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com'
  }
];
```

### 6. Social Links

Update social media links in **HomePage.jsx** (Lines 54-70):
```jsx
<a
  href="https://github.com/yourusername"
  target="_blank"
  rel="noopener noreferrer"
  // ... styling classes
>
  <Github className="h-6 w-6" />
</a>
```

## 🎯 Advanced Customization

### Adding New Pages

1. Create a new page component in `src/pages/`
2. Add the route to `App.jsx`:
```jsx
<Route path="/new-page" element={<NewPage />} />
```
3. Add navigation link to `Header.jsx`

### Custom Animations

Use the animation classes in `App.css`:
```jsx
<div className="animate-fade-in-up animate-delay-200">
  Your content
</div>
```

### Color Scheme

Modify CSS variables in `App.css`:
```css
:root {
  --primary: oklch(0.25 0.05 240); /* Your primary color */
  --accent: oklch(0.6 0.08 200);   /* Your accent color */
}
```

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service:
- **Vercel**: Connect GitHub repository
- **Netlify**: Drag and drop `dist` folder
- **GitHub Pages**: Use GitHub Actions

## 📋 Checklist for Customization

- [ ] Update personal information in all pages
- [ ] Replace placeholder content with your details
- [ ] Add your actual projects and descriptions
- [ ] Update skills and proficiency levels
- [ ] Add your contact information
- [ ] Replace social media links
- [ ] Add your profile photo
- [ ] Test all navigation links
- [ ] Verify mobile responsiveness
- [ ] Test contact form functionality (if implemented)

## 🔧 Technical Notes

### React Router Setup
The app uses React Router v6 with the following structure:
- `BrowserRouter` wraps the entire app
- `Routes` and `Route` components define page routing
- `Link` components provide navigation
- `useLocation` hook tracks current page for active states

### Animation System
- CSS keyframes for smooth animations
- Custom hooks for scroll-triggered animations
- Staggered animation delays for better UX
- Reduced motion support for accessibility

### Performance Optimizations
- Lazy loading for better initial load times
- Optimized images and assets
- Minimal bundle size with tree shaking
- Efficient CSS with Tailwind purging

## 🎉 Conclusion

Your portfolio is now a modern, multi-page application with enhanced UI, smooth animations, and professional design. The modular structure makes it easy to maintain and customize as your career grows.

For questions or support, refer to the main README.md file or reach out through the contact form!

