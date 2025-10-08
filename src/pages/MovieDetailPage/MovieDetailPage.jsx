// import React from "react";
// import { useParams } from "react-router-dom";
// import { Row, Col, Tag } from "antd";
// import {WrapperMovieDetail, WrapperPoster} from './style'

// const movies = [
//   {
//     id: 1,
//     title: "LÀM GIÀU VỚI MA: CUỘC CHIẾN HỐT XOÀN",
//     director: "Trung Lùn",
//     actors: "NSUT Hoài Linh, Tuấn Trịa, Diệp Bảo Ngọc, Võ Tấn Phát, Ngọc Xuân",
//     genre: "Hài hước, Hành động",
//     duration: "126 phút",
//     language: "Tiếng Việt",
//     releaseDate: "29/08/2025",
//     description:
//       "Hành trình bá đạo hài hước của 5 con người với những toan tính khác nhau nhằm đua thi tìm mảnh tinh Anh Thư (Ngọc Xuân) về quê nhà, để lại hồn ma của nửa sự trả cho hột xoàn mang trong giá trị 9 tỷ. Ai sẽ là người giành được phần thưởng, hay chuyến đi sẽ bộc lộ phần xấu xa nhất bên trong họ?",
//     image:
//       "https://cdn.galaxycine.vn/media/2025/8/20/lam-giau-voi-ma-cuoc-chien-hot-xoan_1724142191443.jpg",
//     trailer: "https://www.youtube.com/embed/3xu6g3G5V4Q",
//   },
//   {
//     id: 2,
//     title: "SHIN CẬU BÉ BÚT CHÌ: KHỦNG LONG CÔNG VIÊN KỲ LÂN",
//     director: "Masakazu Hashimoto",
//     actors: "Shinnosuke, Hiroshi, Misae",
//     genre: "Hoạt hình, Hài hước",
//     duration: "105 phút",
//     language: "Tiếng Nhật (Phụ đề Việt)",
//     releaseDate: "22/08/2025",
//     description:
//       "Shin và gia đình tham gia chuyến phiêu lưu đến công viên khủng long huyền thoại, nơi ẩn chứa bí mật động trời!",
//     image:
//       "https://cdn.galaxycine.vn/media/2025/8/22/shin-cau-be-but-chi_1724309186194.jpg",
//     trailer: "https://www.youtube.com/embed/6xC_EC5vH0w",
//   },
// ];

// const MovieDetailPage = () => {
//   const { id } = useParams();
//   const movie = movies.find((m) => m.id === parseInt(id));

//   if (!movie) {
//     return <div style={{ textAlign: "center", padding: "50px" }}>Không tìm thấy phim!</div>;
//   }

//   return (
//     <div className="movie-detail">
//       <Row gutter={[32, 32]}>
//         <Col xs={24} md={8}>
//           <img src={movie.image} alt={movie.title} className="movie-poster" />
//         </Col>
//         <Col xs={24} md={16}>
//           <h1>{movie.title}</h1>
//           <p>{movie.description}</p>
//           <p><b>ĐẠO DIỄN:</b> {movie.director}</p>
//           <p><b>DIỄN VIÊN:</b> {movie.actors}</p>
//           <p><b>THỂ LOẠI:</b> {movie.genre}</p>
//           <p><b>THỜI LƯỢNG:</b> {movie.duration}</p>
//           <p><b>NGÔN NGỮ:</b> {movie.language}</p>
//           <p><b>KHỞI CHIẾU:</b> {movie.releaseDate}</p>
//           <div>
//             <Tag color="red">2D</Tag>
//             <Tag color="blue">Phụ đề</Tag>
//           </div>
//         </Col>
//       </Row>

//       <div className="trailer-section">
//         <h2>TRAILER</h2>
//         <iframe
//           width="100%"
//           height="480"
//           src={movie.trailer}
//           title={movie.title}
//           frameBorder="0"
//           allowFullScreen
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default MovieDetailPage;



import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Tag } from "antd";
import {
  WrapperMovieDetail,
  WrapperPoster,
  WrapperTrailerSection,
  WrapperDateSelector,
  WrapperDayItem,
  WrapperShowtimeSection,
  WrapperShowtimeButton,
} from "./style";

