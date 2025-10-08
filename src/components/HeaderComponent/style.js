import { Row } from "antd";
import styled from "styled-components";
import { Menu } from "antd";

// export const MenuWrapper = styled(Menu) `
//     display: inline-block;
//     margin-left: 40px;
//     background: transparent;
//     border-bottom: none;
//     .ant-menu-item {
//         font-size: 16px;
//         font-weight: 500;
//     }
// `;
export const WrapperHeader = styled(Row) `
    padding: 10px 120px;
    background-color: #fff;
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.15);

`;
export const WrapperMenuLogo = styled.div`
    display: flex;
`;
export const LogoGroup = styled.div`
    width: 30%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
`;


export const Logo = styled.img `
    width: 75px;
    height: 55px;
    left: 0;
    top: 0;
    position: absolute;
    cursor: pointer;
`;

export const LogoText = styled.span`
    font-family: 'Instrument Serif';
    left: 52px;
    top: 30px;
    position: absolute;
    font-size: 12px;
    font-weight: 400;
    color: #4781C3; 
    word-wrap: break-word;
    cursor: pointer;
`;
export const MenuWrapper = styled(Menu)`
    width: 100%;
  border-bottom: none;
  font-weight: 600;

  .ant-menu-item {
    padding: 0 12px;
  }
`;

export const AuthGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

