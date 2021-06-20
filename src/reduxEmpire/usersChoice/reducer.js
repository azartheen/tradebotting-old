import { selectInterval, selectCurrency } from "./type";

const initialState = {
    selectedInterval: '',
    selectedCurrency:''
}

export const selectReducer = (state = initialState, action) => {
    if(action.type === selectInterval){
        return{
            ...state,
            selectedInterval : action.data
        }
    } else if(action.type === selectCurrency){
        return{
            ...state,
            selectedCurrency : action.data
        }
    } else {
        return state
    }
}