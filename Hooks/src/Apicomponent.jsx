import React,{useState} from 'react'
import axios from 'axios'

const Apicomponent = () => {
    const [data,setData] = useState({
        title:"",
        price:"",
        description:"",
        image:"",
        category:""
    })
    const [userData,setUserData] = useState([])
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = (e)=>{
        e.preventDefault();
        // console.log(data);
        axios.post('https://fakestoreapi.com/products',{data})
        .then((res)=>console.log(res))
        .catch((err)=> console.log(err))
    }
    const dispProduct = ()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            console.log(res)
            setUserData(res.data)
        })
        .catch((err)=> console.log(err))
    }
    const delData = (id)=>{
        axios.delete('https://fakestoreapi.com/products/'+id)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=> console.log(err))
    }
  return (
    <div>
      <h3>Axios Api Example</h3> 
      <form name='frm' onSubmit={saveData} encType='multipart/form-data'>
        Title: <input type="text" name="title" id="" value={data.title} onChange={handleChange}/><br /><br />
        Price: <input type="number" name="price" id="" value={data.price} onChange={handleChange}/><br /><br />
        Image: <input type="file" name="image" id=""  onChange={handleChange}/><br /><br />
        Description: <input type="text" name="description" id="" value={data.description} onChange={handleChange}/><br /><br />
        Category: <input type="text" name="category" id="" value={data.category} onChange={handleChange}/><br /><br />
        <input type="submit" value="Save Data" />
        {/* title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic' */}
      </form>

      <button onClick={dispProduct}>All Products</button>
      <table>
        <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Image</td>
            <td>Description</td>
            <td>Price</td>
            <td>Category</td>
            <td>Action</td>
        </tr>
        {
            userData && userData.map((i)=>{
                return (
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.title}</td>
                        <td><img src={i.image} height={'50px'} width={'50px'}/></td>
                        <td>{i.description}</td>
                        <td>{i.price}</td>
                        <td>{i.category}</td>
                        <td><button onClick={()=>delData(i.id)}>Delete</button></td>
                    </tr>
                )
            })
        }
      </table>
    </div>
  )
}

export default Apicomponent
