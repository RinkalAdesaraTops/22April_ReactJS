import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from './firebase'

const FirebaseCRUD = () => {
  const [data,setData] = useState({
    name:"",
    age:"",
    salary:"",
    id:"",
    uid:""
  })
  const [userdata,setUserData] = useState([])
  const handleChange = (e)=>{
    const {name,value} = e.target
    setData({
      ...data,
      [name]:value
    })
  }
  const saveData = async(e)=>{
    e.preventDefault();
    await addDoc(collection(db,"UserMgtSystem"),data)
    console.log('inserted successfully');
  }
  const deleteData = async(id)=>{
    await deleteDoc(doc(db,"UserMgtSystem",id))
    console.log('deleted successfully');
  }
  
  const editData = async(id)=>{
    const userInfo = doc(db, "UserMgtSystem", id) // db = getFirestore()
   
    // Fetch document
    const docSnap = await getDoc(userInfo)
    if(docSnap.exists()){
      let data1 = docSnap.data();
      setData({
        name:data1.name,
        age:data1.age,
        salary:data1.salary,
        id:id,
        uid:id
      })
    }
    
  }
  const updateData = async(e)=>{
    e.preventDefault();
    console.log(data.uid);
    await updateDoc(doc(db,"UserMgtSystem",data.uid),data)
    console.log("updated successfully");
  }
  
  useEffect(()=>{
    const qr = query(collection(db,"UserMgtSystem"))
    const myFunc = onSnapshot(qr,(Qsnapshot)=>{
      let myData = []
      Qsnapshot.forEach((i)=>{
        myData.push({ ...i.data(), id: i.id });
      })
      setUserData(myData)

    })
    return ()=>myFunc()
  },[])
  return (
    <div>
      <h3>CRUD Example</h3>
      <form method='post' action='#' onSubmit={data.uid!= '' ? updateData :saveData}>
        <label>Name:</label>
        <input type="text" name="name" value={data.name} onChange={handleChange} />
        <br /><br />
        
        <label>Age:</label>
        <input type="number" name="age" value={data.age} onChange={handleChange} />
        <br /><br />
        
        <label>Salary:</label>
        <input type="number" name="salary" value={data.salary} onChange={handleChange} />
        <br /><br />
        <input type="submit" value={data.uid != "" ?"Update Data": "Save Data"} />
      </form>
      <table border={"2"}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
        {
          userdata.map((i)=>{
            return (
                <>
                  <tr>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.age}</td>
                    <td>{i.salary}</td>
                    <td>
                        <button onClick={()=>editData(i.id)}>Edit</button>
                          <button onClick={()=>deleteData(i.id)}>Delete</button>
                    </td>
                  </tr>
                </>
              )
          })
        }
      </table>
    </div>
  )
}

export default FirebaseCRUD
