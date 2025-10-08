import styled from "styled-components";

export const WrapperAuthPage = styled.div`
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
`;

export const AuthBox = styled.div`
  background: #fff;
  border: 1px solid #e5eaf0;
  border-radius: 6px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 24px;
    text-align: center;
  }

  form {
    .ant-form-item-label {
      font-weight: 500;
    }
  }
  button {
    background-color: #4781C3;
    border: none;
    font-weight: 700;
    color-text: #fff;
  }
  button:hover {
    background-color: #589ae5ff !important;
  } 
`;
