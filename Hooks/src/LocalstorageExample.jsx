import React,{useState} from 'react'

const LocalstorageExample = () => {
    const [name,setName] = useState("")
    const [userData,setUserData] = useState([])
    const [data,setData] = useState({
        name:"",
        age:""
    })
    const handleChange = (e)=>{
        const {name,value} = e.target

        setData({
            ...data,
            [name]:value
        })
        // console.log(data);
        
    }
    const saveData = ()=>{
        //JSON.stringify()
        //JSON.parse()
        // localStorage.setItem("name",name)
        // console.log(data);
        // userData.push(data)
        // setUserData(prevData => [ // note that this is a square bracket (array), instead of a curly bracket (object)
        //     ...prevData, // why not using the prev value
        //     { data } // shorthand of { option: option }
        // ]);
        //to get prev data 
        setUserData(prevData => [
            ...prevData,
            data
        ]);
        //latest added data newobject with name&age
        const updatedUserData = [...userData, data];
        localStorage.setItem("userData", JSON.stringify(updatedUserData));
        // setUserData((prevData)=> (
        //     [
        //         ...prevData,
        //         data
        //     ]
        // ))

        // console.log("Userdata is -- ");
        console.log(updatedUserData);
        
    }
    const deleteData = ()=>{
        //JSON.stringify()
        //JSON.parse()
        localStorage.removeItem("name")
    }
    const getData = ()=>{
        //JSON.stringify()
        //JSON.parse()
        console.log(localStorage.getItem("name"))
    }
  return (
    <div>
      <input type="text" name="name" id="name" value={data.name} onChange={handleChange}/>
      <input type="text" name="age" id="age" value={data.age} onChange={handleChange}/><br /><br />
      <input type="button" value="Save Data" onClick={saveData}/>
      <input type="button" value="Delete Data" onClick={deleteData}/>
      <input type="button" value="Get Data" onClick={getData}/>

    </div>
  )
}

export default LocalstorageExample