const movies = [
  {
    id: 1,
    title: "LÀM GIÀU VỚI MA: CUỘC CHIẾN HỐT XOÀN",
    director: "Trung Lùn",
    actors: "NSUT Hoài Linh, Tuấn Trịa, Diệp Bảo Ngọc, Võ Tấn Phát, Ngọc Xuân",
    genre: "Hài hước, Hành động",
    duration: "126 phút",
    language: "Tiếng Việt",
    releaseDate: "29/08/2025",
    description:
      "Hành trình bá đạo hài hước của 5 con người với những toan tính khác nhau nhằm đua thi tìm mảnh tinh Anh Thư (Ngọc Xuân) về quê nhà, để lại hồn ma của nửa sự trả cho hột xoàn mang trong giá trị 9 tỷ. Ai sẽ là người giành được phần thưởng, hay chuyến đi sẽ bộc lộ phần xấu xa nhất bên trong họ?",
    image:
      "",
    trailer: "https://www.youtube.com",
  },
  {
    id: 2,
    title: "SHIN CẬU BÉ BÚT CHÌ: KHỦNG LONG CÔNG VIÊN KỲ LÂN",
    director: "Masakazu Hashimoto",
    actors: "Shinnosuke, Hiroshi, Misae",
    genre: "Hoạt hình, Hài hước",
    duration: "105 phút",
    language: "Tiếng Nhật (Phụ đề Việt)",
    releaseDate: "22/08/2025",
    description:
      "Shin và gia đình tham gia chuyến phiêu lưu đến công viên khủng long huyền thoại, nơi ẩn chứa bí mật động trời!",
    image:
      "",
    trailer: "https://www.youtube.com",
  },
];


const days = [
  { date: "1/9", label: "T2" },
  { date: "2/9", label: "T3" },
  { date: "3/9", label: "T4" },
  { date: "4/9", label: "T5" },
  { date: "5/9", label: "T6" },
  { date: "6/9", label: "T7" },
  { date: "7/9", label: "CN" },
];
const showtimes = ["14:00", "16:30", "19:00", "21:30"];

const MovieDetailPage = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  // state lưu ngày đang chọn
  const [selectedDate, setSelectedDate] = useState(days[0].date);

  if (!movie) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        Không tìm thấy phim!
      </div>
    );
  }

  return (
    <WrapperMovieDetail>
      <Row gutter={[32, 32]}>
        <Col xs={24} md={8}>
          <WrapperPoster src={movie.image} alt={movie.title} />
        </Col>
        <Col xs={24} md={16}>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <p>
            <b>ĐẠO DIỄN:</b> {movie.director}
          </p>
          <p>
            <b>DIỄN VIÊN:</b> {movie.actors}
          </p>
          <p>
            <b>THỂ LOẠI:</b> {movie.genre}
          </p>
          <p>
            <b>THỜI LƯỢNG:</b> {movie.duration}
          </p>
          <p>
            <b>NGÔN NGỮ:</b> {movie.language}
          </p>
          <p>
            <b>KHỞI CHIẾU:</b> {movie.releaseDate}
          </p>
          <div>
            <Tag color="red">2D</Tag>
            <Tag color="blue">Phụ đề</Tag>
          </div>
        </Col>
      </Row>

      
      <div style={{ marginTop: "40px" }}>
        <h2>LỊCH CHIẾU</h2>

        <WrapperDateSelector>
          {days.map((d) => (
            <WrapperDayItem
              key={d.date}
              active={selectedDate === d.date}
              onClick={() => setSelectedDate(d.date)}
            >
              <div className="date">{d.date}</div>
              <div className="day">{d.label}</div>
            </WrapperDayItem>
          ))}
        </WrapperDateSelector>

        <WrapperShowtimeSection>
          <h3>2D PHỤ ĐỀ</h3>
          <WrapperShowtimeButton>
            {showtimes.map((time) => (
              <div className="time-btn" key={time}>
                {time}
              </div>
            ))}
          </WrapperShowtimeButton>
        </WrapperShowtimeSection>
      </div>

      
      <WrapperTrailerSection>
        <h2>TRAILER</h2>
        <iframe
          width="100%"
          height="480"
          src={movie.trailer}
          title={movie.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </WrapperTrailerSection>
    </WrapperMovieDetail>
  );
};

export default MovieDetailPage;
