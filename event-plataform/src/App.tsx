import { ApolloProvider } from "@apollo/client"
import { Browser } from "phosphor-react"
import { BrowserRouter } from "react-router-dom"
import { client } from "./lib/apollo"
import { Router } from "./Router"

function App() {  // base de como utilizar uma query usando o APOLLO
return (
 <div>
  <ApolloProvider client = {client}> 
  <BrowserRouter>
  <Router />
  </BrowserRouter>
  </ApolloProvider>
 </div>
 )
}

export default App
