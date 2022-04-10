import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { signUp } from "../service/auth";
import { useNavigate } from "react-router-dom";


const Login = () => {
  let navigate = useNavigate();


  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const inputData={
        fullName: values.fullName,
        email: values.email

    }
signUp(inputData).then(resp=>{
    console.log("loginden ",resp.data)
    

})
navigate("/content");
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="fullName"
        rules={[
          {
            required: true,
            message: "Lütfen geçerli bir isim ve soyisim giriniz!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Lütfen geçerli bir E-Mail!",
          },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          type="email"
          placeholder="E-Mail"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Beni hatırla</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Devam Et
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
