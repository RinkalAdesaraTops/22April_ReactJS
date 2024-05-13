import React, { useCallback, useMemo, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap-icons/font/bootstrap-icons.css";
import TaskComponent from './TaskComponent';

//useMemo(value) - useCallback(function)
const UsememoExample = () => {
    const [count,setCount] = useState(0)   
    const [task,setTask] = useState("")
    const [data,setData] = useState([])
    const calcFunction = (count)=>{
        console.log("Calculation perform....");
        for(let i=0;i<1000000000;i++){
            count +=1;
        }
        return count;
    }
    const calc = useMemo(()=>calcFunction(count),[count])
    const addCounter = ()=>{
        console.log("counter func called..");
        setCount(count+1)
    }
    const addTask = useCallback(()=>{
        setData((i)=>[...i,task])
        //setData((i)=>[...i,"task added"])
        setTask('')
    },[task])
    //arr = [1,2,3,4,5,6,78]
    //arr.splice(2,0,45,56,67)
    //arr.splice(2,2)
    //arr.slice(-3,-6)
  return (
    <>
    <Container>
      <Row>
        <Col className='bg-primary'>
            <h6>Counter is :{count}</h6>
            <button onClick={addCounter} className='bg-warning'>Add</button>
             {/* Calculation : {calc} */}
            

        </Col>
        <Col className='bg-success'>
            <h4>Task List</h4>      
            <input type='text' name="task" value={task} onChange={(e)=>setTask(e.target.value)}/>
            <br /><br />
            <TaskComponent key={data.length} data={data} addTask={addTask}/>     
           
            <br /><br />

        </Col>
        <Col>
            <h4>Expensive Calc Function</h4>
                {calc}
        </Col>
      </Row>     
    </Container>
    </>
  )
}

export default UsememoExample
