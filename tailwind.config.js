/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#D4AF37", // Premium Gold
                secondary: "#00205B", // Egyptair Navy Blue
                accent: "#E4A025", // Lighter Gold for hovers
                dark: "#0a1128", // Deep rich dark blue for backgrounds
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                arabic: ['Tajawal', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
