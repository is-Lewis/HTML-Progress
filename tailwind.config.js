module.exports = {
  content: [
    './dist/**/*.html',
    './dist/**/*.js',
    './dist/**/*.css',
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: 'media', // or 'class'
  theme: {

    extend: {
      screens: {
        xl: { min: "1279px" },
        lg: { min: "1080px" },
        md: { min: "768px" },
        sm: { min: "639px" },
        xs: { min: "350px" },
      },

      colors: {
        primary: "rgb(220, 90, 82)",
        secondary: "rgb(236, 232, 225)",
        bgcolr: "rgb(201, 197, 191)",
        accent: "rgb(44, 44, 44)",
        offwhite: "rgb(245, 245, 245)",
        offwhite_dark: "rgb(183, 183, 183)",
        'red': {
          400: "rgb(220, 90, 82)",
        },
      },

      boxShadow: {
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 25%)',
      },

      fontFamily: {
        bebas: ['Bebas Neue', 'cursive'],
        REM: ['REM', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
      },

      fontSize: {
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['4rem', { lineHeight: '4.5rem' }],
        '7xl': ['5rem', { lineHeight: '5.5rem' }],
        '8xl': ['6rem', { lineHeight: '6.5rem' }],
      },

      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "3.5rem",
        "8xl": "4rem",
      },

      backgroundImage: {
        'hero-image': "url('/assets/P-Mex Pictures/Copy of image00006-psedit copy.jpg')",
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}