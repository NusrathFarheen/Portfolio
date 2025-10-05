<!--
Guidance for AI coding agents working in this repository.
This file was generated automatically. If the project has existing
developer docs (README.md, CONTRIBUTING.md, AGENT.md) prefer those
for highly project-specific flows and update this file accordingly.
-->

# Copilot instructions for this repository

Keep guidance concise and actionable. The repository currently appears to be a personal "Portfolio" workspace. Where placeholders are used below, ask the human for the exact command or file if the project differs.

## Quick architecture summary
- High level: Modern React portfolio website with TailwindCSS styling and Framer Motion animations. Single-page application with smooth scrolling navigation between sections.
- Key files/directories: `src/components/` (React components), `src/App.js` (main app), `public/` (static assets), `package.json` (dependencies), `tailwind.config.js` (styling), `.github/workflows/` (deployment).
- Tech stack: React 18, TailwindCSS, Framer Motion, React Icons. Uses Create React App as build tool with npm scripts for development and deployment.

## Developer workflows (what to try first)
- **Development**: `npm install` then `npm start` to run local development server at localhost:3000
- **Building**: `npm run build` creates optimized production build in `/build` directory
- **Deployment**: `npm run deploy` automatically deploys to GitHub Pages (requires gh-pages package)
- **Testing**: `npm test` runs the test suite in interactive watch mode
- **Dependencies**: Uses npm (not yarn) - always use `npm install` for new packages

## Project-specific conventions and patterns to follow
- **Component Structure**: Each section is a separate component in `src/components/` (Hero.js, About.js, Projects.js, etc.)
- **Styling**: Uses TailwindCSS utility classes with custom components defined in `src/index.css` using `@apply` directive
- **Animations**: Framer Motion for all animations - use `motion.div`, `whileInView`, and `variants` patterns consistently
- **Layout**: All sections use `section-padding` class and max-width containers for consistent spacing
- **State**: Simple useState for form handling, no global state management needed

## Integration points & external dependencies
- **GitHub Pages**: Configured for deployment via GitHub Actions (`.github/workflows/deploy.yml`) and gh-pages package
- **Icons**: React Icons library used throughout - import from `react-icons/fa` for FontAwesome icons
- **Fonts**: Google Fonts (Inter) loaded via CSS import in `index.css`
- **No backend**: Pure frontend application, contact form logs to console (can be connected to Netlify Forms or similar)

## How to propose code changes
- Make minimal, well-scoped edits. Add or update a single feature per PR.
- If introducing new dependencies, prefer small, well-maintained packages and add them to `package.json` or `requirements.txt` accordingly.

## Examples from this repo to cite (if present)
- **Component Pattern**: See `src/components/Hero.js` for Framer Motion animation patterns with variants and stagger children
- **Card Styling**: Use the `.card` class defined in `index.css` for consistent card styling across components
- **Responsive Grid**: Projects and skills sections use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` pattern
- **Color Gradients**: Consistent use of `from-primary-600 to-secondary-600` gradient classes for headings and buttons

## What to ask the human when uncertain
- **Personal Information**: Ask for actual name, email, GitHub/LinkedIn URLs to replace placeholder values
- **Project Details**: Specific project descriptions, technologies used, and live demo URLs for the projects section
- **Contact Info**: Real contact information, social media handles, and preferred contact methods
- **Customization**: Specific color preferences, animation speeds, or layout modifications beyond the current design

## Safety & style
- Follow the user's existing coding style. If linting config exists (`.eslintrc`, `prettier`), follow it.
- Avoid changing generated/build artifacts (files in `dist/`, `build/`, or `.next/`) — edit sources only.

---
If you'd like, I can update this file with concrete commands and examples after you point me to the project's main framework or provide the repository README or `package.json`.
