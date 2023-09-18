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
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: false,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="email"
                style={{ width: "350px", borderRadius: "12px" }}
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                  // {
                  //   pattern: /^[A-Z]{5}-[A-Z]{2}\d{3}$/,
                  //   message:
                  //     "Please enter a valid input following the format: MSUSR-GY564",
                  // },
                ]}
              >
                <Input
                  placeholder="Email Id"
                  allowClear
                  style={{ borderRadius: "5px" }}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  style={{ borderRadius: "5px" }}
                />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button
                  type="primary"
                  style={{ width: "238px", backgroundColor: "rgb(39,195,119)" }}
                  htmlType="submit"
                >
                  Sign In
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div
          className="flex justify-center items-center text-white cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          Don't have a Account?. Create one.
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;




