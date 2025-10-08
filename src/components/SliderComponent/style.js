import styled from "styled-components";

export const WrapperSlider = styled.div`
  margin-top: 20px; 

  .slick-slider {
    position: relative;
  }

  
  .slick-dots {
    bottom: 20px;
    // color: white;
  }

  .slick-dots li button:before {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 2px solid #e58c8c; /* màu viền hồng nhạt */
    border-radius: 50%;
    background-color: transparent;
    opacity: 1;
  }
    .slick-dots li.slick-active button:before {
    background-color: white; /* dot active tô đầy */
    border-color: #e58c8c;
    }

  .slick-prev {
    left: 120px;
    }


    .slick-next {
    right: 120px;
    }

  .slick-prev,
  .slick-next {
    z-index: 2;
    width: 40px;
    height: 40px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 35px;
    color: white;
  }
`;
