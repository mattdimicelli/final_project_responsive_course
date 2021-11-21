module.exports = {
  mode: 'jit',
  purge: [  // should include any files that refernce any of the styles by name
      './dist/*.html',
      './dist/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'grey-mydark' : '#2E323F',
        'grey-mymedium': '#3B4050',
        'grey-mylight': '#6F737F',
        'brown-mylight': '#A59678',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      fontSize: {
        'huge': '5.625rem',
        'myxl': '1.313rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
