import { ApolloClient, InMemoryCache } from "@apollo/client"; //import do Apollo 
// Headers serve para passar o parametro de autorização pra criação de subscriber
// Como criamos variaveis ambientes precisamos colocar import.meta.env.e o nome da variavel e o bearer pra ficar mais dificil 
export const client = new ApolloClient({ //fazendo a requisição do usuario 
  uri: import.meta.env.VITE_API_URL,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_ACESS_TOKEN}`
  },
  cache: new InMemoryCache()
})