/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // aqui vc coloca os arquivos que vai utilizar o tailwind
    './src/**/*.tsx' // aqui diz todos os arquivos que estiverem dentro do src e que estiverem com .tsx vai ser adcionado a stylização do tailwind
  ],
  theme: {
    extend: {
      // eu coloco o background imagem aqui para configurar o tail wind 
      // quando for colocar alguma url aqui precisamos do url() e colocar o caminho absoluto vindo direto da raiz da aplicação
      backgroundImage: {
        blur: 'url(/src/assets/blur-background.png)'
      },
      fontFamily: {
        // se nao encontra a font Roboto pode usar qualquer outra
        sans: 'Roboto, sans-serif'
      },
      //tem cores padrões no tailwind porem precisamos costumizar algumas delas
      colors: {
        green: {
          //utilizamos a  cor green e trocamos ela para a cor que queriamos agr o bg-green-300 tem a cor #00B37E
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43'
        },
        blue: {
          500: '#81D8F7'
        },
        orange: {
          500: '#FBA94C'
        },
        red: {
          500: '#F75A68'
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      }
    }
  },
  plugins: []
}
