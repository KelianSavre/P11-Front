import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/argentBankLogo.webp"
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../actions/token";
import { userisLoggingOut } from "../actions/user";

function Header() {
  
  const token = useSelector((state) => state.token.token);
  const userName = useSelector((state)=> state.user.userData.userName)
  
  
  const navigate = useNavigate()  
  const dispatch = useDispatch()

  const logout = () => {
    
    dispatch(userLogout())
    dispatch(userisLoggingOut())
    
    navigate("/")
  }
  
  
  


  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {token ? (
          <div className="user-connected">
            <div>
              <Link className="main-nav-item" to ="/user">
                <i className="fa fa-user-circle"></i>
                <p>{userName}</p>
              </Link>
            </div>
            <div>
              <Link className="main-nav-item" to ="/" onClick={logout}>
                <i className="fa-solid fa-power-off"></i>
                <p>Sign out</p>
              </Link>
            </div>
          </div>

        ) : (

          
          <div>
            <Link className="main-nav-item" to ="/login">
              <i className="fa fa-user-circle"></i>
              <p>Sign In</p>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header