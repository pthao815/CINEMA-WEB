import React from "react";
import HeaderAuthComponent from "../HeaderAuthComponent/HeaderAuthComponent";
import FooterComponent from "../FooterComponent/FooterComponent";

const AuthLayout = ({ children }) => {
  return (
    <>
      <HeaderAuthComponent />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <FooterComponent />
    </>
  );
};

export default AuthLayout;
