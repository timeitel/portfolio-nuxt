module.exports = {
  theme: {
    colors: {
      'c-blue': '#0069d9',
      'c-white': '#ffffff',
      'c-grey-1': '#e3e3e3',
      'c-grey-2': '#99a1a6',
      'c-grey-3': '#656a70',
      'c-dark': '#1b1d1f',
      'c-black': '#000000'
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
