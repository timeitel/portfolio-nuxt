module.exports = {
  theme: {
    colors: {
      primaryBlue: '#0069d9',
      primaryDark: '#1D2027',
      primaryWhite: '#C0C5CE',
      primaryGrey: '#8FA1B3'
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
