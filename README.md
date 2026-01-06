# Portfolio Website

A professional, minimalist portfolio website for a backend-focused software engineer. Featuring true black & white contrast, dark/light mode, and refined motion design.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS** with dark mode
- **Framer Motion** for animations

## Features

- ✨ True black & white design with high contrast
- 🌓 Dark/light mode toggle with localStorage persistence
- 🎨 Subtle, intentional animations
- 📱 Fully responsive
- ♿ Reduced motion support
- ⚡ Optimized performance
- 🎯 SEO-friendly
- 🚀 Vercel deployment ready

## Design Philosophy

This portfolio embodies:
- **Serious engineering quality** - no decorative fluff
- **High contrast** - true black (#000000) and white (#FFFFFF)
- **Calm motion** - slow, organic animations that enhance, not distract
- **Minimal aesthetic** - focused on content and clarity
- **Professional tone** - suitable for product-based companies

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information

Update the following files with your information:

- **Hero section**: [src/components/Hero.tsx](src/components/Hero.tsx)
- **About section**: [src/components/About.tsx](src/components/About.tsx)
- **Projects**: [src/components/Projects.tsx](src/components/Projects.tsx)
- **Resume**: [src/components/Resume.tsx](src/components/Resume.tsx)
- **Blog**: [src/components/Blog.tsx](src/components/Blog.tsx)
- **Footer links**: [src/components/Footer.tsx](src/components/Footer.tsx)

### Resume PDF

Place your resume PDF file in the `public` folder as `resume.pdf` or update the link in [src/components/Resume.tsx](src/components/Resume.tsx).

### Styling

- **Colors**: Modify accent colors in [tailwind.config.js](tailwind.config.js)
- **Fonts**: Change fonts in [src/app/layout.tsx](src/app/layout.tsx)
- **Global styles**: Edit [src/app/globals.css](src/app/globals.css)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

### Other Platforms

Build the production bundle:

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Navbar.tsx      # Navigation
│       ├── Hero.tsx        # Hero section
│       ├── About.tsx       # About section
│       ├── Projects.tsx    # Projects section
│       ├── Resume.tsx      # Resume section
│       ├── Blog.tsx        # Blog section
│       ├── Footer.tsx      # Footer
│       └── ParticlesBackground.tsx
├── public/
│   └── resume.pdf          # Your resume
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## License

MIT

## Contact

- GitHub: [your-github](https://github.com)
- LinkedIn: [your-linkedin](https://linkedin.com)
- Email: your.email@example.com
