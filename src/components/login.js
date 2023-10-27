import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./login.css";

const client_ID =
  "577521091147-nq2q7uijm1a65oacifkrb1uivqlbigqf.apps.googleusercontent.com";
export const Login = () => {
  const [credential, setCredential] = useState("");

  const redirectComparsion = () => {
    navigate("/preview");
  };

  const handleLoginSuccess = (credentialResponse) => {
    setCredential(credentialResponse.credential);
    try {
      let decoded = jwt_decode(credentialResponse?.credential);
      const email = decoded?.email;
      const name = decoded?.name;
      const token = decoded?.jti;
      const googleId = decoded?.googleId;
      const picture = decoded?.picture;
      const result = { email, name, token, googleId, picture };
      window.localStorage.setItem("userData", JSON.stringify(result));
      setCredential(result);
    } catch (error) {
      console.error("JWT verification failed:", error);
    }
    console.log("Login successfully");
    redirectComparsion();
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="row">
          <div class="form">
            <img
              style={{ marginTop: "-30%" }}
              src="http://www.androidpolice.com/wp-content/themes/ap2/ap_resize/ap_resize.php?src=http%3A%2F%2Fwww.androidpolice.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fnexus2cee_Search-Thumb-150x150.png&w=150&h=150&zc=3"
            />
            <h5 style={{ color: "#002D62" }}> Login with Google</h5>
            <div style={{ paddingTop: "20%", marginBottom: "-20%" }}>
              <GoogleOAuthProvider clientId={client_ID}>
                <GoogleLogin
                  clientId={client_ID}
                  onSuccess={handleLoginSuccess}
                  onError={handleLoginError}
                  isSignedIn={false}
                  // Other props as needed
                  useOneTap
                />
              </GoogleOAuthProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
