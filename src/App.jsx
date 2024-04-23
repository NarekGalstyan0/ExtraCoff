import React from "react";
import MainApp from "./MainApp";
import { Routes, Route } from "react-router-dom";
import Bag from "./components/Bag/Bag";
import SignIn from "./Login/Signin";
import SignUp from "./Login/SignUp";
import WrongPath from "./WrongPath";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/user">
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
        </Route>

        <Route path="/" element={<MainApp />}/>
          
        <Route path="/bag" element={<Bag />} />
        <Route path="*" element={<WrongPath />} />
      </Routes>
    </div>
  );
};

export default App;