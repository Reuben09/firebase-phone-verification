import { useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

export default function PhoneSignUp() {
  const [otp, setOtp] = useState();
  const { userOtp } = useContext(UserContext);
  const { confirmObj }  = useContext(UserContext);
  const navigate = useNavigate();

  const verifyOtp = async (e) => {
    e.preventDefault();
     if(otp === "" || otp === null)  return;
     try{
        await confirmObj.confirm(otp);
        navigate("/protectedroute")
     } catch(err){
        console.log(err.message);
     }
  };

  if(!userOtp){
    return(
        <Navigate to="/phonesignup" replace />
    )
  }
  return (
    <>
      <div className="container">
        <form onSubmit={verifyOtp}>
          <h1>Phone Signup</h1>
          <div className="phone-input-container">
            <input type="text" onChange={(e) => setOtp(e.target.value)} />
          </div>
          <div id="recaptcha-container"></div>
          <div className="button-container">
            <Link to="/phonesignup">
              <button type="button" className="cancelButton">
                Cancel
              </button>
            </Link>
            <button type="submit" className="sendButton">
              verify Otp
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
