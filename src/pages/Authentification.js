import { useState, useEffect } from "react";
import { getToken } from "../actions/token";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../actions/user";

function Authentification() {
  const token = useSelector((state) => state.token.token);
  

  const error = useSelector((state)=> state.token.error)
  const [rememberMe, setRememberMe] = useState(false);

  const checkRememberMe = () => {
    setRememberMe(!rememberMe)
  }

  const [formSubmitted, setFormSubmitted] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function submitAndRemember(event){
    event.preventDefault()
    setFormSubmitted(true)
   
    rememberMe ? localStorage.setItem("email", email) : localStorage.removeItem("email")
    
    await dispatch(getToken(email,password))
    
  }

  const [email, setEmail] = useState(localStorage.getItem("email"))
  const [password, setPassword]= useState("")
  useEffect(()=>{
    if (token !== null){
      dispatch(getUserData(token)) 
      navigate('/user')
    }
  })

  return (
    <main className="main bg-dark main-fullscreen">
      <div className="form-padding">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h2>Sign In</h2>
          <form onSubmit={submitAndRemember}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" defaultValue={email} onChange={(event)=>{setEmail(event.target.value)}}/>
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" defaultValue={password} onChange={(event)=>{setPassword(event.target.value)}}/>
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                onChange={checkRememberMe}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">Sign In</button>
            {error !== null && <p className="error-text">{error}</p>}
          </form>
        </section>
      </div>
    </main>
  );
}

export default Authentification;
