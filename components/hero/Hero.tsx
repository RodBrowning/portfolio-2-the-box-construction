import 'swiper/css';

import { ArrowLeft, ArrowRight } from 'akar-icons';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import HeroST from '../../styles/Hero.module.css'
import React from 'react'

const Hero = () => {
  return (
    <section className={HeroST.hero_section}>
      <div className={HeroST.hero_img} style={{backgroundImage: "url(./assets/Hero.jpg)"}}>
      </div>
      <div className={`container ${HeroST.container}`}>
        <h1>
          Building things is our mission.
        </h1>
      </div>
      <div className={HeroST.slider}>
        <Swiper
          slidesPerView={1}
          loop={true}
          navigation>
          <SwiperSlide>
            <div className={HeroST.content}>
              <h5>Feature Projects</h5>
              <p>
                The National University of Architecture
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={HeroST.content}>
              <h5>New Project</h5>
              <p>
                The University of Computing Science
              </p>
            </div>
          </SwiperSlide>
          <div className={HeroST.slider_nav}>
            <PrevBtn />
            <NextBtn />
          </div>
        </Swiper>
      </div>
    </section>
  )
}

const PrevBtn = () => {
  const swiper = useSwiper();
  return (
    <button className='btn btn-black' onClick={() => swiper.slidePrev()}><ArrowLeft strokeWidth={2} size={36} /> Back</button>
  )
}

const NextBtn = () => {
  const swiper = useSwiper();
  return (
    <button className='btn btn-black' onClick={() => swiper.slideNext()}>
      Next <ArrowRight strokeWidth={2} size={36} />
    </button>
  )
}


export default Hero