# TMMETHODE Portfolio

A modern, responsive portfolio website showcasing the skills and experience of **TMMETHODE** - Cloud Engineer & Systems Administrator. Built with React.js, Tailwind CSS, and featuring a beautiful dark/light theme toggle.

## 🌟 Live Demo

**Coming Soon** - Portfolio will be deployed and linked here

## 🚀 Features

- **🌙 Dark/Light Theme**: Beautiful theme toggle with smooth transitions
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **🎨 Modern Design**: Clean, professional design with smooth animations
- **⚡ Fast Performance**: Optimized React components with lazy loading
- **♿ Accessible**: Built with accessibility and SEO best practices
- **📄 Policy Pages**: Privacy Policy, Terms of Service, and Cookie Policy
- **🎯 Interactive Elements**: Smooth scrolling, hover effects, and animations

## 🛠️ Technologies Used

- **React.js** - Frontend framework with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions
- **React Icons** - Comprehensive icon library
- **React Router** - Client-side routing
- **Context API** - Theme management and state management

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/tmmethode/portfolio.git
cd portfolio
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
│   ├── Navbar.js              # Navigation with mobile menu
│   ├── Hero.js                # Hero section with animations
│   ├── About.js               # About section
│   ├── Skills.js              # Skills with progress bars
│   ├── Experience.js          # Work experience timeline
│   ├── Education.js           # Education section
│   ├── Projects.js            # Projects showcase with filters
│   ├── Contact.js             # Contact form
│   ├── Footer.js              # Footer with links
│   ├── ThemeToggle.js         # Dark/light theme toggle
│   ├── PrivacyPolicy.js       # Privacy policy page
│   ├── TermsOfService.js      # Terms of service page
│   └── CookiePolicy.js        # Cookie policy page
├── context/
│   └── ThemeContext.js        # Theme context provider
├── App.js                     # Main App component
├── index.js                   # Entry point
└── index.css                  # Global styles
```

## 🎨 Key Features

### 🌙 Theme System
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Persistent Theme**: Theme preference saved in localStorage
- **System Preference**: Automatically detects system theme preference

### 📱 Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Tablet Friendly**: Responsive layouts for tablets
- **Desktop Optimized**: Enhanced experience on larger screens

### 🎯 Core Sections

#### Hero Section
- Animated introduction with role tags
- Call-to-action buttons
- Professional branding with icons

#### About Section
- Personal information and background
- Professional summary
- Key strengths and expertise

#### Skills Section
- Categorized technical skills
- Progress bars with animations
- Tools and technologies grid

#### Experience Section
- Timeline of professional experience
- Key achievements and responsibilities
- Company information and dates

#### Education Section
- Academic background
- Certifications and training
- Educational achievements

#### Projects Section
- Filterable project showcase
- Multiple categories (Cloud, DevOps, Development)
- Project features and technologies used

#### Contact Section
- Contact form with validation
- Professional contact information
- Social media links
- Availability status

### 📄 Policy Pages
- **Privacy Policy**: Data collection and usage information
- **Terms of Service**: Legal terms and conditions
- **Cookie Policy**: Cookie usage and management

## 🎨 Design Features

- **Gradient Text**: Custom gradient text effects
- **Card Hover Effects**: Smooth hover animations
- **Progress Bars**: Animated skill progress indicators
- **Timeline Design**: Professional experience timeline
- **Filterable Projects**: Interactive project filtering
- **Mobile Menu**: Responsive navigation with hamburger menu
- **Toast Notifications**: User-friendly notifications
- **Smooth Scrolling**: Enhanced navigation experience

## 🚀 Deployment Options

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `build` folder to Netlify

### GitHub Pages

1. Add homepage to package.json:
```json
"homepage": "https://tmmethode.github.io/portfolio"
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add scripts to package.json:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

4. Deploy:
```bash
npm run deploy
```

## 🎯 About TMMETHODE

**Cloud Engineer & Systems Administrator** with expertise in:

- ☁️ **Cloud Infrastructure**: AWS, Azure, Google Cloud
- 🖥️ **Systems Administration**: Linux, Windows Server
- 🔒 **Cybersecurity**: Security best practices and implementation
- 💻 **Software Development**: Full-stack development
- 🚀 **DevOps**: CI/CD, automation, containerization
- 📊 **Data Management**: Database administration and optimization

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: info@tmmethode.com
- **LinkedIn**: [TMMETHODE](https://www.linkedin.com/in/tmmethode)
- **GitHub**: [@tmmethode](https://github.com/tmmethode)
- **Location**: Kigali, Rwanda

## 🙏 Acknowledgments

- Built with ❤️ using React.js and Tailwind CSS
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

**TMMETHODE** - Cloud Engineer & Systems Administrator  
*Building secure and scalable solutions for the future* ☁️🚀 