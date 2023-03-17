/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.tsx",
    './src/pages/**/*.tsx.',
  ],
  theme: {
    extend: {},
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive']
      },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
