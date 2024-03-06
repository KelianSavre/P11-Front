import { combineReducers } from "redux";
import { tokenReducer } from "./tokenreducer";
import { userReducer } from "./userReducer";

export default combineReducers({


    token: tokenReducer,
    user: userReducer

    
})