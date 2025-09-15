# Portfolio Deployment Guide

## Quick Start for GitHub Pages

1. **Upload to GitHub**:
   - Create a new repository named `portfoliocomplete`
   - Upload all files from this package to the repository
   - Make sure the repository is public

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Build for Production**:
   ```bash
   npm run build
   # or 
   yarn build
   ```

4. **Deploy Options**:

   ### Option A: GitHub Pages
   - Install gh-pages: `npm install --save-dev gh-pages`
   - Add to package.json scripts: `"deploy": "gh-pages -d build"`
   - Run: `npm run deploy`
   - Enable GitHub Pages in repository settings

   ### Option B: Netlify
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Deploy automatically on git push

   ### Option C: Vercel
   - Connect your GitHub repository to Vercel
   - Vercel will auto-detect React and deploy
   - Deploy automatically on git push

## Important Notes

1. **Contact Form**: Currently set up as a demo. For production:
   - Integrate with Formspree, Netlify Forms, or EmailJS
   - Update the form submission logic in `src/components/Contact.jsx`

2. **Resume**: Replace `public/resume.pdf` with your actual resume

3. **Profile Image**: The current image URL points to a hosted image. Consider:
   - Adding your image to `public/` folder 
   - Updating the path in `src/data/mock.js`

4. **Content**: Update all content in `src/data/mock.js` with your information

## Folder Structure
```
portfolio-package/
├── public/
│   ├── index.html
│   └── resume.pdf (replace with your resume)
├── src/
│   ├── components/
│   │   ├── ui/ (reusable UI components)
│   │   └── [portfolio sections]
│   ├── data/
│   │   └── mock.js (your data)
│   ├── lib/
│   └── hooks/
├── package.json
├── tailwind.config.js
└── README.md
```

Happy deploying! 🚀