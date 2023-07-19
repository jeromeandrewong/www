/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      railway: ['Railway', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#f7f6f3',
        primary_text: '#27272a',
        secondary: '#047857',
        accent: '#4f46e5',
        dark_primary: '#18181b',
        dark_primary_text: '#f7f6f3',
        dark_secondary: '#10b981',
        dark_accent: '#7c3aed'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
