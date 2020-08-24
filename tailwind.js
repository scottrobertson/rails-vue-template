module.exports = {
  purge: {
    enabled: false,
    content: [
      './app/**/*.vue',
      './app/views/**/*.html.erb'
    ],
  },
  theme: {

  },
  variants: {},
  plugins: [
  ],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
