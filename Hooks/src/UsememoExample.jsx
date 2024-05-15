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
    const [id,setId] = useState("")
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
      console.log(id);
        setData((i)=>[...i,task])
        //setData((i)=>[...i,"task added"])
        setTask('')
    },[task])
   
    const deleteTask = useCallback((id)=>{
      let data1 = data.filter((i,index)=>{
            return index!=id;
          })
         setData(data1) 
    })
   
    const editTask = (id)=>{
      let data1 = data.filter((i,index)=>{
        return index==id;
      })
      setTask(data1[0])
      setId(id)
    }
    const updateTask = ()=>{
      console.log("update func calling..");
      let data1 = data.map((i,index)=>{
        console.log("id is "+id);
        console.log("task is "+task);
        if(index == id){
          i = task
        }
        return i;
      })
      setData(data1)
      setId("")
    }
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
            <TaskComponent key={data.length} id={id} data={data} addTask={addTask} deleteTask={deleteTask} editTask={editTask} updateTask={updateTask}/>     
           
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
