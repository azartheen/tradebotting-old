import {historyData} from "./type";

export const gettingHistoryData = (data) => {
    return{
        type:historyData,
        data: data
    }
}