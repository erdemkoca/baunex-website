export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: { 
          DEFAULT: "#4F46E5", 
          700: "#4338CA",
          600: "#4F46E5",
          500: "#6366F1"
        },
        neutral: { 
          900: "#0F172A", 
          700: "#334155", 
          500: "#64748B", 
          100: "#F1F5F9",
          50: "#F8FAFC"
        },
        accent: {
          from: "#6366F1",
          to: "#22D3EE"
        }
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(15,23,42,.25)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        glow: "0 0 20px rgba(79, 70, 229, 0.3)"
      },
      borderRadius: { 
        '2xl': '1rem',
        '3xl': '1.5rem'
      },
      container: { 
        center: true, 
        padding: "1rem",
        screens: {
          '2xl': '1400px'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'display-1': ['44px', { lineHeight: '52px', fontWeight: '700' }],
        'display-2': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'display-3': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'body': ['16px', { lineHeight: '26px', fontWeight: '400' }],
        'body-medium': ['16px', { lineHeight: '26px', fontWeight: '500' }]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-accent': 'linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)',
        'gradient-soft': 'linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(34, 211, 238, 0.1) 100%)'
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
