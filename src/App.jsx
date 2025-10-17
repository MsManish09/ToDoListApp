
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";


function App(){
  return(
    <div className=" bg-gradient-to-r from-purple-100 to-blue-100 min-h-screen " >
      <Header />
      <ToDoList />
      <h1 className=" text-center text-[1.4rem] font-semibold p-2 pb-6 text-purple-600 " >Progress is Progress, No Matter How Small—Keep Crushing It 💪</h1>
    </div>
  )
}

export default App;