import { SiTicktick } from "react-icons/si";


function CompletedTasks({tasks}){

    const completedTask = tasks.filter(task => task.isComplete == true );
    let count = 1;

    console.log(completedTask)
    console.log('completed component', completedTask)

    

    if(completedTask.length == 0){
        return <h1 className=' flex flex-wrap text-center ' >Nothing done yet—let's get started!</h1>
    }

    return(
        completedTask.map((task, index)=>{
            if(index >= 5 ){
                return
            }
            return(
                
                <div className=" flex border-2 border-solid border-gray-50 p-2 justify-evenly items-center gap-4 w-[90%] rounded-[15px] bg-green-200 flex-wrap " key={task.id} >
                    
                    <h1 id='taskId' className=" text-[1.2rem] font-bold " > {index + 1} </h1>
                
                    <div id="taskDetails" className=" flex flex-col flex-wrap text-center line-through " >
                        <h1 className=" text-[1.2rem] font-bold " > {task.name} </h1>
                        <p className=" text-gray-600 italic " >{task.deadline}</p>
                    </div>

                    <div>
                        <SiTicktick className=" w-[30px] h-[30px] text-green-700 " ></SiTicktick>
                    </div>
                </div>
                
            )
        } )
            
        )
       }

export default CompletedTasks;