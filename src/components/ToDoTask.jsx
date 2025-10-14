
function ToDoTask({tasks}){

    // if(!tasks){
    //     return <h1>No Active Tasks</h1>
    // }

    return(
        <div className=" flex border-2 border-solid border-gray-50 p-2 justify-evenly items-center gap-4 w-[90%] rounded-[15px] bg-blue-200 flex-wrap " >
            <h1 id='taskId' className=" text-[1.2rem] font-bold " > 1 </h1>
            <input type='checkbox' id='isComplete' className=" w-[25px] h-[25px] rounded-full "  />
            <div id="taskDetails" className=" text-center " >
                <h1 className=" text-[1.2rem] font-bold " >Task title</h1>
                <p className=" text-gray-600 italic " >Deadline</p>
            </div>

            <div id="buttonContainer" className=" flex gap-2  flex-wrap " >
                <button id='editTaskBtn' className=' bg-blue-500 p-2 rounded-[10px] font-semibold shadow-2xs shadow-black hover:scale-95 ' >Edit</button>
                <button id='deleteTaskBtn' className=' bg-red-400 p-2 rounded-[10px] font-semibold shadow-2xs shadow-black hover:scale-95 '  >Delete</button>
            </div>
        </div>
    )
}

export default ToDoTask;