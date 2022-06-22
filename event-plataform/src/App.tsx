import {gql , useQuery} from "@apollo/client"   // adciona um hook(hook é uma função que altera o comportamento da aplicação) do apollo chamado useQuery geralmente utiliza o use na frente
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
` //permite escrever querys do graphqly resumindo buscar informações inseridas la no graphql

interface Lesson {
  id:string;
  title: string;
}
function App() {  // base de como utilizar uma query usando o APOLLO
  const { data } = useQuery<{ lessons: Lesson[]}>(GET_LESSONS_QUERY)

  console.log(data)
  return (
    <ul>
      {data?.lessons.map(lessons => {
        return <li key= {lessons.id}>{lessons.title}</li>
      })}
    </ul> // chama o lesson.id do graphql
    
    // utilizando o tailwind consegue dar classe de nomes para estilizar as tags automatimaticamente
  )
}

export default App
