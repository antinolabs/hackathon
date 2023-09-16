import React from "react";
import { Button, Card, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router";
// import logo from "../../assets/logo.svg";

const SigninForm = () => {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Card
        title=""
        style={{
          margin: "100px",
          width: 370,
          height: 450,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        bordered={false}
        className="shadow-lg"
      >
        <div className="signInCon">
          {/* <img src={logo} alt="logo" width={90} height={90} /> */}

          <div className="signinText">Sign In</div>
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
              //   onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="user_id"
                style={{ width: "350px" }}
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                  {
                    pattern: /^[A-Z]{5}-[A-Z]{2}\d{3}$/,
                    message:
                      "Please enter a valid input following the format: MSUSR-GY564",
                  },
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
                  style={{ width: "238px" }}
                  htmlType="submit"
                >
                  Sign In
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Card>
    </>
  );
};

export default SigninForm;
