/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      backgroundImage: {
        'mobile-app': "url('/assets/mobile-app.jpg')",
        'mobile-design': "url('/assets/mobile-design.jpg')",
        'web-app': "url('/assets/web-app.jpg')",
        'web-design': "url('/assets/web-design.jpg')",
        'web-site-design': "url('/assets/web-site-design.jpg')",
      },
      colors: {
        primary: '#121214',
        background: '#000000',
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187'
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}