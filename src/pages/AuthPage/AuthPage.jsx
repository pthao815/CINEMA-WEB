import React from "react";
import { Row, Col, Form, Input, Button, Radio, DatePicker, Select, Checkbox } from "antd";
import { WrapperAuthPage, AuthBox } from "./style";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [loginForm] = Form.useForm();
  const [registerForm] = Form.useForm();

  const onLogin = (values) => {
    console.log("Login:", values);
  };

  const onRegister = (values) => {
    console.log("Register:", values);
  };

  return (
    <WrapperAuthPage>
      <Row gutter={32} justify="center">
        {/* Đăng nhập */}
        <Col xs={24} md={8}>
          <AuthBox>
            <h2>Đăng nhập tài khoản</h2>
            <Form form={loginForm} layout="vertical" onFinish={onLogin}>
              <Form.Item name="email" label="Email" rules={[{ required: true, message: "Nhập email!" }]}>
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item name="password" label="Mật khẩu" rules={[{ required: true, message: "Nhập mật khẩu!" }]}>
                <Input.Password placeholder="Mật khẩu" />
              </Form.Item>
              <div style={{ textAlign: "right", marginBottom: 16 }}>
                <Link to="/forgot-password">Quên mật khẩu?</Link>
              </div>
              <Button type="primary" htmlType="submit" block>
                ĐĂNG NHẬP
              </Button>
            </Form>
          </AuthBox>
        </Col>

        {/* Đăng ký */}
        <Col xs={24} md={10}>
          <AuthBox>
            <h2>Đăng ký tài khoản</h2>
            <Form form={registerForm} layout="vertical" onFinish={onRegister}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="lastName" label="Họ" rules={[{ required: true }]}>
                    <Input placeholder="Họ" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="firstName" label="Tên" rules={[{ required: true }]}>
                    <Input placeholder="Tên" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item name="gender" label="Giới tính" rules={[{ required: true }]}>
                <Radio.Group>
                  <Radio value="male">Nam</Radio>
                  <Radio value="female">Nữ</Radio>
                  <Radio value="other">Khác</Radio>
                </Radio.Group>
              </Form.Item>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                    <Input placeholder="Email" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="phone" label="Số điện thoại" rules={[{ required: true }]}>
                    <Input placeholder="Số điện thoại" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="password" label="Mật khẩu" rules={[{ required: true }]}>
                    <Input.Password placeholder="Mật khẩu" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="confirmPassword" label="Nhập lại mật khẩu" rules={[{ required: true }]}>
                    <Input.Password placeholder="Nhập lại mật khẩu" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="birthdate" label="Ngày sinh" rules={[{ required: true }]}>
                    <DatePicker style={{ width: "100%" }} format="DD/MM/YYYY" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="city" label="Tỉnh/Thành phố" rules={[{ required: true }]}>
                    <Select placeholder="Chọn tỉnh/thành">
                      <Select.Option value="hn">Hà Nội</Select.Option>
                      <Select.Option value="hcm">Hồ Chí Minh</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item name="agreement" valuePropName="checked">
                <Checkbox>Tôi đã đọc và đồng ý với các điều khoản</Checkbox>
              </Form.Item>
              <Form.Item name="promotion" valuePropName="checked">
                <Checkbox>Nhận thông tin chương trình khuyến mãi</Checkbox>
              </Form.Item>

              <Button type="primary" htmlType="submit" block>
                ĐĂNG KÝ
              </Button>
            </Form>
          </AuthBox>
        </Col>
      </Row>
    </WrapperAuthPage>
  );
};

export default AuthPage;
