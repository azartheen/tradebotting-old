import {updateMe} from "./type";

export const updatingMe = (update) => {
    return{
        type:updateMe,
        data: update
    }
}