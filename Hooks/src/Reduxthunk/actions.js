import axios from "axios";
export const GETDATA = 'GETDATA';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const getdata = ()=>{
    console.log('action called');
    return { 
        type:GETDATA
    }
}

export const success = (data)=>{
    return { 
        type:SUCCESS,
        payload:data
    }
}

export const failure = (error)=>{
    return { 
        type:FAILURE,
        payload:error

    }
}

export const fetchData = ()=>{
    return async(dispatch,getState)=>{
        console.log("get data api call");

        dispatch(getdata())

        try{
            const res = await axios.get("https://fakestoreapi.com/products")
            console.log("fetch data api call");
            dispatch(success(res.data))
        } 
        catch(error){
            console.log(error);
            dispatch(failure(error))
        }

    }
}