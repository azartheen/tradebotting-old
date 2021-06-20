import { log } from './type';

const initialState = {
    users: [{
        uid:0,
        name: "admin",
        password: "pass"
    },
    {
        uid:1,
        name: "ibrahim",
        password: "yes"
    }],
    isLoggedIn: false
}

export const loginReducer = (state = initialState, action) => {
    if(action.type === log){
        return{
            ...state,
            isLoggedIn: state.isLoggedIn = true,
        }
    } else{
        return state
    }
}