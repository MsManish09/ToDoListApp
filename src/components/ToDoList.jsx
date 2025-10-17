import { useEffect, useState } from "react";
import ToDoTask from "./ToDoTask";
import CompletedTasks from "./CompletedTasks";

import { MdOutlinePendingActions } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";




function ToDoList(){

    const [taskName, setTaskName] = useState('')
    const [deadline, setDeadline] = useState('')

    // creating a state to store task lists -> get the list from local storage to view across sessions.
    const [task, setTask] = useState(()=>{
        let list = localStorage.getItem('tasksListArray') 
        if(list){
            return JSON.parse(list)
        }
        else{
            return []
        }
    }) // store this in local storage

    function handleTaskName(e){
        setTaskName(e.target.value)
        // console.log(e.target.value)
    }

    function handleDeadlineChange(e){
        setDeadline(e.target.value)
        // console.log(e.target.value)
    }

    function handleAddTask(){

        // if task name and deadline is empty, send a warning and reload.
        if(!taskName || !deadline){
            alert('Enter the task name and deadline')
            // reload page
            location.reload()
            return
        }

        // task is created.
        console.log('add task button is clicked...')
        // const task1 = new tasks(taskName, taskName, deadline)
        const newTask = { id: taskName, name: taskName, deadline, isComplete: false };

        //add new task at the 0th index
        const updateTasklist = [newTask, ...task];
    
        // update the state
        setTask(updateTasklist)

        //store the updated state in local storage
        localStorage.setItem('tasksListArray', JSON.stringify(updateTasklist))  
    }

    // task completion functionlity
    function taskCompletion(id){

        const updatedList = task.map((task)=>{
            if(task.id == id){
                task.isComplete = true
            }
            return task
        })

        // update the task state and store in local storage
        setTask(updatedList)
        localStorage.setItem('tasksListArray', JSON.stringify(task))
    }

    useEffect(()=>{
        // every time the task list chnages, update the task in local storage.
        localStorage.setItem('tasksListArray', JSON.stringify(task));
    }, [task])

    // delete functionality using the task id
    function DeleteTask(TaskID){
        console.log(TaskID)
        // let taskToDelete = task.find((t)=> t.id == TaskID )
        // console.log('delete task function')
        // console.log(taskToDelete)

        // create a new task list excluding the task that is to be deleted and update the local storage.
        let newTaskListAfterDeletion = task.filter((t)=> t.id != TaskID)
        setTask(newTaskListAfterDeletion)
    }


    return(
        <div  className=" font-mono mb-8  " >

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
                        
                        <h1 id='addTaskBtn' className=" bg-blue-500 rounded-2xl p-2 font-bold hover:scale-95 w-[50px] text-center border-2 border-solid border-purple-500 " onClick={handleAddTask} >Add</h1>
                    </form>
                </div>
            </div>

            <div className=" flex gap-2 justify-center mt-6 flex-wrap "  >
                <section id= 'CurrenttasksContainer' className=" bg-blue-100 w-[40%] h-[40%] min-w-[350px] flex p-4 flex-col " >
                    <h1 className=" flex justify-center gap-1 items-center text-center text-[1.7rem] font-bold underline border-b-2 pb-2 border-solid border-gray-50 text-blue-800 " >Active Tasks <MdOutlinePendingActions /></h1>

                    <div id="tasksContainer" className=" flex flex-col justify-center items-center p-2 gap-2 "  >
                        <ToDoTask tasks={task} taskCompletion={taskCompletion} DeleteTask={DeleteTask} />
                    </div>
                </section>

                <section id= 'completedTasksContainer' className=" bg-green-100 w-[40%] h-[40%] min-w-[350px] flex p-4 flex-col " >
                    <h1 className=" flex justify-center items-center gap-1 text-center text-[1.7rem] font-bold underline border-b-2 pb-2 border-solid border-gray-50 text-green-800 " >Completed Tasks <TiTickOutline /> </h1>

                    <div id="tasksContainer" className=" flex flex-col justify-center items-center p-2 gap-2 "  >
                        <CompletedTasks tasks={task}  />
                    </div>
                </section>
            </div>
            
        </div>
    )
}

export default ToDoList;