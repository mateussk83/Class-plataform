import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscriber } from "./pages/Subscriber";


// aqui onde fica todas as trocas de paginas roteamento de serviços 
export function Router() {
// path caminho que a rota pertença
// o : quer dizer que vai passar uma informação dinamica nao um parametro fixo
 
// / -> home do site 
  return(

    <Routes>
      <Route path="/" element={<Subscriber />}/>
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  )
}