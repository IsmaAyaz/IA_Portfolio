# Software Developer Portfolio Template

A clean, modern, and professional portfolio website template built with React.js and Tailwind CSS. Perfect for software developers looking to showcase their skills, projects, and experience.

## ✨ Features

- **Modern Design**: Clean, minimalist design with professional aesthetics
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Scroll-based animations and smooth transitions
- **Professional Sections**: All essential portfolio sections included
- **Customizable**: Easy to customize colors, content, and styling
- **Performance Optimized**: Built with modern React and Vite for fast loading

## 🎨 Design Highlights

- **Color Palette**: Navy blue primary with teal accents
- **Typography**: Inter font for clean, modern text
- **Animations**: Fade-in, slide-in effects with staggered timing
- **Icons**: Lucide React icons throughout
- **Cards**: Hover effects and subtle shadows
- **Progress Bars**: Animated skill level indicators

## 📱 Sections Included

1. **Hero/Introduction**: Eye-catching landing section with name, title, and CTA buttons
2. **About Me**: Personal introduction with highlight cards
3. **Skills**: Technical skills with animated progress bars and icons
4. **Projects**: Featured and other projects with descriptions and links
5. **Experience**: Work history with achievements and technologies
6. **Education**: Academic background and certifications
7. **Contact**: Contact form and social media links

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm, npm, or yarn

### Installation

1. Clone or download the project
2. Navigate to the project directory:
   ```bash
   cd developer-portfolio
   ```

3. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

4. Start the development server:
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## 🛠️ Customization

### Personal Information

Edit the following files to customize with your information:

- **Hero Section**: `src/components/Hero.jsx`
- **About Section**: `src/components/About.jsx`
- **Skills**: `src/components/Skills.jsx`
- **Projects**: `src/components/Projects.jsx`
- **Experience**: `src/components/Experience.jsx`
- **Education**: `src/components/Education.jsx`
- **Contact**: `src/components/Contact.jsx`

### Colors and Styling

The color scheme is defined in `src/App.css`:

```css
:root {
  --primary: oklch(0.25 0.05 240); /* Navy Blue */
  --accent: oklch(0.6 0.08 200);   /* Teal Accent */
  /* ... other colors */
}
```

### Adding Your Photo

Replace the placeholder in the About section (`src/components/About.jsx`) with your actual photo:

```jsx
// Replace the placeholder div with an img tag
<img 
  src="/path/to/your/photo.jpg" 
  alt="Your Name"
  className="w-64 h-64 rounded-full object-cover"
/>
```

### Project Images

Add your project images to the `src/assets` folder and update the image paths in `src/components/Projects.jsx`.

## 📦 Building for Production

To build the project for production:

```bash
pnpm run build
# or
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## 🌐 Deployment

This template can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Firebase Hosting**: Use Firebase CLI

## 🎯 Key Components

### Header Component
- Fixed navigation with smooth scrolling
- Dark mode toggle
- Mobile-responsive hamburger menu

### Hero Component
- Gradient text effects
- Call-to-action buttons
- Social media links
- Animated scroll indicator

### Skills Component
- Animated progress bars
- Categorized skills (Frontend, Backend, Tools)
- Scroll-triggered animations

### Projects Component
- Featured projects grid
- Project cards with hover effects
- Technology tags
- External links to demos and code

### Contact Component
- Functional contact form
- Contact information display
- Social media links

## 🔧 Technical Details

### Built With
- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/UI**: High-quality UI components
- **Lucide React**: Beautiful icon library
- **Framer Motion**: Animation library (ready to use)

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This template is free to use for personal and commercial projects. Attribution is appreciated but not required.

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve this template.

## 📞 Support

If you need help customizing this template or have questions, feel free to reach out!

---

**Happy coding! 🚀**

