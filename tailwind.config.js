module.exports = {
  theme: {
    colors: {
      'c-blue': '#0069d9',
      'c-white': '#C0C5CE',
      'c-grey': '#99a1a6',
      'c-dark': '#1b1d1f',
      'c-black': '#0f1011'
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
