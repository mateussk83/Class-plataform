import { gql, useQuery } from '@apollo/client'
import { Lesson } from "./Lesson";

// aonde pega todas as informações la do apollo client
const GET_LESSONS_QUERY = gql`
query {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    lessonType
    availableAt
    title
    slug
  }
}

`
// declarar variavel
// estou dizendo que recebe lessons e é um array 
interface GetLessonsQueryResponse {
  lessons: Array<{
    id:string
    title:string
    slug:string
    availableAt:string
    lessonType: 'live' | 'class'
  }>

}
export function Sidebar(){
  //apos criar a interface colocamos a interface entre <> para defini-las 
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)


  return(
    // quando nao temos um tamanho especifico dentro do tailwind resumindo multiplo de 4 entao colocamos o [e dentro o valor especifico que vamos utilizar como o w-[348px]]
    //border-l = border-left 
    // negrito = font-bold
    // text-2xl font de 24 px 
    // padding bottom de 24 px = pb-6
    //block display block
    //flex flex-col -> para ficar uma embaixo da outra 
    //gap-8 espaçamento de 32 pix 
    // map é para percorrer cada elemento dentro de data
    // atributo interno do react chamado key precisa colocar no primeiro objeto é o identificador unico dele no caso da aplicação é o lesson.id
    // new Date converte a tring data em o tipo data do javascript
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
<span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
  Cronograma de aulas
</span>

    <div className="flex flex-col gap-8">
       {data?.lessons.map(lesson => {
        return (
          <Lesson
          key={lesson.id}
           title={lesson.title}
           slug={lesson.slug}
           availableAt={new Date(lesson.availableAt)}
           type= {lesson.lessonType}
          />
        )
       })}
    </div>
    </aside>
  )
}