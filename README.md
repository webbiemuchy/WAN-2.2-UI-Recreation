# WAN 2.2 UI Recreation

A pixel-perfect implementation of the WAN 2.2 UI with dark/light mode toggle, built with Next.js and Tailwind CSS for the Cartolinks Solutions LTD Software Engineering Internship Application.

![WAN 2.2 UI](https://img.shields.io/badge/Next.js-12.3.1-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.1.8-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)

## ✨ Features

- 🌓 Dark/Light mode toggle with system preference detection
- 📱 Fully responsive design for mobile and desktop
- 🎨 Pixel-perfect UI matching the provided design
- ⚡ Built with Next.js for optimal performance
- 🎯 Tailwind CSS for utility-first styling

## 🚀 Live Demo

The application is deployed on Vercel and can be accessed here:  
**[Live Demo](https://wan-2-2-ui.vercel.app)**

## 📸 Preview

### Light Mode
![Light Mode Preview](https://via.placeholder.com/800x400/ffffff/000000?text=Light+Mode+Preview)

### Dark Mode
![Dark Mode Preview](https://via.placeholder.com/800x400/000000/ffffff?text=Dark+Mode+Preview)

## 🛠️ Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/your-username/wan-2-2-ui.git
cd wan-2-2-ui
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📁 Project Structure

```
wan-2-2-ui/
├── pages/
│   ├── _app.js          # Custom App component
│   └── index.js         # Home page component
├── styles/
│   └── globals.css      # Global styles and Tailwind imports
├── public/              # Static assets
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies and scripts
```


## 🎨 Customization

The application uses Tailwind CSS for styling. You can customize the design by modifying the `tailwind.config.js` file:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        // Add custom colors here
      },
    },
  },
  plugins: [],
}
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

This project was created as part of an internship application. While not open for general contributions, feedback is always welcome!

## 📄 License

This project was created for the Cartolinks Solutions LTD internship application. All rights reserved.

## 👨‍💻 Author

**Muchakazi Webster Chitova**  
- Email: muchakaziwebster.chitova@gmail.com
- GitHub: [@your-username](https://github.com/your-username)

---

<div align="center">
Made with ❤️ using Next.js and Tailwind CSS
</div>
