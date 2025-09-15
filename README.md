# Professional Portfolio - Srinivasan "Murali" Muralidharan

A modern, responsive portfolio website showcasing 20+ years of transformational technology leadership experience. Built with React, Tailwind CSS, and optimized for performance.

## 🌟 Features

- **Modern Design**: Clean, professional blue theme with responsive layout
- **Interactive Sections**: Hero, About, Skills, Experience, Projects, Blog, Contact
- **Smooth Animations**: Scroll-based animations and hover effects
- **Contact Form**: Ready for integration with form services
- **Resume Download**: Built-in PDF download functionality
- **Mobile Optimized**: Fully responsive across all devices
- **SEO Ready**: Proper meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn installed
- Git for version control

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/manuani/portfoliocomplete.git
   cd portfoliocomplete
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**:
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Build for production**:
   ```bash
   npm run build
   # or
   yarn build
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx           # Landing section with introduction
│   ├── About.jsx          # Professional highlights and achievements
│   ├── Skills.jsx         # Technical and leadership skills
│   ├── Experience.jsx     # Career timeline and accomplishments
│   ├── Projects.jsx       # Featured projects and testimonials
│   ├── Blog.jsx           # Thought leadership articles
│   ├── Contact.jsx        # Contact form and information
│   ├── Header.jsx         # Navigation header
│   ├── Footer.jsx         # Footer with social links
│   └── ui/               # Reusable UI components
├── data/
│   └── mock.js           # Professional data and content
├── hooks/
│   └── use-toast.js      # Toast notification hook
└── lib/
    └── utils.js          # Utility functions
```

## 🎨 Customization

### Update Your Information

1. **Personal Data**: Edit `src/data/mock.js` to update:
   - Contact information
   - Professional experience
   - Skills and certifications
   - Projects and achievements
   - Blog posts

2. **Resume**: Replace `public/resume.pdf` with your actual resume

3. **Profile Image**: Update the `profileImage` URL in `mock.js` or add your image to the `public` folder

### Styling
- **Colors**: Modify Tailwind classes in components
- **Theme**: Update `tailwind.config.js` for global theme changes
- **Layout**: Adjust component layouts as needed

## 🌐 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script to package.json: `"deploy": "gh-pages -d build"`
4. Deploy: `npm run deploy`

### Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `build`
4. Deploy automatically on git push

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel auto-detects React configuration
3. Deploy with one click

## 📧 Contact Form Setup

The contact form is currently in demo mode. For production:

### Option 1: Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Get your endpoint URL
3. Update the form action in `Contact.jsx`

### Option 2: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Follow their React integration guide
3. Update the form submission logic

### Option 3: Netlify Forms
1. Add `netlify` attribute to the form
2. Works automatically with Netlify hosting

## 🛠️ Tech Stack

- **Frontend**: React 18, Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Create React App with CRACO
- **Styling**: Tailwind CSS with custom components
- **Components**: Shadcn/ui inspired components

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal portfolio project, but if you notice any issues or have suggestions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Live Demo

Visit the live portfolio: [Your Live URL Here]

## 📞 Contact

**Srinivasan "Murali" Muralidharan**
- Email: smdharan@gmail.com
- Phone: 303-641-8104
- LinkedIn: [linkedin.com/in/srinimuralidharan](https://www.linkedin.com/in/srinimuralidharan/)

---

Built with ❤️ and modern web technologies. Ready to showcase your professional journey!
