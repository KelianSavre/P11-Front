import { createAction } from "@reduxjs/toolkit"


export const DataRequestSuccess = createAction(
    "DATA_REQUEST_SUCCESS",(userData)=>{
        return{
            payload:userData
        }
    }
)
export const DataRequestError = createAction(
    "DATA_REQUEST_ERROR",(error)=>{
        return{
            payload:error
        }
    }
)
// Possible de retirer cette action n'a pas servie au final aurait pu etre utile si besoin de retourner erreur chargement


export const userisLoggingOut = createAction(
    "USER_IS_LOGGING_OUT",()=>{
        return{
            
        }
    }
)

export const userNameIsUpdated = createAction(
    "USERNAME_IS_UPDATED",(userName)=>{
        return{
            payload:userName
        }
    }
)

export const getUserData = (token) => {
    return async (dispatch) =>{
        try{
            const userDataRequest = await fetch("http://localhost:3001/api/v1/user/profile" , {
                method:"POST",
                headers: {
                    "Content-Type":"application/json",
                    'Authorization':`Bearer ${token}`
                }   
            })

            if(userDataRequest.ok){
                const response= await userDataRequest.json()
                
                dispatch(DataRequestSuccess(response.body))
                
            }

        } 
        catch (error){ 
            console.log(error)
        }
    }
}

export const editUserData = (token, userName) =>{
    return async (dispatch)=>{
        try{
            const editUserName = await fetch("http://localhost:3001/api/v1/user/profile" , {
                method:"PUT",
                headers: {
                    "Content-Type":"application/json",
                    'Authorization':`Bearer ${token}`
                },
                body: JSON.stringify({userName})   
            })
            if(editUserName.ok){
                const response = await editUserName.json()
                const newUserName = response.body.userName
                console.log(newUserName)
                dispatch(userNameIsUpdated(newUserName))
                
            }
        }
        catch (error){
            console.log(error)
        }
    }
}