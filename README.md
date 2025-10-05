# Modern Portfolio Website

A stunning, modern portfolio website built with React, TailwindCSS, and Framer Motion animations. Features smooth animations, responsive design, and easy deployment to GitHub Pages.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## ✨ Features

- **Modern Design**: Clean, minimal UI with beautiful animations
- **Responsive Layout**: Perfect on mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion for engaging interactions  
- **Fast Performance**: Optimized for speed and user experience
- **Easy Deployment**: One-click deployment to GitHub Pages

## 🚀 Sections

- **Hero Section**: Animated introduction with name and tagline
- **About Me**: Personal intro and background
- **Projects**: Showcase of featured projects with live links
- **Achievements**: Awards, hackathons, and recognitions
- **Skills**: Technical skills with animated progress bars
- **Extras**: Beyond code - teaching, research, values
- **Contact**: Contact form and social media links

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: TailwindCSS for responsive design
- **Animations**: Framer Motion for smooth interactions
- **Icons**: React Icons library
- **Deployment**: GitHub Pages
- **Build Tool**: Create React App

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open browser**
   - Navigate to `http://localhost:3000`
   - The app will reload automatically on changes

## 🎨 Customization

### Personal Information
Edit the following files to customize with your information:

1. **Hero Section** (`src/components/Hero.js`)
   ```javascript
   // Update name and tagline
   <h1>Your Name</h1>
   <span>AI Enthusiast | Entrepreneur | Innovator</span>
   ```

2. **Projects** (`src/components/Projects.js`)
   ```javascript
   // Add your projects to the projects array
   const projects = [
     {
       title: "Your Project",
       description: "Project description",
       tech: ["React", "Node.js"],
       // ... more fields
     }
   ];
   ```

3. **Contact Info** (`src/components/Contact.js`)
   ```javascript
   // Update social links and contact information
   const socialLinks = [
     {
       href: "mailto:your.email@example.com",
       // ... other links
     }
   ];
   ```

### Styling & Colors
- **Colors**: Modify `tailwind.config.js` to change the color scheme
- **Fonts**: Update font imports in `src/index.css`
- **Animations**: Customize Framer Motion animations in component files

## 🚀 Deployment to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

1. **Update package.json homepage**
   ```json
   {
     "homepage": "https://yourusername.github.io/Portfolio"
   }
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Deploy with one command**
   ```bash
   npm run deploy
   ```

### Method 2: GitHub Actions (Automated)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys on push to main branch.

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`

2. **Push changes**
   ```bash
   git push origin main
   ```
   
   The workflow will automatically build and deploy your site!

### Manual Deployment Steps

If you prefer manual deployment:

```bash
# Build the project
npm run build

# Install gh-pages if not already installed
npm install -g gh-pages

# Deploy to gh-pages branch
gh-pages -d build
```

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Achievements.js
│   │   ├── Skills.js
│   │   ├── Extras.js
│   │   └── Contact.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎯 Performance Optimization

- **Lazy Loading**: Components load as needed
- **Optimized Images**: Use WebP format for better compression
- **Code Splitting**: Automatic code splitting with React
- **Caching**: Browser caching for static assets

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run test suite
- `npm run deploy` - Deploy to GitHub Pages
- `npm run eject` - Eject from Create React App (not recommended)

## 🐛 Troubleshooting

### Common Issues

1. **Deployment fails**
   - Check that `homepage` in package.json matches your GitHub Pages URL
   - Ensure `gh-pages` package is installed

2. **Animations not working**
   - Verify Framer Motion is installed: `npm install framer-motion`
   - Check browser compatibility

3. **Styling issues**
   - Ensure TailwindCSS is properly configured
   - Check that PostCSS is processing the CSS

4. **404 on GitHub Pages**
   - Verify the repository name matches the homepage URL
   - Check that files are in the `gh-pages` branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind Labs** for the utility-first CSS framework
- **Framer** for the smooth animation library
- **React Icons** for the comprehensive icon set

## 📞 Support

If you have any questions or need help:

- Create an issue in this repository
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourusername)

---

**Made with ❤️ and lots of ☕**

*"Building the future, one component at a time"*