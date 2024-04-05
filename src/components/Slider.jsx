import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.css';
// import required modules
import { Pagination } from 'swiper/modules';
function Slider() {
  return (
    <>
    
    <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='slider'>
<img src="/nvidia.png" alt="" />

        </SwiperSlide>
        <SwiperSlide className='slider'>
        <img src="/amd.png" alt="" />
            
        </SwiperSlide>
        <SwiperSlide className='slider'>
            
        <img src="/apple.png" alt="" />

        </SwiperSlide>
        <SwiperSlide className='slider'>
            
        <img src="/samsung.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider'>
            

        <img src="/hp.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider'>

        <img src="/intel.png" alt="" />

        </SwiperSlide>
        <SwiperSlide className='slider'>
            
        <img src="/xiaomi.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider'>
        <img src="/lenovo.png" alt="" />

        </SwiperSlide>
        <SwiperSlide className='slider'>
        <img src="/alien.png" alt="" />

        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider