import styles from "./Login.module.css";
import background from "./background.jpg";
import Multicursor from "../../Components/Multicursor/Multicursor";

import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

import axiosClient from "../../middleware/axios";

const Login = () => {
  const navigate = useNavigate();
  const clientID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const handleRes = (res) => {
    const data = jwtDecode(res.credential);
    axiosClient
      .post("/register", data)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.name);
          localStorage.setItem("email", res.data.email);
          navigate('/home')
        }
      })
      .then((error) => console.log(error));
  };
  return (
    <div className={styles.loginPage}>
      <img alt="background" className={styles.background} src={background} />
      <div className={styles.center}>
        <Multicursor />
        <div className={styles.GoogleAuth}>
          <GoogleOAuthProvider clientId={clientID}>
            <GoogleLogin
              onSuccess={(credentialResponse) => handleRes(credentialResponse)}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            ;
          </GoogleOAuthProvider>
          ;
        </div>
      </div>
    </div>
  );
};

export default Login;
