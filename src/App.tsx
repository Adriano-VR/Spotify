import Header from "./components/Header"
import Main from "./components/Main"
import SuaBiblioteca from "./components/SuaBiblioteca"


function App() {

  return (
        <div className="container mx-auto">
          <Header />
          <main className="grid grid-cols-[0.35fr_1fr] gap-3">
          <aside className=" max-h-[85vh]">
            <SuaBiblioteca />
          </aside>
          <Main   />
          </main>
        
         
        </div>
   

  )
}

export default App
