import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";



export function Event() {
// flex 1 para alcançar a maior altura possivel
// min h -> quer dizer que o minimo do right é de 100 do view port 
  return(
    <div className="flex flex-col min-h-screen">
     <Header /> 
     <main className="flex flex-1"> 
      <Video/>
     <Sidebar />
     </main>
     </div>
  )
}