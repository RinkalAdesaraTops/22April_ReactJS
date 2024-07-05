import { DELETE, INSERT, UPDATE} from "./actions"

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
    
    case DELETE: return {
        ...state,
        data:state.data.filter((i)=>{
            return i.id != action.payload
        })
    } 
    case UPDATE: return {
      ...state,
      data:state.data.map((i)=> {
          return (i.id == action.payload.id)?action.payload.data:i
      })
      // data:state.data.map((i)=> (i.id == action.payload.id)?action.payload.data:i)
          // if(i.id == action.payload.id){
          //   return action.payload.data
          // } else {
          //   return i;
          // }
      // })
    }
    
    default: return state
  }
}

export default UserReducers
