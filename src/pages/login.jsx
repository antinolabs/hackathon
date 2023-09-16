import React from "react";
import { Button, Card, Checkbox, Form, Input , message, theme} from "antd";
import { useNavigate } from "react-router";
import logo from "../assets/logo.svg";
import donate from "../assets/donate.gif";
import { useLogin } from "../apis/AuthApi";
import Cookies from "js-cookie";

const LoginForm = ({setLogin}) => {
  const login = useLogin()
  const navigate = useNavigate()
  const { useToken } = theme


  const onFinish = (values) => {
    console.log(">>>>>>>>>",values)
    login.mutate(values, {
      onSuccess: (data) => {
        Cookies.set("token", `${data.data.data.accessToken}`)
        console.log("success")
      setLogin(true)
      },

      onError: (error) => {
        const errorConfig = {
          key: "loginError",
          content: error.response.data.message,
        }
        console.log(error.response.data.message)
        // message.error(errorConfig)
      },
    })
  }
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
                style={{ width: "350px" }}
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
                <Input placeholder="User ID" allowClear />
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
                <Input.Password placeholder="Password" />
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
      <div className="flex justify-center items-center text-white cursor-pointer" onClick={()=>navigate("/signup")}>
          Don't have a Account?. Create one.
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;
