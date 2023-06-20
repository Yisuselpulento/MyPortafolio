/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 20px 80px -14px rgba(0, 0, 0, 0.3)'
      }
    }
  },
  plugins: []
}
