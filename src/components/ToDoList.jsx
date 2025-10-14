import { useState } from "react";
import ToDoTask from "./ToDoTask";

function ToDoList(){

    const [taskName, setTaskName] = useState('')
    const [deadline, setDeadline] = useState()

    // const tasksArray = []
    // const [tasksList, setTasksList] = useState(tasksArray)

    // const task = {
    //     name: '',
    //     deadline: null
    // }

    function handleTaskName(e){
        setTaskName(e.target.value)
        console.log(e.target.value)
    }

    function handleDeadlineChange(e){
        setDeadline(e.target.value)
        console.log(e.target.value)
    }

    function handleAddTask(){
        // task.name = taskName
        // task.deadline = deadline

        // tasksArray.push(task)

        // setTasksList(tasksArray)
    }

    return(
        <div  className=" font-mono  " >

            <div className=" flex flex-col gap-4 justify-center items-center p-2 " >
                <h1 className=" text-center text-3xl  font-bold " >My Tasks</h1>
                <p className=" text-center  " >Tick off your tasks, one at a time✔️</p>

                <div id="addTask">
                    <form action="" className= " flex justify-center items-center gap-3 border-2 border-solid border-purple-500 p-2 pl-4 pr-4  bg-gradient-to-r from-purple-300 to-blue-300 flex-wrap " >
                        <input type="text" id='taskName' required placeholder='Add new task' className=' bg-blue-200 rounded-2xl p-2 pl-4 ' value={taskName} onChange={handleTaskName} />
                        <div className=" flex flex-col justify-center items-center " >
                            <p className=" font-bold " >Deadline</p>
                            <input type="date" id='Deadline' required onChange={handleDeadlineChange} />
                        </div>
                        
                        <h1 id='addTaskBtn' className=" bg-blue-500 rounded-2xl p-2 font-bold hover:scale-95 w-[50px] text-center " onClick={handleAddTask} >Add</h1>
                    </form>
                </div>
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