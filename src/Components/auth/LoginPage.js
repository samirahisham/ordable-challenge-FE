import { Button, Card, Col, Input, Row } from "antd";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { login } from "../../redux/actions";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
const LoginPage = (props) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login(user));
  };

  return (
    <Row justify="center" align="center" style={{ marginTop: "5%" }}>
      <Col xl={12} xxl={12} md={12} sm={20} xs={20}>
        <Card title="Login">
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <Input
                placeholder="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </Col>

            <Col span={24}>
              <Input.Password
                placeholder="password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </Col>
            <Col span={24}>
              <Button type="primary" onClick={handleLogin}>
                Login
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginPage;
