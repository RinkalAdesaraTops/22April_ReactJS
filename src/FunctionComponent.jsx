import React, { useState } from 'react'

export const FunctionComponent = () => {
    const [count,setCount] = useState(0)
    const [uname,setUname] = useState("TestName")

    // const arr = ["test","test1","test3"]
    // const arr2 = ["abc","pqr"]
    //... - spreading operator
    //Merging 2 array
    // const merge_arr = [...arr,...arr2]
    //destructuring
    // const [a,,c] = arr;

    const [userdata,setUserdata] = useState({
        name:"",
        email:"",
        pwd:""
    })
    //setUserdata.name = jfdkhgdfkj
    const increment = ()=>{
        setCount(count+1)
    }

    const decrement = ()=>{
        setCount(count-1)
    }
    const handleChange = (e)=>{
        const {name,value} = e.target;
        
        setUserdata({
            ...userdata,
            [name]: value,
         });
        // setUserdata(userdata => ({ ...userdata, name1:val }));
        // setUserdata({...userdata,name1:val})
    }
  return (
    <>
        <div>FunctionComponent</div>
        <h3>Count is - {count}</h3>
        <h3>Name is - {uname}</h3>
        <h3>Name is - {userdata.name}</h3>
        <h3>Email is - {userdata.email}</h3>
        <h3>Pwd is - {userdata.pwd}</h3>

        <input type='text' name="name" value={userdata.name} onChange={handleChange}/>
        <input type='email' name="email" value={userdata.email} onChange={handleChange}/>
        <input type='password' name="pwd" value={userdata.pwd} onChange={handleChange}/>
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Remove</button>


    </>
  )
}
