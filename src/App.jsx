import React, { useContext } from "react";
import { Login } from "./Components/Login";
import './App.css'
import Home from "./Components/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Profile } from "./Components/Profile";
import { PageNotFound } from "./Components/PageNotFound";
import { SignUp } from "./Components/SingUp/SignUp";
import { UserContext, UserProvider } from './UserContext';
const App=()=>{
  const {userInfo,updateUserField}=useContext(UserContext);
  return(
  
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          {userInfo.Login ? (
            <>
              <Route exact path='/Home' element={<Home />} />
              <Route path='/Profile' element={<Profile />} />
              <Route path='/Signup' element={<SignUp />} />
            </>
          ) : (
            <Route path='*' element={<PageNotFound />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
