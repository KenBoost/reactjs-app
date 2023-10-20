// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './index.scss';


const languageNames = ['JavaScript', 'React.js', 'HTML', 'C#','Linux', 'CSS', 'Node.js', 'SASS'];
  const languageImages = [
    '../../../assets/images/programming/js.png',
    '../../../assets/images/programming/react-js.png',
    '../../../assets/images/programming/html-5.png',
    '../.././/assets/images/programming/c-sharp.png',
    '../.././/assets/images/programming/linux.png',
    '../../../assets/images/programming/css-3.png',
    '../../../assets/images/programming/node-js.png',
    '../../../assets/images/programming/sass.png',
  ];

const Carrusel = () => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {languageNames.map((language, index) => (
        <SwiperSlide key={index}>
          <div>
            <img src={languageImages[index]} alt={language} />
            <p>{language}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrusel