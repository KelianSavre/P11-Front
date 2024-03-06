import { useDispatch, useSelector } from "react-redux";
import AccountItem from "../components/AccountItem";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { editUserData } from "../actions/user";

function UserProfile() {
    const token = useSelector((state) => state.token.token);
    
    const userData = useSelector((state)=> state.user.userData)
    
    const firstName = userData.firstName
    const lastName = userData.lastName
    const [GetUserName, setGetUserName] = useState(userData.userName)
    
    const navigate = useNavigate();
    const dispatch = useDispatch()
    
    useEffect(()=>{
      setGetUserName(userData.userName)
    } , [userData.userName])
    
    useEffect(()=>{
      
      if (token === null){
        navigate('/login')
      }
    })
   

    const [editUserName, setEditUserName] = useState(false)
    /* Initialisation en false pour gerer ouverture du formulaire au bouton*/
    
    const editMode = () => {
      setEditUserName(true)
    }
    
    const cancelEdit = () => {
      setEditUserName(false)
    }

    const submitProfile = (event) => {
      event.preventDefault()
      if(GetUserName.length >= 1) {
        dispatch(editUserData(token,GetUserName))
        setEditUserName(false)
      } else {
        alert('Veuillez renseigner un username valide')
      }
    }

    const userNameModification = (event) => {
      setGetUserName(event.target.value)
    }

    return (
      <main className="main bg-dark main-fullscreen">
        <div className="header">
          <h2 className="welcome-message">
            Welcome back
            <br />
            {firstName} {lastName}!
          </h2>
          {editUserName ? (
              <form className="edit-form" onSubmit={submitProfile}>
                <h3>Edit User Profile</h3>
                <div>
                  <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" defaultValue={GetUserName} onChange={userNameModification}/>
                  </div>
                  
                  <div className="input-wrapper">
                    <label htmlFor="firstname">First name</label>
                    <input type="text" id="firstname" defaultValue={firstName} readOnly/>
                  </div>
                  
                  <div className="input-wrapper">
                    <label htmlFor="lastname">Last name</label>
                    <input type="text" id="lastname" defaultValue={lastName} readOnly/>
                  </div>

                </div>
                <div>
                  <button type="submit" className="sign-in-button">Save</button>
                  <button className="sign-in-button" onClick={cancelEdit}>Cancel</button>
                </div>

              </form>
          ):(
            <button className="edit-button" onClick={editMode}>Edit Name</button>
            
          )

          }

        </div>
        <h2 className="sr-only">Accounts</h2>
        <AccountItem
          accountTitle="Argent Bank Checking (x8349)"
          accountAmount="$2,082.79"
          amountDescription="Available Balance"
        />
        <AccountItem
          accountTitle="Argent Bank Savings (x6712)"
          accountAmount="$10,928.42"
          amountDescription="Available Balance"
        />
        <AccountItem
          accountTitle="Argent Bank Credit Card (x8349)"
          accountAmount="$184.30"
          amountDescription="Current Balance"
        />
        {/*Possibilite de mettre en place une methode map si un json est mis en place ou lorsque la Base de Donnees sera fonctionnelle sur ce plan */}
      </main>
    );
  
}
export default UserProfile;
