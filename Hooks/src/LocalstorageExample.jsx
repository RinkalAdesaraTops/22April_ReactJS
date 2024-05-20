import React,{useState} from 'react'

const LocalstorageExample = () => {
    const [id,setId] = useState("")
    const [userData,setUserData] = useState([])
    const [data,setData] = useState({
        name:"",
        age:"",
    })
    // let allData = JSON.parse(localStorage.getItem("userData"))
    const handleChange = (e)=>{
        const {name,value} = e.target

        setData({
            ...data,
            [name]:value
        })        
    }
    const saveData = ()=>{
        setUserData(prevData => [
            ...prevData,
            data
        ]);
        //latest added data newobject with name&age
        const updatedUserData = [...userData, data];
        localStorage.setItem("userData", JSON.stringify(updatedUserData));
        setUserData(updatedUserData)
        setData({
            name:"",
            age:""
        })
        
    }
    const deleteData = (id)=>{
        let allData = JSON.parse(localStorage.getItem("userData"))
        let data1 = allData.filter((i,index)=>{
                return index!=id
        })
        localStorage.setItem("userData",JSON.stringify(data1))
        setUserData(data1)
        
    }
    const editData = (id)=>{
        let allData = JSON.parse(localStorage.getItem("userData"))
        let data1 = allData.filter((i,index)=>{
                return index==id
        })     
        setData(data1[0])
        setId(id)
    }
    const updateData=()=>{
        let allData = JSON.parse(localStorage.getItem("userData"))
        let data1 = allData.map((i,index)=>{
            if(index == id){
                i.name = data.name
                i.age = data.age
            }
            return i;
        })
        localStorage.setItem("userData",JSON.stringify(data1))
        setUserData(data1)
        setData({
            name:"",
            age:""
        })
        setId("")
    }
    
  return (
    <div>
      Name : <input type="text" name="name" id="name" value={data.name} onChange={handleChange}/><br /><br />
      Age : <input type="text" name="age" id="age" value={data.age} onChange={handleChange}/><br /><br />
      <input type="button" value={id ? "Update Data": "Save Data"} onClick={id ? updateData : saveData}/> 
      {/* <input type="button" value="Delete Data" /> */}
      {/* <input type="button" value="Get Data" onClick={getData}/>   */}

    <h3>All User List</h3>
    <table>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Action</td>
        </tr>
        {
           userData && userData.map((i,index)=>{
                return (
                    <tr>
                        <td>{index+1}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td><button onClick={()=>editData(index)}>Edit</button><button onClick={()=>deleteData(index)}>Delete</button></td>
                    </tr>
                )
           }) 
        }
    </table>
    </div>
  )
}

export default LocalstorageExample
