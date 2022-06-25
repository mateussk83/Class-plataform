import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import { gql, useQuery } from "@apollo/client";
 
//themas do video
import '@vime/core/themes/default.css'

// aqui passa os parametros que vai receber la do graphql
const GET_LESSONS_BY_SLUG_QUERY = gql `
query GetLessonBySlug  ($slug: String){
  lesson(where: {slug: $slug}) {
    title
    videoId
    description
    teacher {
      bio
      avatarURL
      name
    }
  }
}

`
// aqui especifica qual tipo de dados vm receber do query
interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
        bio: string;
        avatarURL: string;
        name: string;
    }
  }
}

interface VideoProps {
  lessonSlug : string;
}
export function Video(props: VideoProps) {

  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSONS_BY_SLUG_QUERY, {
    variables: {
      slug : props.lessonSlug,
    }
  })

  console.log(data)

  // como o data é de onde tiramos todas as informações e ele demora alguns ms pra carregar deixamos esperando ate a aplicação ter todos os dados necessarios!!
  if (!data) {
    return <div className="flex-1">
      <p>Carregando...</p>
    </div>
  }

  return(
    
    //flex-1 = quer dizer q ele pode esticar ou reduzir mais tamanho ou menos tamanho ele nao tem um tamanho fixo 
    // aspect-video -> o aspect que devemos seguir resumindo um tamanho padrão que o video vai ter qeu seguir 
    // items-start -> quer dizer que ele vai ficar alinhado o maximo possivel pra cima 
    // se queremos que mude a cor no estado hover que é quando passa o mouse por cima entao basta colocar no tailwind hover: css desejado de todas as alterações
    //leading-relaxed -. espaça um pouco uma linha da outra escrita deixando mais facil leitura
    //rounded-full -> totalmente arredonado 
    // grid -> cria colunas
    // grid-cols-2 ta dizendo que vai existir duas do mesmo tamanho 
    // quando colocamos rounded ele sobrepoe os elementos internos 
    // com o overflow-hidden ele nao permite ultrapassar os objetos internos!!!!
    // items-stretch serve para dizer que os itens se estiquem ao maximo do tamanho dentro da div! 
    // player é apora o player do video youtube a origin e o DesfaultUi é para colocar o voltar o video ir aumentar o volume e etc 
    <div className="flex-1">
      <div className="bg-black flex justify-center">   
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId}/>
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
            {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
            {data.lesson.description}
              </p>

              <div className="flex items-center gap-4 mt-6">
              <img 
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data.lesson.teacher.avatarURL} 
                alt="" 
                />

                <div className="leading-relaxed">
              <strong className="font-bold text2xl block">{data.lesson.teacher.name}</strong>
              <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                </div>
          </div>
          </div>


          <div className="flex flex-col gap-4">
    <a href="" className="p-4 text-sn bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
      <DiscordLogo size={24} />
Comunidade do Discord
    </a>

    <a href="" className="p-4 text-sn border border-blue-500 text-blue-500 flex item
    s-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
      <Lightning size={24} />
Acesse o Desafio
    </a>
          </div>
        </div>
        <div>
          <div className="gap-8 mt-20 grid grid-cols-2">
            <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
              <div className="bg-green-700 h-full p-6 flex items-center">
                <FileArrowDown size={40}/>
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-2xl">Material Complementar</strong>
                <p className="text-sm text-gray-20 mt-2">
                  Acesse o material complementar para acelerar o seu desenvolvimento
                </p>
              </div>
              <div className="h-full p-6 flex items-center">
                <CaretRight size={24} />
              </div>
            </a>
            <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
              <div className="bg-green-700 h-full p-6 flex items-center">
                <FileArrowDown size={40}/>
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-2xl">Wallpapers Exclusivos</strong>
                <p className="text-sm text-gray-20 mt-2">
                  baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                </p>
              </div>
              <div className="h-full p-6 flex items-center">
                <CaretRight size={24} />
              </div>
            </a>

          </div>
        </div>
      </div>
    </div>

  )

}