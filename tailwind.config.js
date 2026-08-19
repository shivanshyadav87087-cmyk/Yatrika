/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#070b14', // Deepest Midnight Navy
          900: '#0f172a', // Midnight Slate Blue
          800: '#1e293b', // Deep Slate
          700: '#334155', // Slate Steel
          600: '#475569', // Slate Medium
          500: '#64748b', // Slate Soft
          400: '#94a3b8', // Slate Light
          300: '#cbd5e1', // Slate Soft Cream
          200: '#e2e8f0', // Slate Mist
          100: '#f1f5f9', // Slate Pure Light
          50: '#f8fafc',
        },
        terracotta: {
          900: '#782C12',
          800: '#9B3917',
          700: '#C85226',
          600: '#D96B43',
          500: '#E25822',
          400: '#F07B4D',
          300: '#F69D78',
          200: '#FAC4B0',
          100: '#FDEAE2',
          50: '#FEF5F1',
        },
        sand: {
          950: '#0f172a',
          900: '#1e293b',
          800: '#334155',
          700: '#475569',
          600: '#64748b',
          300: '#cbd5e1',
          200: '#e2e8f0',
          100: '#f8fafc',
          50: '#ffffff',
        },
        emeraldGlow: '#f59e0b', // Sunset Amber Gold
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'topography': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3Z' fill='%2338bdf8' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.75 },
        }
      }
    },
  },
  plugins: [],
}
