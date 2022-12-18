import { useState, useContext } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

export default function PhoneSignUp() {
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  const { setUserOtp } = useContext(UserContext);
  const { setConfirmObj}  = useContext(UserContext);

  function setUpRecaptcha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }
  const getOtp = async (e) => {
    e.preventDefault();
    if (number === "" || number === undefined) {
      return alert("please input a valid phone number");
    }
    try {
      const response = await setUpRecaptcha(number);
      console.log(response);
      setNumber("");
      setConfirmObj(response);
      setUserOtp(true);
      navigate("/verifyOtp");
    } catch (err) {
      console.log(err.message);
    }
    console.log(number);
  };


  return (
    <>
      <div className="container">
        <form onSubmit={getOtp}>
          <h1>Phone Signup</h1>
          <div className="phone-input-container">
            <input type="text" onChange={(e) => setNumber(e.target.value)} />
          </div>
          <div id="recaptcha-container"></div>
          <div className="button-container">
            <Link to="/">
              <button type="button" className="cancelButton">
                Cancel
              </button>
            </Link>
            <button type="submit" className="sendButton">
              Send Otp
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
