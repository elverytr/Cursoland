import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "../views/App";
import { Login } from "../views/Login";
import { Manual } from "../views/Manual";
import { Register } from "../views/Register";

export const Router = () => {

  const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("loggedUser")) ? true : false)

  const isLogged = () => {
    return loggedUser
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Cursoland" element={isLogged() ? <App setLoggedUser={setLoggedUser}/> : <Login setLoggedUser={setLoggedUser}/>} />
        <Route path="/Cursoland/register" element={isLogged() ? <App setLoggedUser={setLoggedUser}/> : <Register setLoggedUser={setLoggedUser}/>} />
        <Route path="/Cursoland/login" element={ isLogged() ? <App setLoggedUser={setLoggedUser}/> : <Login setLoggedUser={setLoggedUser}/>} />
        <Route path="/Cursoland/manual" element={<Manual />} />
        <Route path="*" element={isLogged() ? <App setLoggedUser={setLoggedUser}/> : <Login setLoggedUser={setLoggedUser}/>}/>
      </Routes>
    </BrowserRouter>
  );
};
