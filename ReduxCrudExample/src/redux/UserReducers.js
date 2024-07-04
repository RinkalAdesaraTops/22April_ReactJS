import { DELETE, EDIT, INSERT, UPDATE } from "./actions"

const initialState = {
    data:[],
    edituser:{}
}

const UserReducers = (state=initialState,action) => {
  switch(action.type){
    case INSERT: return {
        ...state,
        data:[...state.data,action.payload]
    }
    case UPDATE: return {
      ...state,
      data:state.data.map((i)=>{
        return i.id==action.payload.id ? action.payload.data : i
      })
  }
  
    case DELETE: return {
        ...state,
        data:state.data.filter((i)=>{
            return i.id != action.payload
        })
    } 
    
    default: return state
  }
}

export default UserReducers
