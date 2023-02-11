import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Slider1 } from "./slides/Slider1";
import { Slider2 } from "./slides/Slider2";
import { Slider3 } from "./slides/Slider3";

export const NatureHairSLider =()=>{
    return (
      <div>
        <div className="title pt-6 my-4">
          <h2 className="header2">Բնական Մազեր</h2>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slider1 />
          </SwiperSlide>
          <SwiperSlide>
            <Slider2 />
          </SwiperSlide>
          <SwiperSlide>
            <Slider3 />
          </SwiperSlide>
        </Swiper>
      </div>
    );
}