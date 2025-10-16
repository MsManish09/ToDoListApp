import { useEffect, useState } from "react"

function ToDoTask({tasks, taskCompletion, DeleteTask}){

    const inCompletetask = tasks.filter(task => !task.isComplete);

    console.log(inCompletetask)
    console.log('todotask component', tasks)

    function handleCompletion(e){
        console.log(e.target.id)
        // e.id.isComplete = true 

        // update isComplete property of the task, set the task.id to parent component to chnage.
        taskCompletion(e.target.id)
    }

    // useEffect(()=>{
        
    // }, [inCompletetask])

    if(inCompletetask.length === 0){
        return <h1 className=" text-center flex flex-wrap font-semibold " >You're All Caught Up! Ready to Tackle the Next Big Thing?</h1>
    }

    return(
        inCompletetask.map((task, index)=>{
            
            return(
                <div className=" flex border-2 border-solid border-gray-50 p-2 justify-evenly items-center gap-4 w-[90%] rounded-[15px] bg-blue-200 flex-wrap " key={task.id} >
                    <h1 id='taskId' className=" text-[1.2rem] font-bold " > { index + 1 } </h1>
                    <input type='checkbox' id={task.id} className=" w-[25px] h-[25px] rounded-full " onChange={handleCompletion}  />
                    
                    <div id="taskDetails" className=" flex flex-col justify-center items-center  " >
                        <input type="text" className=" text-center text-[1rem] font-bold p-2 pl-2  " value={task.name}  />
                        <input type='date' className=" text-gray-600 italic " value={task.deadline} ></input>
                    </div>

                    <div id="buttonContainer" className=" flex gap-2  flex-wrap " >
                        <button id={task.id} className=' bg-blue-500 p-2 rounded-[10px] font-semibold shadow-2xs shadow-black hover:scale-95 ' >Edit</button>
                        <button id={task.id} className=' bg-red-400 p-2 rounded-[10px] font-semibold shadow-2xs shadow-black hover:scale-95 ' onClick={(e)=>{DeleteTask(task.id)}}  >Delete</button>
                    </div>
                </div>
            )
        } )
            
        )
       }

export default ToDoTask;