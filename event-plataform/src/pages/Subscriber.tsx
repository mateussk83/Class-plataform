import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";


const CREATE_SUBSCRIBER_MUTATION = gql `
 mutation createSubscriber ($name: String!, $email: String!){
  createSubscriber(data: {name: $name, email: $email}) {
    id
  }
}

`
export function Subscriber() {
// usar quando queremos redirecionar um usuario pra outra tela sem ele clicar na propria ancora
  const navigate = useNavigate()
  //fazer formulario
  // variavel estavel é a variavel que toda vez que o usuario usa ela reflete direot pra react automaticamente
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  // primeiro argumento estruturação e segundo argumento reestruturação
  // este loading tem em todas as requisições de qualquer tipo tanto get quanto post 
  // esse loading mostra se a requisição ta sendo feita caso ela esteja sendo feita fica true se nao false
  const [ createSubscriber, { loading } ] = useMutation(CREATE_SUBSCRIBER_MUTATION)
  // quando o usuario clicar no submit ele pega o form inteiro
  // geralmente quando clicamos no submit automaticamente ele leva a proxima pagina entao utilizamos 
  // o event.preventDefault(); mas não é mto legal pelo fato de event nao ser uma variavel declarada entoa utilizamos 
  // o FormEvent do react para declarar que tipo de evento é 
  // async = asicrona
  async function handleSubscribe(event : FormEvent) {
    event.preventDefault();
    
    await createSubscriber({
      variables: {
        name,
        email,
      }
    })

    navigate('/event')
  }

  return (
    // ela vai ocupar no minimo a tela toda com min-h-screen
    // para sitar a imagem la das config do tail wind basta usar bg-o nome que vc colocou la
    // bg-cover para ela cobrir a tela toda
    // bg-no-repeat pra ela nao ficar repetindo no fundo
    //leading-tight é para as letras ficarem mais proximas uma da outra
    // toda vez que ele mexer nos inputs o onChange faz com que ele vai direto pra const o valor do event
    //disabled do button serve para dizer quando o loading ficar true o botao aparece
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
            </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input 
            className="bg-gray-900 rounded px-5 h-14"
            type="text" 
            placeholder="Seu nome Completo" 
            onChange={ event => setName(event.target.value)}
            />
            <input 
            className="bg-gray-900 rounded px-5 h-14"
            type="email
            " 
            placeholder="Digite seu e-mail" 
            onChange={ event => setEmail(event.target.value)}
            />

            <button 
            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-color"
            type="submit"
            disabled={loading}
            >
                Garantir minha vaga
            </button>
          </form>

        </div>
      </div>
        <img src="/src/assets/code-mackup.png" className="mt-10" alt="" />
    </div>
  )
}