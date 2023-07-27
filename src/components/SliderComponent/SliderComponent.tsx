// @ts-nocheck
import React, { useEffect } from 'react';
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


const Slider = ({ slides }) => {
    useEffect(()=>{
        console.log(slides);
        
    },[])
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      {slides && slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={"http://plush-toy.shop"+slide.photo} alt={`Slide ${index}`}/>
        </SwiperSlide>
      ))}
      
    </Swiper>
  );
};

export default Slider;