# Luxury Airline Landing Page

A premium landing page for "Royal Sky Airlines" built with React, Vite, and Tailwind CSS.
Supports Arabic and English languages with RTL/LTR layout.

## Features

- **Dark & Luxury Design**: Slate 900 background with Amber/Gold accents.
- **Bilingual Support**: Fully translated content (AR/EN) with automatic direction adjustment (RTL/LTR).
- **Responsive**: Mobile-first design using Tailwind CSS.
- **Components**: Navbar, Hero, Services, Footer.

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production

To create a production-ready build:

```bash
npm run build
```

The output will be in the `dist` folder.

## Deployment

### Netlify / Vercel
1. Connect your repository.
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Apache / Nginx
Upload the contents of the `dist` folder to your server's public directory.
Ensure your server is configured to handle Single Page Applications (rewrite all requests to index.html).
