import React, {useContext} from 'react'
import { UserContext } from "../App";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
    const { confirmObj } = useContext(UserContext);
    if(confirmObj === ""){
        return(
            <Navigate to="/phonesignup" replace />
        )
      }
  return (
    <div>
        Well done, you are able to view this only because your number has been verified.
    </div>
  )
}

export default ProtectedRoute