import React, { useState } from "react";
import {
  WrapperCinemaFacility,
  CinemaInfoBox,
  DateList,
  DateItem,
  MovieCard,
  MoviePoster,
  MovieInfo,
  ShowtimeList,
  ShowtimeButton,
} from "./style";
import { EnvironmentOutlined, MailOutlined } from "@ant-design/icons";
import moviePoster from "../../assets/images/slider1.png"; 
import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const CinemaFacilityPage = ({selectedLocation, onOpenLocationModal}) => {
  const [selectedDate, setSelectedDate] = useState(1);

  const dates = [
    { id: 1, day: "1", label: "T2" },
    { id: 2, day: "2", label: "T3" },
    { id: 3, day: "3", label: "T4" },
    { id: 4, day: "4", label: "T5" },
    { id: 5, day: "5", label: "T6" },
    { id: 6, day: "6", label: "T7" },
    { id: 7, day: "7", label: "CN" },
  ];

  const movies = [
    {
      title: "Làm Giàu Với Ma: Cuộc Chiến Hột Xoàn",
      genre: "Hài hước",
      duration: "126 phút",
      tag: "T13",
      image: moviePoster,
      showtimes: ["14:00", "16:00", "18:00", "20:00"],
    },
    {
      title: "Đại Náo Rạp Phim",
      genre: "Hành động",
      duration: "118 phút",
      tag: "T16",
      image: moviePoster,
      showtimes: ["13:30", "15:30", "19:00"],
    },
  ];

  return (
    <WrapperCinemaFacility>
      <CinemaInfoBox>
        <p>
          <EnvironmentOutlined /> Địa chỉ: Tầng 4, Mac Plaza, 10 Trần Phú, Hà Nội
        </p>
        <p>
          CSKH: 19001212 <br />
          <MailOutlined /> Email: cskh@alpha.vn
        </p>
        <Button onClick={onOpenLocationModal}>
          {selectedLocation
            ? `${selectedLocation.city} - ${selectedLocation.cinema}`
            : "CHỌN RẠP KHÁC"}{" "}
          <DownOutlined />
        </Button>
      </CinemaInfoBox>

      <DateList>
        {dates.map((date) => (
          <DateItem
            key={date.id}
            active={selectedDate === date.id}
            onClick={() => setSelectedDate(date.id)}
          >
            <span>{date.day}</span>
            <p>{date.label}</p>
          </DateItem>
        ))}
      </DateList>

      {movies.map((movie, index) => (
        <MovieCard key={index}>
          <MoviePoster src={movie.image} alt={movie.title} />
          <MovieInfo>
            <h3>
              <span className="tag">{movie.tag}</span> {movie.title}
            </h3>
            <p>
              {movie.genre} • {movie.duration}
            </p>
            <h4>2D Phụ đề</h4>
            <ShowtimeList>
              {movie.showtimes.map((time, i) => (
                <ShowtimeButton key={i}>{time}</ShowtimeButton>
              ))}
            </ShowtimeList>
          </MovieInfo>
        </MovieCard>
      ))}
    </WrapperCinemaFacility>
  );
};

export default CinemaFacilityPage;
