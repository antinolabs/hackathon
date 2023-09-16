import React from "react";
import { Button, Card, Col, Form, Input, Row } from "antd";
import logo from "../assets/logo.svg";
import { countries } from "../utils/countries";

const SignupForm = () => {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    // You can handle form submission here, e.g., send data to a server.
  };

  return (
    <div className="relative sm:-8 p-4 bg-[#333347]  min-h-screen flex flex-row justify-center items-center">
      <Card
        title=""
        style={{
          height: 450,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#333347",
        }}
        bordered={false}
        className="shadow-lg"
      >
        <div className="signInCon">
          <img src={logo} alt="logo" width={90} height={90} />

          <div className="signinText">Register on Well-Fund</div>
          <div className="loginFormCon">
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600, textAlign: "initial" }}
              initialValues={{
                remember: false,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Row gutter={24}>
                <Col span={24}>
                  <Form.Item
                    label="Full Name"
                    name="name"
                    labelAlign="left"
                    style={{color:"#ffff"}}
                    rules={[
                      { required: true, message: "This field is required." },
                      {
                        validator(_, value) {
                          if (/^([A-Z][a-z]*\s)*[A-Z][a-z]*$/.test(value)) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            "Please enter a valid name with the first letter as capital."
                          );
                        },
                      },
                    ]}
                  >
                    <Input placeholder="Enter Your name" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={24}>
                  <Form.Item
                    labelAlign="left"
                    label="Email Address"
                    name="email"
                    rules={[
                      { required: true, message: "This field is required." },
                    ]}
                  >
                    <Input placeholder="Enter Your Email" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={24}>
                  <Form.Item
                    name="mobile_number"
                    label="Mobile Number"
                    labelAlign="left"
                    rules={[
                      {
                        required: true,
                        message: "Contact Number is required.",
                      },
                      {
                        pattern: "^[0-9-+/s]{9,}$",
                        min: 9,
                        max: 9,
                        message: "Please enter a minimum of 9 digits.",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your Phone Number" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={24}>
                  <Form.Item
                    labelAlign="left"
                    label="Create Your Password"
                    name="password"
                    rules={[
                      { required: true, message: "This field is required." },
                    ]}
                  >
                    <Input placeholder="Enter your password" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={24}>
                  <Form.Item
                    wrapperCol={{
                      span: 24,
                    }}
                  >
                    <Button
                      type="primary"
                      style={{
                        width: "100%",
                        backgroundColor: "rgb(39,195,119)",
                      }}
                      htmlType="submit"
                    >
                      Sign In
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignupForm;
