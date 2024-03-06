import { createReducer } from "@reduxjs/toolkit"
import { DataRequestError, DataRequestSuccess, userNameIsUpdated, userisLoggingOut,  } from "../actions/user"

const initialStateUser = {
    userData:{},
    userDataLoaded:false,
    error:null
}

export const userReducer = createReducer(initialStateUser , (user) =>{

    return user
    .addCase(DataRequestSuccess, (state, action)=>{
        return{
            ...state,
            userData:action.payload,
            userDataLoaded:true,
            error:null
        }
    })
    .addCase(DataRequestError, (state, action)=>{
        return{
            ...state,
            userData:{},
            userDataLoaded:false,
            error:action.payload,
        }
    })
    .addCase(userisLoggingOut,() =>{
        return initialStateUser
    })
    .addCase(userNameIsUpdated, (state,action)=>{
        return{
            ...state,
            userData:{
                ...state.userData,
                userName : action.payload
            }
        }
    })
})
