import React, { useState } from 'react'

const CrudLocalStorage = () => {
    let data1 = JSON.parse(localStorage.getItem("Userinfo"))
    const [userData,setUserData] = useState([])
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })
    const handleChange = (e)=>{

     const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = ()=>{
        setUserData(prevData =>[
            ...prevData,
            data
        ])
        const updatedData = [...userData,data]
        localStorage.setItem("Userinfo",JSON.stringify(updatedData))
        setUserData(updatedData)
        setData({
            name:"",
            email:"",
            password:""
        })
        
    }
   
  return (
    <>
    <div>
      <h3>User Information</h3>
      Name:<input type='text' name='name' value={data.name} onChange={handleChange}/>
      Email:<input type='email' name='email' value={data.email} onChange={handleChange}/>
      Password:<input type='password' name='password' value={data.password} onChange={handleChange} />
      <button onClick={saveData}>Save Data</button>
      
        <table border={'2'}>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Action</td>
            </tr>
            {
                userData && userData.map((i,index)=>{
                    return (
                    <tr>
                        <td>{index+1}</td>
                        <td>{i.name}</td>
                        <td>{i.email}</td>
                        <td>Delete</td>
                    </tr>
                    )
                })
            }
        </table>
      
    </div>
    </>
  )
}

export default CrudLocalStorage
