import {historyData} from "./type";

const initialState = {
    historicDailyData : [],
}

export const historyReducer = (state = initialState, action) => {
    if(action.type === historyData){
        return{
            ...state,
            historicDailyData: action.data,
        }
    } else{
        return state
    }
}