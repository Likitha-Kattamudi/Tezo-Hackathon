import React, { useState } from "react";
import "../styles/Login.css";
import MicrosoftLogin from "react-microsoft-login";

const Login = (props) => {
  const [msalInstance, onMsalInstanceChange] = useState();
  const authHandler = (err, data, msal) => {
    if (!err && data) {
      onMsalInstanceChange(msal);
      props.setUserData(data);
      localStorage.setItem("userDataL", JSON.stringify(data));
      props.setIsLoggedIn(true);
    }
  };

  return (
    <div className="loginDiv">
      <div className="mLogin">
        {!props.userData ? (
          <MicrosoftLogin
            clientId="b0f120e7-f483-4561-afcc-19ae1e1d0542"
            authCallback={authHandler}
          />
        ) : (
          <button
            onClick={() => {
              msalInstance.logout();
              localStorage.removeItem("userDataL");
            }}
          >
            logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
