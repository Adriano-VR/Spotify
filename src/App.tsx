import Header from "./components/Header"
import SuaBiblioteca from "./components/SuaBiblioteca"


function App() {

  return (
        <div className="container mx-auto">
          <Header />
          <main className="grid grid-cols-3">
          <aside className="col-span-1 h-[80vh]">
            <SuaBiblioteca />
          </aside>
          <article className="text-white col-span-2 bg-blue-400" ></article>
          </main>
        
         
        </div>
   

  )
}

export default App
