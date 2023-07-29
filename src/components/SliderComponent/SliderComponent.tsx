// @ts-nocheck
import { useEffect } from 'react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Инициализация модулей Swiper
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = ({ slides }) => {
  useEffect(() => {
    console.log(slides);

  }, [])
  return (
    <Swiper
      navigation={window.innerWidth > 400 ? true : false}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      {slides && slides.map((slide, index) => (
        <div className=" ">
          <SwiperSlide key={index}>
            <img src={slide.image_url} alt={`Slide ${index}`} width={100} height={100} className='' />
          </SwiperSlide>
        </div>
      ))}

    </Swiper>
  );
};

export default Slider;