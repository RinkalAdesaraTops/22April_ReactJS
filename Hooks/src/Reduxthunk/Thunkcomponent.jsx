import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchData, getdata } from "./actions"

const Thunkcomponent = () => {
    const dispatch = useDispatch()
    // const {data,isApiCall,error} = useSelector((state)=>state.Apireducers)
    const data = useSelector((state)=> state.data)
    const isApiCall = useSelector((state)=> state.isApiCall)
    const error = useSelector((state)=> state.error)
    useEffect(()=>{
        console.log("thunk component called..");
        dispatch(fetchData())
    },[dispatch])
  return (
    <div>
    <h3>
      {
        isApiCall ? "Api calling...!!!" : ""
      }
    </h3>
    <h4>{ error ? "Error" : ""}</h4>
    <ul>
    {
        data && data.map((i)=>{
            return ( 
                <>
                    <li>{i.title}</li>
                </>
            )
        })
    }
    </ul>
    </div>
  )
}

export default Thunkcomponent
