import styled from "styled-components";

export const WrapperMovieDetail = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    color: #333;
  }
`;

export const WrapperPoster = styled.img`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;

export const WrapperTrailerSection = styled.div`
  margin-top: 60px;
  text-align: center;

  h2 {
    color: #1677ff;
    margin-bottom: 20px;
  }

  iframe {
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export const WrapperDateSelector = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  margin-bottom: 24px;
  overflow-x: auto;
  padding-bottom: 6px;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const WrapperDayItem = styled.div`
  min-width: 60px;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  border: ${(props) => (props.active ? "2px solid #1677ff" : "1px solid #ccc")};
  background-color: ${(props) => (props.active ? "#e6f7ff" : "#fff")};
  padding: 8px 10px;
  transition: 0.25s;
  box-shadow: ${(props) =>
    props.active ? "0 0 8px rgba(22,119,255,0.3)" : "none"};

  &:hover {
    border-color: #1677ff;
    background-color: #f0f8ff;
  }

  .date {
    font-size: 18px;
    font-weight: bold;
  }

  .day {
    font-size: 13px;
    color: #666;
  }
`;

export const WrapperShowtimeSection = styled.div`
  margin-bottom: 60px;

  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin-bottom: 16px;
  }
`;

export const WrapperShowtimeButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  .time-btn {
    background: #f5f5f5;
    border-radius: 6px;
    padding: 10px 20px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background: #1677ff;
      color: #fff;
      transform: scale(1.05);
    }
  }
`;
