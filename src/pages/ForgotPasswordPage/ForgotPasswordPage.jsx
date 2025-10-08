import React from "react";
import { Form, Input, Button, Typography } from "antd";
import { WrapperForgotPage } from "./style";

const { Title, Text } = Typography;

const ForgotPasswordPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Reset password for:", values.email);
  };

  return (
    <WrapperForgotPage>
      <div className="form-container">
        <Title level={3}>Quên mật khẩu</Title>
        <Text>
          Vui lòng nhập tên đăng nhập hoặc địa chỉ email. Bạn sẽ nhận được một liên kết tạo mật khẩu mới qua email.
        </Text>

        <Form form={form} layout="vertical" onFinish={onFinish} style={{ marginTop: 24, maxWidth: 400 }}>
          <Form.Item
            label="Email*"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input placeholder="Nhập email của bạn" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            ĐẶT LẠI MẬT KHẨU
          </Button>
        </Form>
      </div>
    </WrapperForgotPage>
  );
};

export default ForgotPasswordPage;
