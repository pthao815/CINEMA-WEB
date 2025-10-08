import styled from "styled-components";

export const WrapperMovieList = styled.div`
  margin: 40px 100px;

  .ant-tabs-nav {
    margin-bottom: 30px;
  }

  .ant-tabs-tab {
    font-size: 24px;
    font-weight: 800;
    word-wrap: break-word;
  }

  .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #4781C3 !important;
  }

  .ant-tabs-ink-bar {
    background-color: #4781C3;
  }
`;

export const WrapperMovieCard = styled.div`
  text-align: center;

  img {
    width: 100%;
    height: 360px;
    object-fit: cover;
    border-radius: 6px;
  }

  h3 {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 600;
  }

  p {
    margin: 2px 0;
    font-size: 14px;
  }

  .tags {
    margin-bottom: 10px;
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
