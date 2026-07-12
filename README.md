# 🎯 Kavinda Dev Portfolio

A modern, responsive developer portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Showcase your professional skills, projects, and achievements in an elegant and interactive way.

![Language Composition](https://img.shields.io/badge/JavaScript-98.5%25-yellow?style=flat-square)
![CSS](https://img.shields.io/badge/CSS-1.3%25-blue?style=flat-square)
![HTML](https://img.shields.io/badge/HTML-0.2%25-orange?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)

---

## ✨ Features

- ✅ **Responsive Design** - Fully responsive layout that works seamlessly on all devices
- 🎨 **Modern UI** - Built with React and Tailwind CSS for a sleek, professional appearance
- 🌙 **Dark Theme** - Eye-catching dark mode design optimized for developer portfolios
- 🚀 **Interactive Sections**:
  - Hero section with engaging introduction
  - About section highlighting your professional profile
  - Skills showcase with visual representation
  - Project portfolio with project details and links
  - Services section highlighting your expertise
  - Educational qualifications timeline
  - Testimonials from clients and colleagues
  - Contact form with email integration
  - Navigation and footer components

- 📧 **Email Integration** - Contact form powered by EmailJS for direct communication
- 🎯 **Icon Support** - Comprehensive icon library with lucide-react and react-icons
- ⚡ **Optimized Performance** - Built with Vite for fast development and production builds
- 📱 **Mobile-First Approach** - Designed and optimized for mobile devices first

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | v19.2.4 | UI framework and component library |
| **Vite** | v8.0.1 | Lightning-fast build tool and dev server |
| **Tailwind CSS** | v4.2.2 | Utility-first CSS framework for styling |
| **EmailJS** | v4.4.1 | Email service integration for contact forms |
| **React Icons** | v5.6.0 | Popular icon library |
| **Lucide React** | v1.7.0 | Modern, consistent icon set |
| **Firebase** | v11.10.0 | Backend services (if implemented) |
| **ESLint** | v9.39.4 | Code quality and linting |

---

## 📊 Project Statistics

### Language Composition
```
JavaScript: 98.5% ████████████████████
CSS:         1.3% █
HTML:        0.2%
```

### Repository Info
- **Repository**: it22318466/Kavinda-Dev-Portfolio
- **Language**: JavaScript (Primary)
- **Size**: 83.5 KB
- **Stars**: 22 ⭐
- **Created**: 5 days ago
- **Default Branch**: master
- **License**: MIT (Open Source)

---

## 📂 Project Structure

```
Kavinda-Dev-Portfolio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx          # Navigation component
│   │   │   └── Footer.jsx          # Footer component
│   │   └── sections/
│   │       ├── Hero.jsx            # Hero/landing section
│   │       ├── About.jsx           # About me section
│   │       ├── Skills.jsx          # Skills showcase
│   │       ├── Projects.jsx        # Portfolio projects
│   │       ├── Services.jsx        # Services offered
│   │       ├── EducationalQualifications.jsx  # Education timeline
│   │       ├── Testimonials.jsx    # Client testimonials
│   │       └── Contact.jsx         # Contact form
│   ├── App.jsx                     # Main App component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                    # Project dependencies
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS config
├── eslint.config.js                # ESLint configuration
└── README.md                       # This file
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/it22318466/Kavinda-Dev-Portfolio.git
   cd Kavinda-Dev-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or if using yarn
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in your browser:**
   Navigate to `http://localhost:5173` to view your portfolio in development mode

### Verify Installation

The development server should be running and you should see:
```
  VITE v8.0.1  ready in 1234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot module replacement (HMR) |
| `npm run build` | Create an optimized production build in the `dist` folder |
| `npm run lint` | Run ESLint to check code quality and find issues |
| `npm run preview` | Preview the production build locally |

---

## 🎨 Customization Guide

### Update Portfolio Content

Edit the component files in `src/components/sections/` to customize your portfolio:

- **`Hero.jsx`** - Main heading, tagline, and call-to-action button
- **`About.jsx`** - Your professional summary and background
- **`Skills.jsx`** - Technical skills, technologies, and proficiencies
- **`Projects.jsx`** - Featured projects, case studies, and work samples
- **`Services.jsx`** - Services you offer and expertise areas
- **`EducationalQualifications.jsx`** - Education history, degrees, and certifications
- **`Testimonials.jsx`** - Client testimonials and reviews
- **`Contact.jsx`** - Contact information and inquiry form

### Email Configuration

To enable the contact form with **EmailJS**:

1. **Sign up at [EmailJS](https://www.emailjs.com/)** - Create a free account
2. **Create an Email Service:**
   - Go to Email Services and connect your email provider
   - Save your Service ID
3. **Create an Email Template:**
   - Create a new template for portfolio inquiries
   - Save your Template ID
4. **Update Contact Component:**
   - Open `src/components/sections/Contact.jsx`
   - Replace `YOUR_SERVICE_ID` with your EmailJS Service ID
   - Replace `YOUR_TEMPLATE_ID` with your EmailJS Template ID
   - Replace `YOUR_PUBLIC_KEY` with your EmailJS Public Key

### Styling & Design

**Tailwind CSS** is pre-configured and ready to use:

- Customize your design by modifying `tailwind.config.js`
- Use Tailwind utility classes directly in your components
- Create custom CSS in `src/index.css` for additional styling
- Override Tailwind defaults in the config file

Example:
```jsx
<div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg">
  Customized with Tailwind
</div>
```

---

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Push the dist folder to GitHub Pages:**
   ```bash
   git add dist
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select `gh-pages` branch as the source
   - Your portfolio will be live at `https://it22318466.github.io/Kavinda-Dev-Portfolio/`

### Deploy to Vercel

1. **Connect to Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Sign in with GitHub
   - Select this repository
   - Click Deploy

2. **Vercel will automatically:**
   - Build your project
   - Deploy to a live URL
   - Set up automatic deployments on push

### Deploy to Netlify

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Deploy the dist folder:**
   - Drag and drop the `dist` folder to Netlify, OR
   - Connect your GitHub repository for automatic deployments

### Deploy to Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize and deploy:**
   ```bash
   firebase login
   firebase init hosting
   npm run build
   firebase deploy
   ```

---

## 🐛 Troubleshooting

### Port 5173 already in use

```bash
npm run dev -- --port 3000
```

### Dependencies not installing properly

```bash
# Remove node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Vite build errors

```bash
# Force rebuild
npm run build -- --force

# Or clear Vite cache
rm -rf node_modules/.vite
npm run build
```

### ESLint errors

```bash
# Fix linting issues automatically
npm run lint -- --fix
```

### Hot Module Replacement (HMR) not working

1. Check that your firewall allows localhost connections
2. Restart the development server:
   ```bash
   npm run dev
   ```

---

## 📝 License

This project is open source and available under the **MIT License**. See the LICENSE file for more details.

---

## 👨‍💻 Author

**Kavinda** - Full Stack Developer

- **GitHub**: [@it22318466](https://github.com/it22318466)
- **Repository**: [Kavinda Dev Portfolio](https://github.com/it22318466/Kavinda-Dev-Portfolio)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Please feel free to check the [issues page](https://github.com/it22318466/Kavinda-Dev-Portfolio/issues) before contributing.

### How to contribute:

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/Kavinda-Dev-Portfolio.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```

4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**
   - Describe your changes clearly
   - Reference any related issues

---

## 📞 Support & Questions

For support, questions, or feedback:
- **Open an Issue**: [GitHub Issues](https://github.com/it22318466/Kavinda-Dev-Portfolio/issues)
- **Discussions**: Use GitHub Discussions if enabled
- **Email**: Check your repository for contact information

---

## 🎯 Future Roadmap

- [ ] Add dark/light theme toggle functionality
- [ ] Implement a blog section with markdown support
- [ ] Add project filtering by category and technology
- [ ] Create resume/CV download feature
- [ ] Add multilingual support (i18n)
- [ ] Implement analytics tracking
- [ ] Add social media integration
- [ ] Performance optimization and SEO improvements
- [ ] Add animations and transitions
- [ ] Create admin dashboard for portfolio management

---

## 📚 Additional Resources

- **[React Documentation](https://react.dev/)** - React official docs
- **[Vite Documentation](https://vitejs.dev/)** - Vite guide and features
- **[Tailwind CSS Documentation](https://tailwindcss.com/docs)** - Utility-first CSS
- **[EmailJS Documentation](https://www.emailjs.com/docs/)** - Email integration guide
- **[MDN Web Docs](https://developer.mozilla.org/)** - Web development reference

---

**Made with ❤️ using React, Vite, and Tailwind CSS**

Last updated: July 12, 2026
