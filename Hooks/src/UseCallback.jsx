import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap-icons/font/bootstrap-icons.css";
import Datalist from './Datalist';

const UseCallback = () => {
    const [count,setCount] = useState(0)   
    const [task,setTask] = useState("")
    const [data,setData] = useState([])
    const addCounter = ()=>{
        console.log("counter func called..");
        setCount(count+1)
    }
    const addTask = ()=>{
        console.log("task func called..");
        setData((i)=>[...i,"addedd"])
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
            
            <input type='text' name="task" value={task} onChange={(e)=>setTask(e.target.value)}/>
            <br /><br />
            <Datalist data={data} task={addTask}/>
            <br /><br />
        </Col>
      </Row>     
    </Container>
    </>
  )
}

export default UseCallback
