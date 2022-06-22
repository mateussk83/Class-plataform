import { ApolloClient, InMemoryCache } from "@apollo/client"; //import do Apollo 

export const client = new ApolloClient({ //fazendo a requisição do usuario 

  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4opwe7d0mxp01xxfusp4rt4/master',
  cache: new InMemoryCache()
})