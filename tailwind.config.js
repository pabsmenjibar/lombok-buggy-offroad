/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0B0F0C',
                primary: '#080B09',
                accent: '#2E8540',
                text: '#F5F5F0',
                dark: '#050706'
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                drama: ['Playfair Display', 'serif'],
                mono: ['JetBrains Mono', 'monospace'],
            }
        },
    },
    plugins: [],
}
