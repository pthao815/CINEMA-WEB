import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #3b82c4;
  color: #fff;
  padding: 50px 120px;

  .footer-top {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 30px;

  }

  .footer-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 200px;
    word-wrap: break-word;
    padding: 0 15px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  p {
    font-size: 15px;
    margin: 6px 0;
  }

  .social {
    display: flex;
    gap: 15px;
    margin-top: 8px;
  }

  .social a {
    color: white;
    font-size: 22px;
    transition: 0.3s;
  }

  .social a:hover {
    color: #DE7565;
  }

  hr {
    border: none;
    border-top: 1px solid #ffffff55;
    margin: 30px 0;
  }

  .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 20px;
  }

  .footer-logo img {
    width: 60px;
    height: auto;
  }

  .footer-info {
    line-height: 1.5;
  }

  .copyright {
    margin-left: auto;
    font-size: 14px;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 30px 40px;

    .footer-top {
      flex-direction: column;
      gap: 25px;
    }

    .footer-bottom {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .copyright {
      margin-left: 0;
    }
  }
`;
