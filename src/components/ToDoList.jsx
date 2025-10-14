import ToDoTask from "./ToDoTask";

function ToDoList(){

    return(
        <div  className=" font-mono  " >

            <div>
                <h1 className=" text-center text-3xl mt-4 font-bold " >My Tasks</h1>
                <p className=" text-center mt-2 " >Tick off your tasks, one at a time✔️</p>
            </div>

            <div className=" flex gap-4 justify-center mt-6 flex-wrap "  >
                <section id= 'CurrenttasksContainer' className=" bg-blue-100 w-[40%] h-[40%] min-w-[350px] flex p-4 flex-col " >
                <h1 className=" text-center text-[1.7rem] font-bold underline border-b-2 pb-2 border-solid border-gray-50 " >Active Tasks</h1>

                <div id="tasksContainer " className=" flex flex-col justify-center items-center p-4 "  >
                    <ToDoTask />
                </div>
            </section>

            <section id= 'completedTasksContainer' className=" bg-green-100 w-[40%] h-[40%] min-w-[350px] flex p-4 flex-col " >
                <h1 className=" text-center text-[1.7rem] font-bold underline border-b-2 pb-2 border-solid border-gray-50 " >Completed Tasks</h1>
            </section>
            </div>
            
        </div>
    )
}

export default ToDoList;