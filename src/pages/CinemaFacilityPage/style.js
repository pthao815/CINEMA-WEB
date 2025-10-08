import styled from "styled-components";

export const WrapperCinemaFacility = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
`;

export const CinemaInfoBox = styled.div`
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 8px;
  background: #f9fbff;
  color: #333;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 30px;
`;

export const DateList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

export const DateItem = styled.div`
  width: 80px;
  height: 80px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid ${({ active }) => (active ? "#4781C3" : "#ddd")};
  color: ${({ active }) => (active ? "#4781C3" : "#555")};
  background: ${({ active }) => (active ? "#eaf3ff" : "#fff")};
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    font-weight: 600;
    font-size: 20px;
  }
  p {
    margin: 0;
    font-size: 14px;
  }
`;

export const MovieCard = styled.div`
  display: flex;
  margin-bottom: 40px;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
`;

export const MoviePoster = styled.img`
  width: 200px;
  border-radius: 8px;
  margin-right: 24px;
`;

export const MovieInfo = styled.div`
  flex: 1;
  h3 {
    font-size: 20px;
    font-weight: 700;
    color: #4781C3;
    margin-bottom: 10px;
    .tag {
      background: #DE7565;
      color: #fff;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 13px;
      margin-right: 8px;
    }
  }
  p {
    font-size: 15px;
    color: #555;
    margin-bottom: 12px;
  }
  h4 {
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

export const ShowtimeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ShowtimeButton = styled.button`
  background: #fff;
  border: 1px solid #ccc;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #4781C3;
    color: #fff;
    border-color: #4781C3;
  }
`;
