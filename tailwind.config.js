module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F7F8FC',
        'surface': '#FFFFFF',
        'primary': {
          DEFAULT: '#4A55A2',
          '100': '#E9EAF5',
          '500': '#5A67D8',
          '600': '#4A55A2',
          '700': '#3A448C'
        },
        'secondary': {
          DEFAULT: '#A0AEC0',
          '50': '#F8F9FA',
          '200': '#E2E8F0',
          '500': '#718096',
        },
        'accent': {
          DEFAULT: '#7E57C2',
          '100': '#F2EDF8',
          '200': '#D4C6E9',
          '500': '#7E57C2',
          '600': '#673AB7',
        },
        'text-primary': '#2D3748',
        'text-secondary': '#718096',
        'border': '#E2E8F0',
        'success':{
          '50': '#F0FFF4',
          '500': '#48BB78',
          '600': '#38A169',
          '800': '#2F855A',
        },
        'warning': {
          '50': '#FFFBEB',
          '200': '#FEEBC8',
          '500': '#F6E05E',
          '600': '#D69E2E',
          '700': '#B7791F',
          '800': '#975A16',
        },
        'error': {
          '500': '#F56565',
          '600': '#E53E3E',
        },
        'dark': {
          'background': '#1A202C',
          'surface': '#2D3748',
          'primary': '#7A86CC',
          'primary-100': '#2C3254',
          'primary-600': '#8A96D8',
          'secondary': '#A0AEC0',
          'secondary-50': '#2A313E',
          'secondary-200': '#4A5568',
          'accent': '#B39DDB',
          'accent-100': '#3C324E',
          'accent-200': '#5C4A7E',
          'accent-500': '#B39DDB',
          'accent-600': '#A387C9',
          'text-primary': '#F7FAFC',
          'text-secondary': '#A0AEC0',
          'border': '#4A5568',
          'success-50': '#2B3F32',
          'success-500': '#68D391',
          'success-600': '#48BB78',
          'success-800': '#9AE6B4',
          'warning-50': '#42381C',
          'warning-200': '#634E1A',
          'warning-500': '#F6E05E',
          'warning-600': '#ECC94B',
          'warning-700': '#D69E2E',
          'warning-800': '#FAF089',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-in': 'rotateIn 0.5s ease-out forwards',
        'rotate-out': 'rotateOut 0.5s ease-out forwards',
        'fade-out': 'fadeOut 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0', visibility: 'hidden' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': {
            opacity: 1,
            transform: 'scale(1)'
          },
          '50%': {
            opacity: .5,
            transform: 'scale(0.95)'
          }
        },
        rotateIn: {
          '0%': { transform: 'rotate(-90deg)', opacity: '0' },
          '100%': { transform: 'rotate(0deg)', opacity: '1' },
        },
        rotateOut: {
          '0%': { transform: 'rotate(0deg)', opacity: '1' },
          '100%': { transform: 'rotate(90deg)', opacity: '0' },
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}