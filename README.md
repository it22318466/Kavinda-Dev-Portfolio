# Kavinda DevSE Portfolio

A modern, responsive developer portfolio website built with React, Vite, and Tailwind CSS. Showcase your professional skills, projects, and achievements in an elegant and interactive way.

---

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Modern UI**: Built with React and Tailwind CSS for a sleek, professional appearance
- **Dark Theme**: Eye-catching dark mode design optimized for developer portfolios
- **Interactive Sections**:
  - Hero section with engaging introduction
  - About section highlighting your professional profile
  - Skills showcase with visual representation
  - Project portfolio with project details
  - Services section highlighting your expertise
  - Educational qualifications timeline
  - Testimonials from clients and colleagues
  - Contact form with email integration
  - Navigation and footer components

- **Email Integration**: Contact form powered by EmailJS for direct communication
- **Icon Support**: Comprehensive icon library with lucide-react and react-icons
- **Optimized Performance**: Built with Vite for fast development and production builds

---

## 🛠️ Tech Stack

| Technology       | Purpose                              |
| ---------------- | ------------------------------------ |
| **React**        | UI framework (v19.2.4)               |
| **Vite**         | Build tool and dev server (v8.0.1)   |
| **Tailwind CSS** | Utility-first CSS framework (v4.2.2) |
| **EmailJS**      | Email service integration (v4.4.1)   |
| **React Icons**  | Icon library (v5.6.0)                |
| **Lucide React** | Modern icon set (v1.7.0)             |
| **ESLint**       | Code quality and linting             |

---

## 📊 Language Composition

- **JavaScript**: 98.5% - Core application logic and React components
- **CSS**: 1.3% - Styling managed through Tailwind CSS
- **HTML**: 0.2% - HTML markup and structure

---

## 📋 Project Structure

```
Kavinda-Dev-Portfolio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Skills.jsx
│   │       ├── Projects.jsx
│   │       ├── Services.jsx
│   │       ├── EducationalQualifications.jsx
│   │       ├── Testimonials.jsx
│   │       └── Contact.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/it22318466/Kavinda-Dev-Portfolio.git
   cd Kavinda-Dev-Portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to view your portfolio

---

## 📦 Available Scripts

- **`npm run dev`** - Start the development server with hot module replacement
- **`npm run build`** - Create an optimized production build
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run preview`** - Preview the production build locally

---

## 🎨 Customization

### Update Portfolio Content

Edit the component files in `src/components/sections/` to customize:

- **Hero.jsx** - Main heading, tagline, and CTA
- **About.jsx** - Your professional summary
- **Skills.jsx** - Technical skills and proficiencies
- **Projects.jsx** - Featured projects and work samples
- **Services.jsx** - Services you offer
- **EducationalQualifications.jsx** - Education history
- **Testimonials.jsx** - Client testimonials
- **Contact.jsx** - Contact information and form

### Email Configuration

To enable the contact form with EmailJS:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the EmailJS configuration in the Contact component with your credentials

### Styling

Tailwind CSS is pre-configured. Customize your design by:

- Modifying `tailwind.config.js`
- Using Tailwind utility classes in your components
- Creating custom CSS classes as needed

---

## 🌐 Deployment

### Deploy to GitHub Pages

1. Build the project:

   ```bash
   npm run build
   ```

2. Push the `dist` folder to your GitHub Pages branch:
   ```bash
   git add dist
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

### Deploy to Other Platforms

- **Vercel**: Connect your GitHub repo to Vercel for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect GitHub
- **Firebase Hosting**: Use Firebase CLI to deploy

---

## 🐛 Troubleshooting

**Port 5173 already in use:**

```bash
npm run dev -- --port 3000
```

**Dependencies not installing:**

```bash
rm -rf node_modules package-lock.json
npm install
```

**Vite build errors:**

```bash
npm run build -- --force
```

---

## 📝 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

**Kavinda** - Developer Portfolio

- GitHub: [@it22318466](https://github.com/it22318466)
- Portfolio: [Kavinda Dev Portfolio](https://github.com/it22318466/Kavinda-Dev-Portfolio)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support

For support, questions, or feedback, please open an issue on the [GitHub repository](https://github.com/it22318466/Kavinda-Dev-Portfolio/issues).

---

## 🎯 Roadmap

- [ ] Add dark/light theme toggle
- [ ] Implement blog section
- [ ] Add project filtering by category
- [ ] Create resume download feature
- [ ] Add multilingual support
- [ ] Implement analytics tracking
- [ ] Add social media integration
- [ ] Performance optimization

---

**Made with ❤️ using React, Vite, and Tailwind CSS**
