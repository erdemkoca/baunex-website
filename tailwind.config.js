/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#4F46E5", 700: "#4338CA" },
        accent: { DEFAULT: "#22D3EE" },
        neutral: { 900:"#0F172A",700:"#334155",500:"#64748B",100:"#F1F5F9" },
      },
      boxShadow: {
        soft: "0 24px 60px -20px rgba(15,23,42,.25)",
        ring: "0 0 0 8px rgba(79,70,229,.10)",
      },
      borderRadius: { '2xl': '1rem', '3xl': '1.25rem' },
      backdropBlur: { xs: '2px' },
      container: { center: true, padding: "1rem" },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['Inter', 'Manrope', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'h1': ['44px', { lineHeight: '52px', letterSpacing: '-0.02em' }],
        'h2': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em' }],
        'h3': ['24px', { lineHeight: '32px', letterSpacing: '-0.01em' }],
        'body': ['16px', { lineHeight: '26px' }]
      }
    },
  },
  plugins: [],
}
