import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 30px 40px;
  border-radius: 10px;
  text-align: center;
  width: 500px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 10px;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
`;

export const Title = styled.h2`
  color: #2b6cb0;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  font-weight: 500;
  margin: 15px 0 5px;
  color: #2b6cb0;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid #2b6cb0;
  font-weight: 600;
  font-size: 16px;
  color: #2b6cb0;
  background-color: white;
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 12px 0;
  border: none;
  background-color: #2b6cb0;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #1e4e8c;
  }
`;
