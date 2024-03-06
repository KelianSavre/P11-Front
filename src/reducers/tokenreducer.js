import { createReducer } from "@reduxjs/toolkit";

import { tokenSuccess, tokenError, userLogout } from "../actions/token";

const initialState = {
    token:null,
    error:null,
    userIsLoggedIn:false
}

export const tokenReducer = createReducer(initialState, (test) => {
    return test
        .addCase(tokenSuccess, (state, action)=>{
            return {
                ...state, 
                token:action.payload,
                userIsLoggedIn:true,
                error:null
            } 
            
        })
        .addCase(tokenError, (state, action)=>{
            return {
                ...state, 
                error: action.payload,
                userIsLoggedIn:false,
                token:null
            } 
        })
        .addCase(userLogout,()=>{
            return initialState
        })
})