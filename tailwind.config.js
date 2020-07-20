module.exports = {
  theme: {
    colors: {
      'c-blue': '#0069d9',
      'c-dark': '#1D2027',
      'c-white': '#C0C5CE',
      'c-grey': '#8FA1B3'
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
