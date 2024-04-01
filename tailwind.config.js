/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bodyBg: "url('/src/assets/bgBoby.jpg')",
      },
    },
    animation: {
      gradient: "gradientAnimation 6s ease infinite", // Applying the animation to 'animate-gradient' class
    },
  },
  plugins: [],
};
