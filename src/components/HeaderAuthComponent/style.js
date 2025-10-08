import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeaderAuth = styled(Row)`
  padding: 10px 120px;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: none;
  align-items: center;
`;

export const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Logo = styled.img`
  width: 75px;
  height: 55px;
  cursor: pointer;
`;

export const LogoText = styled.span`
  font-family: 'Instrument Serif';
  font-size: 12px;
  font-weight: 400;
  color: #4781C3;
  margin-left: 4px;
  position: relative;
  top: 10px;
  cursor: pointer;
`;

export const AuthNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 28px;

  a {
    color: #4781C3;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: underline;
    }
  }
`;
