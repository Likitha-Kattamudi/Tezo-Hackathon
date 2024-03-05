import { useNavigate, useParams } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { LoginD } from "./components/LoginD";
import { useMsal } from "@azure/msal-react";

function App() {
  const navigate = useNavigate();
  const { instance, accounts } = useMsal();

  let activeAccount;

  if (instance) {
    activeAccount = instance.getActiveAccount();
  }
  console.log("active", accounts);

  // const [userData, setUserData] = useState();

  const data = JSON.parse(localStorage.getItem("userDataL"));
  const [logOutScreen, setLogoutScreen] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLogoutScreen(data ? false : true);
  }, []);
  console.log(logOutScreen);
  return (
    <div>
      <div className="App">
        {id ? (
          <button id="backBtn" onClick={() => navigate(-1)}>
            Back
          </button>
        ) : (
          <button id="backBtn"></button>
        )}
        <div className="header">
          <h4>Something </h4>
        </div>
        <div className="loginapp">
          {data ? (
            <LoginD />
          ) : (
            <button onClick={() => navigate("/")} id="loginoutBtn">
              Login
            </button>
          )}
        </div>
      </div>

      {!data ? (
        <div className="beforPopup">
          <h5>Sign In</h5>
          <LoginD />
        </div>
      ) : (
        !id && (
          <div className="beforPopup">
            <h2>Welcome to Tezo Hackathon</h2>
            <h5
              id="signInn"
              onClick={() => {
                navigate("/Home/:Home");
              }}
            >
              Go to Home Page
            </h5>
          </div>
        )
      )}
    </div>
  );
}

export default App;
