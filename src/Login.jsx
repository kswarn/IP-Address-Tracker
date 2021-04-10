import React, { useEffect, useState } from "react";
import Sawo from "sawo";
import Home from "./Home";
import styles from "./styles";

function Login({ setuserID }) {
  // state values
  const [userPayload, setUserPayload] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const onSuccessLogin = async (payload) => {
      setUserPayload(payload);
      setuserID(payload.user_id);
      setIsLoggedIn(true);
    };
    // Sawo Configuration, required to render form in the container
    // onSuccess callback will get invoke, after successful login

    const sawoConfig = {
      // should be same as the id of the container
      containerID: "sawo-container",
      // can be one of 'email' or 'phone_number_sms'
      identifierType: "phone_number_sms",
      // Add the API key
      apiKey: "7f092baf-9f04-4d06-be7a-825e716e1e48",
      // Add a callback here to handle the payload sent by sdk
      onSuccess: onSuccessLogin,
    };

    // creating instance
    let sawo = new Sawo(sawoConfig);

    // calling method to show form
    sawo.showForm();
  }, []);

  // Sawo:
  // OnSuccess Callback method

  return (
    <React.Fragment>
      <div style={styles.containerStyle}>
        <section>
          {/* Showing Successful login message */}
          {isLoggedIn && (
            <React.Fragment>
              <div style={styles.loggedin}>
                <h2>User Successful login</h2>
                <div>UserId: {userPayload.user_id}</div>
                <div>Verification Token: {userPayload.verification_token}</div>
              </div>
              {(window.location.href = "http://localhost:3000/home")}
            </React.Fragment>
          )}

          {/* Showing login form */}
          {!isLoggedIn && (
            <div style={styles.formContainer} id="sawo-container">
              {/* Sawo form will appear here */}
            </div>
          )}
        </section>
      </div>
    </React.Fragment>
  );
}

export default Login;
