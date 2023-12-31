import React from "react";
import styled from "@emotion/styled"

// Import Images
import Promo1 from "src/img/promo1.png"
import Promo2 from "src/img/promo2.png"
import Promo3 from "src/img/promo3.png"


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const Image = styled.img`
  max-height: 24rem;
  width: 100%;
  margin: 0px auto;
`;

export default function Carrusel() {
    return (
        <>
            <Swiper 
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    
                    <Image src={Promo1.src} alt="Soriana Logo" className="rounded-lg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Promo2.src} alt="Soriana Logo" className="rounded-lg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Promo3.src} alt="Soriana Logo" className="rounded-lg"/>
                </SwiperSlide>
            </Swiper>
        </>
    );
}