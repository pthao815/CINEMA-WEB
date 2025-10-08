import React, { useState } from "react";
import { Tabs, Card, Tag, Button, Row, Col } from "antd";
import { WrapperMovieList, WrapperMovieCard } from "./style";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;

const MovieListComponent = () => {

  const [activeKey, setActiveKey] = useState("1");
  const navigate = useNavigate();

  const movies = {
    upcoming: [
      {
        id: 1,
        title: "LÀM GIÀU VỚI MA: CUỘC CHIẾN HỘT XOÀN",
        type: "Hài hước",
        duration: "126 phút",
        rating: "T13",
        tags: ["Phụ đề", "2D"],
        image:
          "",
      },
    ],
    showing: [
      {
        id: 2,
        title: "SHIN CẬU BÉ BÚT CHÌ",
        type: "Hài hước",
        duration: "105 phút",
        rating: "P",
        tags: ["Phụ đề", "2D"],
        image:
          "",
      },
      {
        id: 3,
        title: "LÀM GIÀU VỚI MA: CUỘC CHIẾN HỘT XOÀN",
        type: "Hài hước",
        duration: "126 phút",
        rating: "T13",
        tags: ["Phụ đề", "2D"],
        image:
          "",
      },
    ],
    special: [
      {
        id: 4,
        title: "BTS: THE WINGS TOUR – THE FINAL",
        type: "Ca nhạc",
        duration: "120 phút",
        rating: "P",
        tags: ["4K", "Special"],
        image:
          "",
      },
    ],
  };

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  }

  
  const renderMovies = (list) =>
    list.map((movie) => (
      <Col xs={24} sm={12} md={8} lg={6} key={movie.id}>
        <WrapperMovieCard>
          <Card
            hoverable
            cover={<img alt={movie.title} src={movie.image} />}
            bordered={false}
            onClick={() => handleMovieClick(movie.id)} 
            style={{ cursor: "pointer" }}
          >
            <h3>{movie.title}</h3>
            <p>
              Thể loại: <b>{movie.type}</b>
            </p>
            <p>
              Thời lượng: <b>{movie.duration}</b>
            </p>
            <div className="tags">
              <Tag color="red">{movie.rating}</Tag>
              {movie.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            {/* <Button
              type="primary"
              block
              onClick={(e) => {
                e.stopPropagation(); 
                handleMovieClick(movie.id);
              }}
            >
              MUA VÉ
            </Button> */}
          </Card>
        </WrapperMovieCard>
      </Col>
    ));


  return (
    <WrapperMovieList>
      <Tabs
        defaultActiveKey="1"
        activeKey={activeKey}
        onChange={(key) => setActiveKey(key)}
        centered
      >
        <TabPane tab="PHIM SẮP CHIẾU" key="1">
          <Row gutter={[24, 24]}>
            {movies.upcoming.map((movie) => (
              <Col xs={24} sm={12} md={8} lg={6} key={movie.id}>
                <WrapperMovieCard>
                  <Card
                    hoverable
                    cover={<img alt={movie.title} src={movie.image} />}
                    bordered={false}
                    onClick={() => handleMovieClick(movie.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3>{movie.title}</h3>
                    <p>
                      Thể loại: <b>{movie.type}</b>
                    </p>
                    <p>
                      Thời lượng: <b>{movie.duration}</b>
                    </p>
                    <div className="tags">
                      <Tag color="red">{movie.rating}</Tag>
                      {movie.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                    <Button type="primary" block>
                      MUA VÉ
                    </Button>
                  </Card>
                </WrapperMovieCard>
              </Col>
            ))}
          </Row>
        </TabPane>

        <TabPane tab="PHIM ĐANG CHIẾU" key="2">
          <Row gutter={[24, 24]}>
            {movies.showing.map((movie) => (
              <Col xs={24} sm={12} md={8} lg={6} key={movie.id}>
                <WrapperMovieCard>
                  <Card
                    hoverable
                    cover={<img alt={movie.title} src={movie.image} />}
                    bordered={false}
                    onClick={() => handleMovieClick(movie.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3>{movie.title}</h3>
                    <p>
                      Thể loại: <b>{movie.type}</b>
                    </p>
                    <p>
                      Thời lượng: <b>{movie.duration}</b>
                    </p>
                    <div className="tags">
                      <Tag color="red">{movie.rating}</Tag>
                      {movie.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                    <Button type="primary" block>
                      MUA VÉ
                    </Button>
                  </Card>
                </WrapperMovieCard>
              </Col>
            ))}
          </Row>
        </TabPane>

        <TabPane tab="SUẤT CHIẾU ĐẶC BIỆT" key="3">
          <Row gutter={[24, 24]}>
            {movies.special.map((movie) => (
              <Col xs={24} sm={12} md={8} lg={6} key={movie.id}>
                <WrapperMovieCard>
                  <Card
                    hoverable
                    cover={<img alt={movie.title} src={movie.image} />}
                    bordered={false}
                    onClick={() => handleMovieClick(movie.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3>{movie.title}</h3>
                    <p>
                      Thể loại: <b>{movie.type}</b>
                    </p>
                    <p>
                      Thời lượng: <b>{movie.duration}</b>
                    </p>
                    <div className="tags">
                      <Tag color="red">{movie.rating}</Tag>
                      {movie.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                    <Button type="primary" block>
                      MUA VÉ
                    </Button>
                  </Card>
                </WrapperMovieCard>
              </Col>
            ))}
          </Row>
        </TabPane>
      </Tabs>
    </WrapperMovieList>
  );
};

export default MovieListComponent;
