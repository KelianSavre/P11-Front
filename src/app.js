import React from "react";
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Authentification from "./pages/Authentification";
import UserProfile from "./pages/UserProfile";
import Footer from "./components/Footer";
import "./layouts/main.css"

function App (){
    
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" Component={Homepage}/>
                <Route path="/login" Component={Authentification}/>
                <Route path="/user" Component={UserProfile}/>
            </Routes>

            <Footer/>
        </>
    )
}

export default App