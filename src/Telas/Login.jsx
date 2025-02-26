import React from "react";
import "../css/login-style.css";
import DrConnect from "../images/logo-card-login.svg";
import Doc from "../images/doctor-home.png";
import { useDispatch } from "react-redux";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axiosInstance from "../axios";
import { useNavigate } from "react-router-dom";
import { borderRadius } from "@mui/system";

const Login = (props) => {
  const [form, setForm] = React.useState({ email: "", senha: "" });
  const [willLogin, setwillLogin] = React.useState(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const [role, setrole] = React.useState("ROLE_DOCTOR");

  function onChangeValue(event) {
    setrole(event.target.value);
    console.log(event.target.value);
  }

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => await responseGoogle(tokenResponse),
  });

  const responseGoogle = async (response) => {
    console.log(response);
    const tokenId = response.credential;
    const res = await axiosInstance.post("/auth/loginWithGoogle", {
      tokenId,
      userRoles: role,
    });
    const data = await res.data;
    const token = data.token;
    localStorage.setItem("token", token);
    //const res2 = await axiosInstance.post("/messages/register", { fcmToken: props.token })
    dispatch({ type: "LOGIN" });
    dispatch({ type: "ROLE", role });
    if (!!data.alreadySigned) {
      navigate("/home");
    } else {
      navigate("/edit-profile");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const signIn = async () => {
    const res = await axiosInstance.post("/auth/signIn", form);
    const data = await res.data;
    const token = data.token;
    localStorage.setItem("token", token);
    dispatch({ type: "LOGIN" });

    navigate("/choice");
  };

  return (
    <div id="LoginStyle">
      <div className="main-login">
        <div>
          <div className="card-login">
            <div className="title-a">
              <a>Bem Vindo(a) ao</a>
            </div>
            <div className="title">
              <img src={DrConnect} className="title-image" />
            </div>
            <div >
            <img alt="Doutora sorrindo" src={Doc} style={{textAlign: "center", width: "250px", height: "250px"}} />
          </div>
            <div className="choice" onChange={onChangeValue}>
              <input
                type="radio"
                value="1"
                name="userRoles"
                checked={role === "1"}
              />{" "}
              Doctor
              <input
                type="radio"
                value="0"
                name="userRoles"
                checked={role === "0"}
              />{" "}
              Patient
            </div>
            
            {willLogin ? <GoogleLogin 
              className="google-button"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            /> : <button style={{
              width: "300px", padding: "15px 10px", border: "none", backgroundColor: "#66bbbb", color: "white",
              borderRadius: "5px 5px", fontWeight: "bold"
            }
              
              } onClick={() => setwillLogin(true)}>Entre com Google</button>}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
