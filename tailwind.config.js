module.exports = {
  darkMode: 'class',
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e3a8a",
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        secondary: {
          DEFAULT: "#64748b",
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        accent: {
          DEFAULT: "#3b82f6",
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
        },
        background: "#f8fafc",
        surface: "#ffffff",
        text: {
          primary: "#1e293b",
          secondary: "#64748b",
        },
        success: {
          DEFAULT: "#059669",
          50: "#ecfdf5",
          100: "#d1fae5",
          500: "#10b981",
          600: "#059669",
        },
        warning: {
          DEFAULT: "#d97706",
          50: "#fffbeb",
          100: "#fef3c7",
          500: "#f59e0b",
          600: "#d97706",
        },
        error: {
          DEFAULT: "#dc2626",
          50: "#fef2f2",
          100: "#fee2e2",
          500: "#ef4444",
          600: "#dc2626",
        },
        border: "#e2e8f0",
        "border-focus": "#3b82f6",
        dark: {
          primary: {
            DEFAULT: '#60a5fa', // blue-400
            50: '#1e293b', // slate-800
            100: '#334155', // slate-700
            500: '#60a5fa', // blue-400
            600: '#93c5fd', // blue-300
            700: '#bfdbfe', // blue-200
            800: '#dbeafe', // blue-100
            900: '#eff6ff', // blue-50
          },
          secondary: {
            DEFAULT: '#94a3b8', // slate-400
            50: '#1e293b', // slate-800
            100: '#334155', // slate-700
            200: '#475569', // slate-600
            300: '#64748b', // slate-500
            400: '#94a3b8', // slate-400
            500: '#cbd5e1', // slate-300
            600: '#e2e8f0', // slate-200
            700: '#f1f5f9', // slate-100
            800: '#f8fafc', // slate-50
            900: '#ffffff', // white
          },
          accent: {
            DEFAULT: '#60a5fa', // blue-400
            50: '#1e293b', // slate-800
            100: '#334155', // slate-700
            500: '#60a5fa', // blue-400
            600: '#93c5fd', // blue-300
          },
          background: '#0f172a', // slate-900
          surface: '#1e293b', // slate-800
          text: {
            primary: '#f1f5f9', // slate-100
            secondary: '#94a3b8', // slate-400
          },
          success: {
            DEFAULT: '#34d399', // emerald-400
            50: '#064e3b', // emerald-900
            100: '#059669', // emerald-600
            500: '#34d399', // emerald-400
            600: '#6ee7b7', // emerald-300
          },
          warning: {
            DEFAULT: '#fBBf24', // amber-400
            50: '#78350f', // amber-900
            100: '#b45309', // amber-700
            500: '#fBBf24', // amber-400
            600: '#fcd34d', // amber-300
          },
          error: {
            DEFAULT: '#f87171', // red-400
            50: '#7f1d1d', // red-900
            100: '#b91c1c', // red-700
            500: '#f87171', // red-400
            600: '#fca5a5', // red-300
          },
          border: '#334155', // slate-700
          'border-focus': '#60a5fa', // blue-400
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'elevated': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'modal': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'DEFAULT': '6px',
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      scale: {
        '98': '0.98',
        '102': '1.02',
      },
      minHeight: {
        'touch': '44px',
        'touch-mobile': '48px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 150ms ease-out',
        'slide-up': 'slideUp 300ms ease-in-out',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-in': 'rotateIn 300ms ease-in-out',
        'rotate-out': 'rotateOut 300ms ease-in-out',
        'fade-out': 'fadeOut 300ms ease-in-out',
      },
      animationDelay: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-90deg)', opacity: '0' },
          '100%': { transform: 'rotate(0)', opacity: '1' },
        },
        rotateOut: {
          '0%': { transform: 'rotate(0)', opacity: '1' },
          '100%': { transform: 'rotate(90deg)', opacity: '0' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}