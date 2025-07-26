# IT Professional Portfolio

A modern, responsive portfolio website built with React.js and Tailwind CSS, showcasing the skills and experience of an IT professional specializing in DevOps, System Administration, Software Development, and Data Science.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Comprehensive Sections**: Hero, About, Skills, Experience, Projects, and Contact
- **Animations**: Framer Motion animations for enhanced user experience
- **Accessible**: Built with accessibility in mind

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd it-professional-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### 4. Build for production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Hero.js            # Hero section
│   ├── About.js           # About section
│   ├── Skills.js          # Skills section
│   ├── Experience.js      # Experience timeline
│   ├── Projects.js        # Projects showcase
│   ├── Contact.js         # Contact form
│   └── Footer.js          # Footer component
├── App.js                 # Main App component
├── index.js              # Entry point
└── index.css             # Global styles
```

## 🎨 Customization

### Personal Information

Update the personal information in the following files:

- `src/components/Hero.js` - Update name and description
- `src/components/About.js` - Update personal details
- `src/components/Contact.js` - Update contact information

### Skills and Experience

- `src/components/Skills.js` - Modify skill categories and levels
- `src/components/Experience.js` - Update work experience and education

### Projects

- `src/components/Projects.js` - Add your own projects and filter categories

### Styling

- `tailwind.config.js` - Customize colors and theme
- `src/index.css` - Add custom CSS classes

## 🎯 Key Sections

### Hero Section
- Animated introduction with role tags
- Call-to-action buttons
- Social media links

### About Section
- Personal information card
- Professional background
- Key strengths

### Skills Section
- Categorized skills with progress bars
- Tools and technologies grid
- Soft skills and certifications

### Experience Section
- Timeline of professional experience
- Education and certifications
- Key achievements for each role

### Projects Section
- Filterable project showcase
- Different categories (DevOps, Software Dev, Data Science, System Admin)
- Project features and technologies

### Contact Section
- Contact form with validation
- Contact information
- Social media links
- Availability status

## 🎨 Design Features

- **Gradient Text**: Custom gradient text effects
- **Card Hover Effects**: Smooth hover animations
- **Progress Bars**: Animated skill progress indicators
- **Timeline Design**: Professional experience timeline
- **Filterable Projects**: Interactive project filtering
- **Responsive Grid**: Adaptive layouts for all screen sizes

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy

### GitHub Pages

1. Add `"homepage": "https://yourusername.github.io/repository-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy: `npm run deploy`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Built with ❤️ using React.js and Tailwind CSS** 