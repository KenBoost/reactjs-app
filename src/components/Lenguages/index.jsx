import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { useEffect, useState, useRef } from "react"
import './index.scss';



const Lenguages = () => {

  const languageNames = ['JavaScript', 'React.js', 'HTML', 'C#','Linux', 'CSS', 'Node.js', 'SASS'];
  const languageImages = [
    '../../assets/images/programming/js.png',
    '../../assets/images/programming/react-js.png',
    '../../assets/images/programming/html-5.png',
    '../../assets/images/programming/c-sharp.png',
    '../../assets/images/programming/linux.png',
    '../../assets/images/programming/css-3.png',
    '../../assets/images/programming/node-js.png',
    '../../assets/images/programming/sass.png',
  ];

  return  (
    <div className='contenedor'>
  <div className="lenguages-section">
      <h1>Lenguages de programación de mi experiencia</h1>
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      {languageNames.map((name, index) => (
        <SwiperSlide key={index}>
          <div className="language-card">
            <h2>{name}</h2>
            <img src={languageImages[index]} alt={name} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  </div>
  )
}
export default Lenguages