import { createAction } from "@reduxjs/toolkit";


export const tokenSuccess = createAction(
    'TOKEN_SUCCESS', (token) => {
        return{
            payload:token
        }
    }
)

export const tokenError = createAction(
    'TOKEN_ERROR', (error) => {
        return{
            payload:error
        }
    }
)
export const userLogout = createAction(
    'USER_LOGOUT', () => {
        return{
            
        }
    }
)

export const getToken = (email, password) => {
    return async (dispatch) =>{
        
        try{
            const tokenRequest = await fetch("http://localhost:3001/api/v1/user/login" , {
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({email,password})
            })

            if(tokenRequest.ok){
                const response= await tokenRequest.json()
                const token = response.body.token
                await dispatch(tokenSuccess(token))
                
                
            } else{
                const response = await tokenRequest.json()
                const error = response.message
                
                

                if(error === "Error: User not found!"){
                        
                    dispatch(tokenError("Nom d'utilisateur incorrect"))
                        
                        
                }else if(error === "Error: Password is invalid"){
                    dispatch(tokenError("Mot de passe incorrect"))
                }else{
                    console.log(error)
                }        
            }
   
        } catch (error){
            
            console.log(error)
        }
    }

    
}