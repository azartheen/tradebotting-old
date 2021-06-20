import {updateMe} from "./type";

const initialState = {
    updateCrypto: [],
}

export const updateReducer = (state = initialState, action) => {
    if(action.type === updateMe){
        return{
            ...state,
            updateCrypto: action.data,
        }
    } else{
        return state
    }
}