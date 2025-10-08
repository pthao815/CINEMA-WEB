import React from 'react'
import { Col, Button } from 'antd'
import { Logo, LogoGroup, LogoText, WrapperHeader, MenuWrapper, AuthGroup, WrapperMenuLogo  } from './style'
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
const HeaderComponent = ({selectedLocation, onOpenLocationModal}) => {

  const menuItems = [
      {
        key: "home",
        label: (
          <Link to="/" style={{ color: "#D8867B", textDecoration: "none" }}>
            TRANG CHỦ
          </Link>
        ),
      },
      {
        key: "movies",
        label: (
          <Link to="/movie-info" style={{ textDecoration: "none" }}>
            PHIM
          </Link>
        ),
      },
      {
        key: "cinema",
        label: (
          <Link to="/cinema-facility" style={{ textDecoration: "none" }}>
            RẠP
          </Link>
        ),
      },
      {
        key: "food",
        label: (
          <Link to="/food" style={{ textDecoration: "none" }}>
            ĐỒ ĂN & NƯỚC UỐNG
          </Link>
        ),
      },
      {
        key: "news",
        label: (
          <Link to="/news" style={{ textDecoration: "none" }}>
            TIN TỨC & KHUYẾN MÃI
          </Link>
        ),
      },
    ];
    // const locationItems = [
    //   { key: "hn", label: "Hà Nội" },
    //   { key: "hcm", label: "Hồ Chí Minh" },
    //   { key: "dn", label: "Đà Nẵng" },
    // ];

    return (
      <WrapperHeader>
        <Col span={16}>
          <WrapperMenuLogo>
            <LogoGroup>
              <Logo src={logo} alt="Logo" />
              <LogoText>CINEMA</LogoText>
            </LogoGroup>
          
            <MenuWrapper mode="horizontal" selectable={false} items={menuItems} />

          </WrapperMenuLogo>
          
        </Col>
        <Col span={4} style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={onOpenLocationModal}>
            {selectedLocation
              ? `${selectedLocation.city} - ${selectedLocation.cinema}`
              : "CHỌN VỊ TRÍ"}{" "}
            <DownOutlined />
          </Button>
        </Col>
        <Col span={4}>
          <AuthGroup>
            <Button type="link" icon={<UserOutlined />}>
              <Link to="/auth">Đăng nhập/Đăng ký</Link>
            </Button>
          </AuthGroup>
        </Col>
      </WrapperHeader>
        
      
    )
}


export default HeaderComponent