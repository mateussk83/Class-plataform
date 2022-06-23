import { Logo } from "./Logo";

export function Header(){

  return(             
  // utiliza o className para estilizar o logo com o tailwind
  // w de width full = 100%
  // py de padding no eixo y e o 5 pq todas as medidas no tail wind é multipla de 4 se eu queria 20 px entao 2x5=20
  // flex = display:flex;
  // centraliza items com items-center e justify-center
  // bg = background color 
  // border-b-1 = border bottom 1 px e trocamos a cor dela com bo
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-500">  
      <Logo />
    </header>
  )
}