import React, { useState, useEffect } from "react";
import { Form, Input, Button, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { loginEndpoint } from "../common/path";
import { methodPost } from "../common/configApi";
import Router from "next/router";
import Loader from "../libraries/loader";
import Link from "../src/Link";

export default function Login() {
  const [isLoading, setLoading] = useState(false);
  const [isLogin, setLogin] = useState(true);
  const [messageError, setMessageError] = useState("");

  const login = async (values) => {
    const request = {
      email: values.email,
      password: values.password,
    };
    setLoading(true);
    methodPost(loginEndpoint, request)
      .then((res) => {
        const data = res.data;
        if (data) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          setLogin(true);
        }
      })
      .catch((error) => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setLogin(false);
        if (error.response.data == "Unable to login") {
          setMessageError("Username or password is wrong!");
        } else {
          setMessageError("Something was Wrong!");
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setTimeout(() => setMessageError(""), 6000);
  });

  return (
    <div className="login-container">
      <Form onFinish={login} className="login-form">
        <h2>Login</h2>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your Email!" },
            { type: "email", message: "Email does not valid" },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your Password!" },
            { min: 4, message: "Minimum Password is 4" },
            { max: 8, message: "Max Password is 8" },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {Boolean(messageError.length > 0) ? (
          <Form.Item>
            <Alert message={messageError} type="error" showIcon />
          </Form.Item>
        ) : (
          ""
        )}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/about" color="secondary" style={{ marginTop: 10 }}>
              Sign Up
            </Link>
          </div>
        </Form.Item>
      </Form>
      <Loader isShow={isLoading} />
    </div>
  );
}
