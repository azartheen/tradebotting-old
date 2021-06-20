import { selectInterval, selectCurrency } from "./type";

export const gettingInterval = (interval) => {
    return{
        type:selectInterval,
        data: interval
    }
} 

export const gettingCurrency = (currency) => {
    return{
        type:selectCurrency,
        data: currency
    }
}