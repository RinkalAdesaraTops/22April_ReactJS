import { DELETE, INSERT } from "./actions"

const initialState = {
    data:[]
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

    default: return state
  }
}

export default UserReducers
