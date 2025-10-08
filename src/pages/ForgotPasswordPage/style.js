import styled from "styled-components";

export const WrapperForgotPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 70vh;
  justify-content: center;
  background: #fff;

  .form-container {
    text-align: center;
    max-width: 500px;
    width: 100%;
    margin-top: 40px;

    h3 {
      font-weight: 600;
      margin-bottom: 8px;
    }

    p, span {
      color: #444;
      font-size: 15px;
    }
  }

  button {
    margin-top: 16px;
    font-weight: 500;
  }
`;
