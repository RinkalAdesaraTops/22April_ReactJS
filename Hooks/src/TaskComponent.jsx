import React, { memo, useEffect, useState } from 'react'

const TaskComponent = ({data,addTask,deleteTask,editTask,id,updateTask}) => {

  // const [newData,setNewData] = useState([])
 
 
  // useEffect(()=>{
  //   console.log('use effect calling');
  //   setTimeout(()=>{
  //     setNewData(data)
  //   },5000)
  // },[])
  
  return (
    <>
    <div>
      <h3>Task component</h3>
      {
                data.map((i,index)=>{
                    return (
                        <>
                            <p key={index}>{i} 
                            <button onClick={()=>editTask(index)}><i className="bi bi-pencil-square"></i> </button>
                            <button onClick={()=>deleteTask(index)}><i className="bi bi-trash"></i></button></p>                           
                        </> 
                    )
                })
            }
            <button onClick={id ? updateTask:addTask} className='bg-secondary'>{ id ? "Update" : "Add"} Task</button>
            
    </div>
    </>
  )
}

export default memo(TaskComponent)
