// @ts-nocheck
import React from 'react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.min.css';
// Импортируйте необходимые стили:
// import 'swiper/components/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.min.css';

// Инициализация модулей Swiper
SwiperCore.use([Navigation, Pagination, Autoplay]);

interface SliderProps {
  slides: string[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          {/* <img src={slide} alt={`Slide ${index}`} /> */}
            <p>{slide}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;