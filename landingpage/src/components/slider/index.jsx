import { React } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Slide } from "../../styled";

export const Slider = () => {
  const teste = [
    "https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg",
    "https://st2.depositphotos.com/4164031/6914/i/450/depositphotos_69145633-stock-photo-flag-of-brazil.jpg",
    "https://imagens.usp.br/wp-content/uploads/Campus-15-Foto-Marcos-Santos20101220_066.jpg",
    "https://i0.wp.com/www.atoananet.com.br/links/2022/09/06/conheca-o-bora-bill-o-mais-novo-meme.jpg",
    "https://images.hdqwalls.com/wallpapers/deadpool-and-pikachu-z8.jpg",
    "https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg",
    "https://st2.depositphotos.com/4164031/6914/i/450/depositphotos_69145633-stock-photo-flag-of-brazil.jpg",
    "https://imagens.usp.br/wp-content/uploads/Campus-15-Foto-Marcos-Santos20101220_066.jpg",
    "https://i0.wp.com/www.atoananet.com.br/links/2022/09/06/conheca-o-bora-bill-o-mais-novo-meme.jpg",
    "https://images.hdqwalls.com/wallpapers/deadpool-and-pikachu-z8.jpg",
  ];
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {teste.map((item) => {
        return (
          <SwiperSlide>
            <Slide>
              <div>
                <img src={item} />
              </div>
            </Slide>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
