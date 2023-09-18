import React from "react";
import {Card, Tabs} from "antd";
import './loginForm.css'
import logo from "../assets/logo.svg";



import UserSigninForm, { AdminSigninForm } from "../components/SigninForm";



const LoginForm = ({setLogin}) => {
  const items = [
    {
      key: '1',
      label: 'Sign in as a User',
      children: <UserSigninForm setLogin = {setLogin} />,
    },
    {
      key: '2',
      label: 'Sign in as Admin ',
      children: <AdminSigninForm setLogin={setLogin} />,
    },
  
  ];

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="relative sm:-8 p-4 bg-[#333347]  min-h-screen flex flex-row justify-center">
      <Card
        title=""
        style={{
          width: 370,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#333347",
        }}
        bordered={false}
        className=""
      >
        <div className="signInCon">
          <img src={logo} alt="logo" width={90} height={90} />

          <div className="signinText text-white">Sign In</div>
          <div className="loginFormCon">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

          </div>
        </div>
    
      </Card>
    </div>
  );
};

export default LoginForm;




