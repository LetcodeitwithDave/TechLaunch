/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      robotoRegular: ['Roboto Regular', 'sans-serif'],
      robotoMedium: ['Roboto Medium', 'sans-serif'],
      robotoBold: ['Roboto Bold', 'sans-serif'],
      montserratRegular: ['Montserrat Regular', 'sans-serif'],
      montserratBold: ['Montserrat Bold', 'sans-serif'],
      montserratSemibold: ['Montserrat SemiBold', 'sans-serif'],

    },
    extend: {

      borderColor: {
        customColor1: '#007BFF',  // Custom color (lightblue)
      },
      colors: {
        pageBackground : '#F8F9FA',
        heroBackground: '#F2F2F2',
        textColor: '#333333',
        subheading: '#666666',
        buttonBackground: '#007BFF',
        OfferSectionBackground: '#EFEFEF',
      },

      textDecorationColor: {
        decorationColor: '#007BFF',
      },

      backgroundImage: {
        'header': "url('assets/images/pxfuel.jpg')",
      },
    },
  },
  plugins: [],
}

