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
          'secondary': '#64748B', // Dark Slate Grey
          'cream': '#64748B', // Alias for compatibility
          'background': '#FAFAF9', // Light Warm Grey
          'surface': '#FFFFFF', // White
          'accent-cream': '#64748B', // Alias
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

