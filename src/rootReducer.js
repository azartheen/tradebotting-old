import { combineReducers } from "redux";
import {statusReducer} from "./reduxEmpire/selectStatus/reducer";
import { updateReducer } from "./reduxEmpire/updatingCoins/reducer";
import { historyReducer } from "./reduxEmpire/dailyHistoryData/reducer";
import { selectReducer } from "./reduxEmpire/usersChoice/reducer";
import { loginReducer } from "./reduxEmpire/usersLogin/reducer";


export const rootedReducer = combineReducers({
   statusReducer: statusReducer,
   updateReducer: updateReducer,
   historyReducer:historyReducer,
   selectReducer : selectReducer,
   loginReducer:loginReducer
})