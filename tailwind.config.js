export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        school: {
          'primary': '#800000', // Maroon
          'maroon': '#800000', // Alias for compatibility
          'primary-light': '#9B1C1C',
          'maroon-light': '#9B1C1C', // Alias
          'secondary': '#F5F5DC', // Cream
          'cream': '#F5F5DC', // Alias
          'background': '#FAFAF9', // Light Warm Grey
          'surface': '#FFFFFF', // White
          'accent-cream': '#F5F5DC', // Alias
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

