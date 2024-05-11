import React from 'react'

const Datalist = ({data,task}) => {
  return (
    <div>
      {
                data.map((i,index)=>{
                    return (
                        <>
                            <p key={index}>{i} <i className="bi bi-trash"></i></p>
                            <button onClick={task} className='bg-secondary'>Add Task</button>
                        </> 
                    )
                })
            }
    </div>
  )
}

export default Datalist
