import React from "react";
import { Col } from "antd";
import { WrapperHeaderAuth, LogoGroup, Logo, LogoText, AuthNav } from "./style";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const HeaderAuth = () => {
  return (
    <WrapperHeaderAuth>
      <Col span={12}>
        <LogoGroup>
          <Logo src={logo} alt="Alpha Cinema" />
          <LogoText>CINEMA</LogoText>
        </LogoGroup>
      </Col>
      <Col span={12} style={{ display: "flex", justifyContent: "flex-end" }}>
        <AuthNav>
          <Link to="/rules">QUY ĐỊNH</Link>
          <Link to="/faq">FAQ</Link>
        </AuthNav>
      </Col>
    </WrapperHeaderAuth>
  );
};

export default HeaderAuth;
