# Egyptair Landing Page Clone

This project is a high-fidelity, ultra-premium clone of an airline landing page, tailored with Egyptair branding. Built with React and Tailwind CSS, it features modern glassmorphism UI, smooth animations, and bilingual support.

## Features

- **Ultra-Premium UI**: Designed to match the quality of top global airlines. Features a dark theme (`#0a1128`) with signature Egyptair Navy and Gold accents.
- **Bilingual Support (Arabic & English)**: Fully localized using a custom `LanguageContext`. Supports dynamic RTL (Right-to-Left) and LTR layout switching.
- **Dynamic Fonts**: Uses Google Fonts `Tajawal` for Arabic and `Outfit` for English to ensure optimal typography.
- **Flight Booking Engine**: A complex, glassmorphism-styled booking widget for searching flights.
- **Global Network Map**: An interactive-looking world map with animated SVG flight routes radiating from Cairo.
- **Smooth Navigation**: The Navbar features a scroll effect and anchor links that smoothly scroll to sections on the page.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.

## Tech Stack

- React (Vite)
- Tailwind CSS
- CSS Animations & SVG Manipulation

## Getting Started

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open the provided localhost link in your browser

## Project Structure

- `/src/components`: Contains all UI blocks (`Navbar`, `Hero`, `BookingWidget`, `DestinationsMap`, `Manage`, `Services`, `Help`, `Footer`).
- `/src/context`: Contains the `LanguageContext.jsx` for localization state.
- `/src/index.css`: Contains custom CSS animations (`float`, `draw-route`, etc.) and global styles.
- `tailwind.config.js`: Contains the custom color palette and font definitions.
