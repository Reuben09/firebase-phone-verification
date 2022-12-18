import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import PhoneSignUp from "./pages/PhoneSignUp";
import VerifyOtp from './pages/VerifyOtp';
import ProtectedRoute from './pages/ProtectedRoute';
import "./App.css";

export const UserContext = React.createContext();

export default function App() {
  const [userOtp, setUserOtp] = useState(false);
  const [confirmObj, setConfirmObj] = useState("");
  return (
    <>
    <UserContext.Provider value={{userOtp: userOtp, setUserOtp, confirmObj, setConfirmObj}}>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="phonesignup" element={<PhoneSignUp />}></Route>
        <Route path="verifyotp" element={<VerifyOtp />}></Route>
        <Route path="protectedroute" element={<ProtectedRoute />}></Route>
      </Routes>
    </UserContext.Provider>
    </>
  );
}
