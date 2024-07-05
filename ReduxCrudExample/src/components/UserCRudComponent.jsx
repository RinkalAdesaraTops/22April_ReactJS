import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  insert,deleteData, update } from '../redux/actions';

const UserCRudComponent = () => {

    const data = useSelector((state)=>state.data)
    const dispatch = useDispatch();
    const [userData,setUserData] = useState({
        id:"",
        name:"",
        age:""
    })
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUserData({
            ...userData,
            [name]:value
        })
    }
    const saveData = (e)=>{
        e.preventDefault();
        let len = data.length
        userData.id = len+1;
        dispatch(insert(userData))
        setUserData({
          id:'',
          name:'',
          age:''
        })
    }
    const editData = (data)=>{
      setUserData(data)
    }
    const updateData = (e)=>{
      e.preventDefault();
      dispatch(update(userData.id,userData))
      setUserData({
          id:'',
          name:'',
          age:''
      })
    }
  return (
    <div>
      <h3>User CRUD Example</h3>
      <form action='#' method='post' onSubmit={userData.id !='' ?updateData :saveData}>
        Name: 
        <input type="text" name="name" id="" value={userData.name} onChange={handleChange}/>
        Age: 
        <input type="number" name="age" id="" value={userData.age} onChange={handleChange}/>
        <input type="submit" value={ userData.id != ''?"Update Data":"Save Data"}/>
      </form>
      <table>
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age</td>
        </tr>
        {
            data && data.map((i)=>{
                return (
                    <>
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td><button onClick={()=>editData(i)}>Edit</button>
                        </td>
                        <td><button onClick={()=>dispatch(deleteData(i.id))}>Delete</button></td>

                    </tr>
                    </>
                )
            })
        }
      </table>
    </div>
  )
}

export default UserCRudComponent
