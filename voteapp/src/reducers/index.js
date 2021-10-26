import questionReducer from "./questions"; 
import userReducer from "./users"; 
import { combineReducers } from "redux";
import authUserReducer from "./loggedInUser"

const allReducers = combineReducers ({
    questions: questionReducer, 
    users: userReducer,
    loggedInUser: authUserReducer
})

export default allReducers;