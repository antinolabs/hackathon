import React from "react";
import { Button, Card, Checkbox, Form, Input, message, Tabs } from "antd";
import { useNavigate } from "react-router";
import logo from "../assets/logo.svg";
import donate from "../assets/donate.gif";
import { useLogin } from "../apis/AuthApi";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const UserSigninForm = ({ setLogin }) => {
  const login = useLogin();
  const navigate = useNavigate();
  const onFinish = (values) => {
    values = {
      ...values,
      userType: "user",
    };

    login.mutate(values, {
      onSuccess: (data) => {
        if (!data?.data?.error) {
          Cookies.set("token", `${data?.data?.data?.token}`);
          message.success(data?.data?.message)
          console.log("data?.data?.message",data?.data?.message)
          setLogin(true);
        }else{
          message.error(data?.data?.message)
        }
      },

      onError: (error) => {
        const errorConfig = {
          key: "loginError",
          content: error.response.data.message,
        };
        console.log(error.response.data.message);
        // message.error(errorConfig)
      },
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="h-[30vh]">
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
      <div
        className="flex justify-center items-center text-white cursor-pointer"
        onClick={() => navigate("/signup")}
      >
        Don't have a Account?. Create one.
      </div>
    </div>
  );
};

export default UserSigninForm;

export const AdminSigninForm = ({ setLogin }) => {
  const login = useLogin();
  const onFinish = (values) => {
    values = {
      ...values,
      userType: "admin",
    };
    login.mutate(values, {
      onSuccess: (data) => {
        if (!data?.data?.error) {
          Cookies.set("token", `${data?.data?.data?.token}`);
          message.success(data?.data?.message)
          console.log("data?.data?.message",data?.data?.message)
          setLogin(true);
        }else{
          message.error(data?.data?.message)
        }
      },

      onError: (error) => {
        const errorConfig = {
          key: "loginError",
          content: error.response.data.message,
        };
        console.log(error.response.data.message);
        // message.error(errorConfig)
      },
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
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
  );
};
