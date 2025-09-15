# Srinivasan Muralidharan - Professional Portfolio

A modern, responsive portfolio website showcasing 20+ years of transformational technology leadership experience.

## 🚀 Features

- **Professional Design**: Clean white background with blue accents
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **Interactive Sections**: Hero, About, Skills, Experience, Projects, Blog, Contact
- **Modern Tech Stack**: React, Tailwind CSS, Shadcn/ui components
- **Professional Content**: Real executive experience and achievements
- **Contact Form**: Functional contact form with backend integration
- **Blog Section**: Thought leadership articles
- **Resume Download**: Direct PDF download functionality

## 🛠️ Tech Stack

- **Frontend**: React 19, Tailwind CSS, Shadcn/ui
- **Backend**: FastAPI, MongoDB (for contact form)
- **Deployment**: Vercel (frontend), Railway (full-stack)
- **Icons**: Lucide React
- **Animations**: CSS transitions and hover effects

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Shadcn/ui components
│   │   ├── Hero.jsx        # Hero section
│   │   ├── About.jsx       # About section
│   │   ├── Skills.jsx      # Skills section
│   │   ├── Experience.jsx  # Experience section
│   │   ├── Projects.jsx    # Projects section
│   │   ├── Blog.jsx        # Blog section
│   │   ├── Contact.jsx     # Contact section
│   │   ├── Header.jsx      # Navigation
│   │   ├── Footer.jsx      # Footer
│   │   └── Portfolio.jsx   # Main portfolio component
│   ├── data/
│   │   └── mock.js         # Portfolio data
│   ├── hooks/
│   │   └── use-toast.js    # Toast notifications
│   ├── App.js              # Main App component
│   ├── App.css             # Global styles
│   ├── index.js            # React entry point
│   └── index.css           # Tailwind imports
├── public/
│   ├── index.html          # HTML template
│   └── resume.pdf          # Resume file (add your PDF)
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── craco.config.js         # Create React App override
└── README.md               # This file
```

## 🚀 Quick Deploy to Vercel

1. **Upload to GitHub**: Upload this entire folder to a new GitHub repository
2. **Connect Vercel**: Go to [vercel.com](https://vercel.com) and connect your GitHub repo
3. **Configure Settings**:
   - Framework Preset: **Create React App**
   - Build Command: `npm run build`
   - Output Directory: `build`
4. **Deploy**: Click deploy and your site will be live!

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 📝 Customization

### Update Your Information
Edit `src/data/mock.js` to update:
- Personal information
- Professional experience
- Skills and expertise
- Project details
- Blog content
- Contact information

### Add Your Resume
Replace `public/resume.pdf` with your actual resume file.

### Modify Styling
- Colors: Update in `src/App.css` and component files
- Layout: Modify component files in `src/components/`
- Content: Update `src/data/mock.js`

## 🌐 Custom Domain Setup

1. **Buy Domain**: Purchase from GoDaddy, Namecheap, etc.
2. **Add to Vercel**: In Vercel dashboard, go to Settings > Domains
3. **Update DNS**: Point your domain to Vercel's nameservers

## 📊 Professional Features

- ✅ Executive-level positioning
- ✅ 20+ years experience showcase
- ✅ $2B+ business impact metrics
- ✅ Fortune 500 company experience
- ✅ Technical and leadership expertise
- ✅ Thought leadership blog content
- ✅ Professional contact form
- ✅ Resume download functionality

## 📱 Responsive Design

- **Desktop**: Full-featured layout with sidebar navigation
- **Tablet**: Optimized layout with touch-friendly interactions
- **Mobile**: Stack-based layout with hamburger menu

## 🎨 Design System

- **Colors**: Professional blue (#3b82f6) with white backgrounds
- **Typography**: Inter font family for modern readability
- **Components**: Consistent card-based design
- **Animations**: Subtle hover effects and transitions

## 🔗 Links & Contact

- **Live Demo**: [Your Vercel URL]
- **LinkedIn**: [Your LinkedIn Profile]
- **Email**: smdharan@gmail.com
- **Phone**: 303-641-8104

---

Built with ❤️ for professional success