import { useEffect, useState } from "react"
import { MdDelete } from "react-icons/md";


function ToDoTask({tasks, taskCompletion, DeleteTask}){

    //  to only obtain task that are yet to be completed.
    const inCompletetask = tasks.filter(task => !task.isComplete);
    console.log(inCompletetask)
    console.log('todotask component', tasks)

    function handleCompletion(e){
        setTimeout(() => {
            console.log(e.target.id)
            // e.id.isComplete = true 

            // update isComplete property of the task, set the task.id to parent component to chnage.
            taskCompletion(e.target.id)
        }, 300);
        
    }

    // useEffect(()=>{
        
    // }, [inCompletetask])

    if(inCompletetask.length === 0){
        return <h1 className=" text-center flex flex-wrap font-semibold " >You're All Caught Up! Ready to Tackle the Next Big Thing?</h1>
    }

    return(
        inCompletetask.map((task, index)=>{
            
            return(
                <div className=" taskContainer flex flex-wrap gap-2 justify-center items-center w-[100%] bg-blue-300 rounded-[10px] border-2 border-solid border-gray-100 p-2   " key={task.id} >

                    <h1 id='taskId' className=" text-[1.2rem] font-bold " > { index + 1 }. </h1>

                    <input type='checkbox' id={task.id} className=" w-[25px] h-[25px] rounded-full " onChange={handleCompletion}  />
                    
                    <div id="taskDetails" className=" flex flex-row sm:flex sm:flex-row justify-around items-center  " >

                        <div className=" flex flex-col justify-center items-center mb-1 " >
                            <input type="text" className=" text-center text-[1rem] font-bold p-1 " value={task.name}  />

                            <input type='date' className=" text-gray-600 italic text-[.8rem] " value={task.deadline} />
                        </div>

                        <div id="buttonContainer" className=" flex gap-2  flex-wrap " >
                            {/* <button id={task.id} className=' bg-blue-500 p-2 rounded-[10px] font-semibold shadow-2xs shadow-black hover:scale-95 ' >Edit</button> */}
                            <MdDelete id={task.id} className=' w-[30px] h-[30px] bg-red-400 p-1 rounded-[10px] font-semibold shadow-2xs shadow-white hover:scale-95 text-white ' onClick={(e)=>{DeleteTask(task.id)}}  ></MdDelete>
                        </div>
                    </div>

                    
                </div>
            )
        } )
            
        )
       }

export default ToDoTask;