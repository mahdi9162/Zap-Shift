import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../../../assets/brands/amazon_vector.png';
import casio from '../../../../assets/brands/casio.png';
import moonstar from '../../../../assets/brands/moonstar.png';
import randstad from '../../../../assets/brands/randstad.png';
import star from '../../../../assets/brands/star.png';
import start_people from '../../../../assets/brands/start_people.png';
import { Autoplay } from 'swiper/modules';
import Container from '../../../components/Container/Container';

const brandLogos = [amazon, casio, moonstar, randstad, star, start_people];

const Brands = () => {
  return (
    <section className='my-24'>
      <Container>
        <Swiper
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          slidesPerView={'auto'}
          breakpoints={{
            // 0px (Mobile)
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // 640px (Tablet/Small Desktop)
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // 1024px (Large Desktop)
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {brandLogos.map((brandLogo, index) => (
            <SwiperSlide key={index} style={{ width: '180px' }} className="flex justify-center items-center">
              <img src={brandLogo} alt="Brand Logos" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Brands;
