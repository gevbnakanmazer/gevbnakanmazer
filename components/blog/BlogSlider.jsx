import { Swiper, SwiperSlide } from "swiper/react";
import * as styles from "./style.module.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {  FreeMode, Pagination } from "swiper";
import { CurrentSlide } from "./CurrentSlide";
import { useMediaQuery } from "react-responsive";

const slide = [
  {
    id: 1,
    title: "Բնական Մազերի Խնամք",
    img: "https://scontent.fevn7-1.fna.fbcdn.net/v/t1.6435-9/87485392_2869638849786237_3795820456150302720_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=ClI3bPDVXdQAX8DT4RC&_nc_ht=scontent.fevn7-1.fna&oh=00_AfDiYOBRYgkTw3CBI0k8iqSMQefdIwSl7su7aTHjMvn6vQ&oe=63FDEA70",
    shortContent:"Պարունակում է միայն մեծատառեր, հարմար է վերնագրերում օգտագործելու համար։",
},
  {
    id: 2,
    title: "Մազերի տեսակները",
    img: "https://scontent.fevn7-1.fna.fbcdn.net/v/t1.6435-9/87166459_2869639009786221_6113540351312527360_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=xjiv1vCyXK0AX-h8jAq&_nc_ht=scontent.fevn7-1.fna&oh=00_AfBwZNupzzP-BpK2fSvP3qbP7XMU2WojFNSUk9WMs1UQAQ&oe=63FDF23B",
    shortContent:"Պարունակում է միայն մեծատառեր, հարմար է վերնագրերում օգտագործելու համար։",

},
  {
    id: 3,
    title: "Մազերի ներկի ճիշտ ընտրություն",
    img: "https://content.latest-hairstyles.com/wp-content/uploads/hair-color-chart.jpg",
    shortContent:"Պարունակում է միայն մեծատառեր, հարմար է վերնագրերում օգտագործելու համար։",

},
  {
    id: 4,
    title: "Տնային գունազարդման խորհուրդներ",
    img: "https://content.latest-hairstyles.com/wp-content/uploads/ombre-hair-colors-for-women.jpg",
    shortContent:"Պարունակում է միայն մեծատառեր, հարմար է վերնագրերում օգտագործելու համար։",

},

  {
    id: 5,
    title: "Ինչպես ընտրել ճիշտ տոնիկ ընդգծված մազերի համար",
    img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-how-to-dye-hair-at-home-index-1589920732.png?crop=0.502xw:1.00xh;0.375xw,0&resize=640:*",
    shortContent:"Պարունակում է միայն մեծատառեր, հարմար է վերնագրերում օգտագործելու համար։",

},
];

export const BlogSlider = () => {
    const mobileMode1 = useMediaQuery({
      query: "(max-width:1040px)",
    });

    const mobileMode2 = useMediaQuery({
        query: "(max-width:715px)",
      });


    // 1040
    const queryFoo = ()=>{
        if(mobileMode2){
            return 1;
        } else if(mobileMode1){
            return 2;
        } else{
            return 3;
        }
    }
  return (
    <>
      <div className={styles.blogHeader}>
        <div className="title">
          <h2 className="header2">Բլոգ</h2>
        </div>
      </div>
      <div className={styles.blogSlider}>
        <Swiper
          style={{
            "--swiper-pagination-color": "#fff",
          }}
          slidesPerView={queryFoo()}
          spaceBetween={10}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {slide.map((el) => {
            return (
              <SwiperSlide key={el.id}>
                <div className={styles.currentSlide}>
                  <CurrentSlide slide={el} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
