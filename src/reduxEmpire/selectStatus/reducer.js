import {status } from './type';

const initialState = {
    selectStatus : false,
}


// export const statusReducer = (state = initialState, action) => {
//     if(action.type === status){
//         state['selectStatus'] = !state.selectStatus;
        
//     }
//         return state
// }

export const statusReducer = (state = initialState, action) => {
    if(action.type === status){
        if(state.selectStatus === false){
            return{
                ...state,
                selectStatus : state.selectStatus = true,
            }
        } else if(state.selectStatus === true){
            return{
                ...state,
                selectStatus : state.selectStatus = false,
            }
        }
    } else {
        return state
    }
}



























