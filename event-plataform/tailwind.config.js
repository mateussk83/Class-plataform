/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ // aqui vc coloca os arquivos que vai utilizar o tailwind
    './src/**/*.tsx' // aqui diz todos os arquivos que estiverem dentro do src e que estiverem com .tsx vai ser adcionado a stylização do tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
