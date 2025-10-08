import React from "react";

import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import logo from "../../assets/logo.png"; 
import { FooterWrapper } from "./style";

const FooterComponent = () => {
  return (
    <FooterWrapper>
      <div className="footer-top">
        <div className="footer-section">
          <h3>Về Cinema</h3>
          <p>Hệ thống rạp</p>
          <p>Liên hệ</p>
        </div>

        <div className="footer-section">
          <h3>Quy định & điều khoản</h3>
          <p>Quy định thành viên</p>
          <p>Hướng dẫn đặt vé trực tuyến</p>
          <p>Chính sách bảo vệ thông tin khách hàng</p>
        </div>

        <div className="footer-section">
          <h3>Chăm sóc khách hàng</h3>
          <p>Hotline: 19001212</p>
          <p>Giờ làm việc: Tất cả các ngày trong tuần (bao gồm Lễ, Tết)</p>
          <p>Email hỗ trợ: cskh@cinema.vn</p>
          <h3>Mạng xã hội</h3>
          <div className="social">
            <a href="#"><FacebookFilled /></a>
            <a href="#"><InstagramFilled /></a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-info">
          <p><strong>CÔNG TY TNHH CINEMA VIỆT NAM</strong></p>
          <p>Địa chỉ: Tầng 3, Mac Plaza</p>
          <p>Hotline: 19001212</p>
        </div>
        <p className="copyright">© 2025 Cinema Việt Nam</p>
      </div>
    </FooterWrapper>
  );
};

export default FooterComponent;


