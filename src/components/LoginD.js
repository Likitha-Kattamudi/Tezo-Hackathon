import {
  AuthenticatedTemplate,
  MsalProvider,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import {
  // InteractionStatus,
  PublicClientApplication,
} from "@azure/msal-browser";
import { msalConfig } from "../authConfig";
import { useNavigate } from "react-router-dom";
import "../App.css";

const pca = new PublicClientApplication(msalConfig);

function LogInLogOutComp() {
  const navigate = useNavigate();
  const { instance } = useMsal();

  const handleLoginPopup = () => {
    instance
      .loginPopup({
        redirectUri: "/",
      })
      .catch((error) => console.log(error))
      .then((res) => {
        localStorage.setItem("userDataL", JSON.stringify(res));
        navigate("/");
      });
  };

  const handleLogoutPopup = () => {
    instance.logoutPopup({
      mainWindowRedirectUri: "/", // redirects the top level app after logout
    });
    localStorage.removeItem("userDataL");
  };

  return (
    <>
      <AuthenticatedTemplate>
        <button id="loginoutBtn" onClick={handleLogoutPopup}>
          Logout
        </button>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <button onClick={handleLoginPopup}>Login with Microsoft</button>
      </UnauthenticatedTemplate>
    </>
  );
}

export const LoginD = () => {
  return (
    <>
      <MsalProvider instance={pca}>
        <LogInLogOutComp />
      </MsalProvider>
    </>
  );
};
