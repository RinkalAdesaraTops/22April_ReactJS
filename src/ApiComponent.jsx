import React, { useContext, useEffect, useState } from 'react'
import ContextHook from './ContextHook';
import Component2 from './Component2';

const ApiComponent = () => {
    const [data,setData] = useState([])
    const addData = ()=>{
        console.log("add data function called..");
        console.log(data);
    }
    useEffect(()=>{        
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                setData(json)
            })
    },[data])
    
  return (
    <div>
        <ContextHook />
        
        <button onClick={addData}>Check Data</button>
        <table>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Image</th>
            </tr>
            {
               data ? 
                data.map((i)=>{
                     return(
                         <tr>
                             <td>{i.id}</td>
                             <td>{i.title}</td>
                             <td>{i.price}</td>
                             <td><img src={i.image} width={"50px"}  /></td>
                         </tr>
                     )
                 })
                 : ''
            } 
        </table>
      
    </div>
  )
}

export default ApiComponent
