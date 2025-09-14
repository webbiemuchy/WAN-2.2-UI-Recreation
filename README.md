# AI Tools Dashboard UI Recreation

A pixel-perfect implementation of the AI Tools Dashboard with dark/light mode toggle, built with Next.js 14 and Tailwind CSS for the Cartolinks Solutions LTD Software Engineering Internship Application.

![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)

## ✨ Features

- 🌓 Dark/Light mode toggle with system preference detection
- 📱 Fully responsive design for mobile and desktop
- 🎨 Pixel-perfect UI matching the provided design
- ⚡ Built with Next.js 14 for optimal performance
- 🎯 Tailwind CSS for utility-first styling
- ✨ Interactive hover effects and smooth animations
- 🔧 TypeScript for type-safe development

## 🚀 Live Demo

The application is deployed on Vercel and can be accessed here:  
**[Live Demo](https://ai-tools-dashboard.vercel.app)**

## 📸 Preview

### Light Mode
![Light Mode Preview](https://via.placeholder.com/800x400/f9fafb/1f2937?text=Light+Mode+Preview+-+AI+Tools+Dashboard)

### Dark Mode
![Dark Mode Preview](https://via.placeholder.com/800x400/111827/f9fafb?text=Dark+Mode+Preview+-+AI+Tools+Dashboard)

## 🛠️ Installation

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, or pnpm

### Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/your-username/ai-tools-dashboard.git
cd ai-tools-dashboard
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
ai-tools-dashboard/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles and CSS variables
│   │   ├── layout.tsx       # Root layout with theme provider
│   │   └── page.tsx         # Main page component
│   └── components/
│       ├── Header.tsx       # Navigation header with theme toggle
│       ├── HeroCards.tsx    # WAN 2.2 and Open Source feature cards
│       ├── ToolsGrid.tsx    # AI tools grid with interactive cards
│       ├── GallerySection.tsx # Gallery section with Krea AI footer
│       └── theme-provider.tsx # Theme context provider
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Components Breakdown

### 🎯 Header Component
- User profile and navigation icons
- Dark/light mode toggle with smooth transitions
- Responsive design with proper spacing

### 🃏 Hero Cards
- WAN 2.2 and Open Source interactive cards
- Gradient backgrounds and custom styling
- Navigation arrows and dots indicator
- Responsive card layout

### 🔧 Tools Grid
- 7 AI tools with color-coded icons
- "New" badges for featured tools
- Hover effects and smooth transitions
- Grid layout that adapts to screen size

### 🖼️ Gallery Section
- User and prompt filtering options
- Krea AI branding footer with Mobbin attribution
- Clean, minimal design

## 🎨 Customization

The application uses Tailwind CSS with custom CSS properties for theming. You can customize the design by modifying:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom color variables defined in globals.css
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // ... more custom colors
      },
    },
  },
}
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

Or build locally and deploy to any platform:
```bash
npm run build
```

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest) 
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🤝 Contributing

This project was created as part of an internship application. While not open for general contributions, feedback and suggestions are always welcome!

## 📄 License

This project was created for the Cartolinks Solutions LTD internship application. All rights reserved.

## 👨‍💻 Author

**Muchakazi Webster**  
- Email: muchakaziwebster.it@gmail.com
- GitHub: [@webbiemuchy](https://github.com/webbiemuchy)
- LinkedIn: [Muchakazi Webster]([https://linkedin.com/in/your-profile](https://www.linkedin.com/in/webster-muchakazi-1b06b6353))

---

<div align="center">
Made with ❤️ using Next.js 14, TypeScript & Tailwind CSS
</div>
