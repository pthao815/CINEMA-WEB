import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  Title,
  Label,
  Select,
  ConfirmButton,
  CloseButton, 
} from "./style";


const LocationModal = ({ onConfirm, onClose}) => {
    const [city, setCity] = useState("");
    const [cinema, setCinema] = useState("");

    const handleConfirm = () => {
        if (city && cinema) {
            onConfirm(city, cinema);
        } else {
            alert("Vui lòng chọn đầy đủ thông tin!");
        }
    };


  const cities = ["Hà Nội", "TP. Hồ Chí Minh", "Đà Nẵng"];
  const cinemas = {
    "Hà Nội": ["Alpha Mỹ Đình", "Alpha Long Biên"],
    "TP. Hồ Chí Minh": ["Alpha Quận 7", "Alpha Gò Vấp"],
    "Đà Nẵng": ["Alpha Đà Nẵng Center"],
  };

  
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>Chào mừng quý khách đến với Alpha Cinema!</Title>
        <p>Vui lòng chọn thành phố và rạp chiếu để xem lịch chiếu phim</p>

        <Label>Tỉnh/Thành phố</Label>
        <Select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Vui lòng chọn</option>
          {cities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </Select>

        <Label>Rạp</Label>
        <Select
          value={cinema}
          onChange={(e) => setCinema(e.target.value)}
          disabled={!city}
        >
          <option value="">Vui lòng chọn</option>
          {city &&
            cinemas[city].map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
        </Select>

        <ConfirmButton onClick={handleConfirm}>Xác nhận</ConfirmButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default LocationModal;
