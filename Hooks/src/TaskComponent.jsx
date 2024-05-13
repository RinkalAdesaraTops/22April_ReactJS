import React, { memo } from 'react'

const TaskComponent = ({data,addTask}) => {
  return (
    <>
    <div>
      <h3>Task component</h3>
      {
                data.map((i,index)=>{
                    return (
                        <>
                            <p key={index}>{i} <i className="bi bi-pencil-square"></i> <i className="bi bi-trash"></i></p>                           
                        </> 
                    )
                })
            }
            <button onClick={addTask} className='bg-secondary'>Add Task</button>
    </div>
    </>
  )
}

export default memo(TaskComponent)
