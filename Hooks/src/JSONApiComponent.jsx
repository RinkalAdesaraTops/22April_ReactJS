import React,{useEffect, useState} from 'react'
import axios from 'axios'

const JSONApiComponent = () => {
    const [data,setData] = useState({
        name:"",
        age:""
    })
    const [userData,setUserData] = useState([])
    const [allUsers,setAllUsers] = useState([])
    // let allUsers = []
    const [id,setId] = useState("")
    useEffect(()=>{
        axios.get('http://localhost:8000/users')
        .then((res)=>{
            setUserData(res.data)
            setAllUsers(res.data)
            
        })
        .catch((err)=> console.log(err))
    },[data])
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/users',data)
        .then((res)=>console.log(res))
        .catch((err)=> console.log(err))
    }
    const delData = (id)=>{
        axios.delete('http://localhost:8000/users/'+id)
        .then((res)=>console.log(res))
        .catch((err)=> console.log(err))
    }
    const editData = (id)=>{
        setId(id)
        axios.patch('http://localhost:8000/users/'+id)
        .then((res)=>setData({
            name:res.data.name,
            age:res.data.age
        }))
        .catch((err)=> console.log(err))
    }
    const updateData = (e)=>{
        e.preventDefault();
        axios.put('http://localhost:8000/users/'+id,data)
        .then((res)=>console.log(res))
        .catch((err)=> console.log(err))
    }
    const searchName = (e)=>{
        console.log(e.target.value);
        if(e.target.value !== ''){
            let data1 = allUsers.filter((i)=>{
                    if(i.name.includes(e.target.value)){
                        return i;
                    }
            })
            setUserData(data1)
        } else {
            setUserData(allUsers)
        }
    }
  return (
    <div>
      <h3>JSON Server Api Example</h3>
      <form onSubmit={id ? updateData : saveData}>
      Name: <input type="text" name="name" id="" value={data.name} onChange={handleChange}/><br /><br />
        Age: <input type="text" name="age" id="" value={data.age} onChange={handleChange}/><br /><br />
        <input type="submit" value="Save Data" />
        </form>
        <br />
        <input type="search" name="search" id="" placeholder='Search by Name' onKeyUp={searchName} />
        <table>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>Action</td>
            </tr>
            {
                userData && userData.map((i)=>{
                    return (
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td><button onClick={()=>editData(i.id)}>Edit</button><button onClick={()=>delData(i.id)}>Delete</button></td>
                        </tr>
                    )
                })
            }
        </table>
    </div>
  )
}

export default JSONApiComponent
