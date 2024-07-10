import { FAILURE, GETDATA, SUCCESS } from "./actions"

const initialState = {
    data:null,
    isApiCall:false,
    error:null
}
const Apireducers = (state=initialState,action) => {
  switch(action.type){
    case GETDATA: return {
        ...state,
        isApiCall:true,
        error:null
    }
    case SUCCESS: return {
        ...state,
        data:action.payload,
        isApiCall:false,
        error:null
    }
    case FAILURE: return {
        ...state,
        isApiCall:false,
        error:null
    }
    default: return state;

  }
}   

export default Apireducers
