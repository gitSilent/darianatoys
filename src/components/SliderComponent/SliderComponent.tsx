// @ts-nocheck
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

// Инициализация модулей Swiper
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = ({ slides }) => {
  return (
    <Swiper
      navigation={window.innerWidth > 768 ? true : false}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      {slides && slides.map((slide, idx) => (
        <div key={idx}>
          <SwiperSlide >
            <img src={slide.image_url} alt={`Slide ${idx}`} />
          </SwiperSlide>
        </div>
      ))}

    </Swiper>
  );
};

export default Slider;