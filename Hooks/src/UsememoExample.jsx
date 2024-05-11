import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap-icons/font/bootstrap-icons.css";

const UsememoExample = () => {
    const [count,setCount] = useState(0)   
    const [task,setTask] = useState("")
    const [data,setData] = useState([])
    const addCounter = ()=>{
        console.log("counter func called..");
        setCount(count+1)
    }
    const addTask = ()=>{
        console.log("task func called..");
        setData((i)=>[...i,task])
        // setData((i)=>[...i,"task added"])
        setTask('')
    }
  return (
    <>
    <Container>
      <Row>
        <Col className='bg-primary'>
            <h6>Counter is :{count}</h6>
            <button onClick={addCounter} className='bg-warning'>Add</button>
        </Col>
        <Col className='bg-success'>
            <h4>Task List</h4>
            {
                data.map((i,index)=>{
                    return (
                        <>
                            <p key={index}>{i} <i class="bi bi-trash"></i></p>
                            
                        </> 
                    )
                })
            }
            <input type='text' name="task" value={task} onChange={(e)=>setTask(e.target.value)}/>
            <br /><br />
            <button onClick={addTask} className='bg-secondary'>Add Task</button>
            <br /><br />
        </Col>
      </Row>     
    </Container>
    </>
  )
}

export default UsememoExample
