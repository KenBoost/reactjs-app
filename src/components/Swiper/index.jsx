// import Swiper core and required modules
import { Autoplay, Pagination, } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import {JavascriptL, ReactL, NodeL, CSSL, SASSL, CSHARPL, LINUXL, HTMLL } from '../ImportedImages'

import 'swiper/css';
import 'swiper/css/pagination';
import './index.scss';

const Carrusel = () => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 2000 }}
      modules={[Pagination,Autoplay]}      
      className="mySwiper"
    >
  <SwiperSlide>
    <div className="swiper-card">
      <h2>Javascript</h2>
      <img src={JavascriptL} alt="JavaScript" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="swiper-card">
      <h2>React.js</h2>
      <img src={ReactL} alt="React" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="swiper-card">
      <h2>HTML</h2>
      <img src={HTMLL} alt="HTML" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="swiper-card">
      <h2>C#</h2>
      <img src={CSHARPL} alt="C#" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="swiper-card">
      <h2>Node.js</h2>
      <img src={NodeL} alt="Node.js" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="swiper-card">
      <h2>Linux</h2>
      <img src={LINUXL} alt="Linux" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="swiper-card">
      <h2>CSS</h2>
      <img src={CSSL} alt="CSS" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="swiper-card">
      <h2>SASS</h2>
      <img src={SASSL} alt="SASS" />
    </div>
  </SwiperSlide>
    </Swiper>
  );
};

export default Carrusel