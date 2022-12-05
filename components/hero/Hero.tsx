import { ArrowLeft, ArrowRight } from 'akar-icons';

import HeroST from '../../styles/Hero.module.css'
import Image from 'next/image'
import React from 'react'
import hero from '../../public/assets/Hero.jpg'

const Hero = () => {
  return (
    <section className={HeroST.hero_section}>
      <div className={HeroST.hero_img} style={{backgroundImage: "url(./assets/Hero.jpg)"}}>
        {/* <Image src={hero} alt="Hero image" /> */}
      </div>
      <div className={`container ${HeroST.container}`}>
        <h1>
          Building things is our mission.
        </h1>
      </div>
      <div className={HeroST.slider}>
        <div className={HeroST.content}>
          <h6>Feature Projects</h6>
          <p>
            The National University of Architecture
          </p>
        </div>
        <div className={HeroST.slider_nav}>
          <button className='btn btn-black'><ArrowLeft strokeWidth={2} size={36} /> Back</button>
          <button className='btn btn-black'>Next <ArrowRight strokeWidth={2} size={36} /></button>
        </div>
      </div>
    </section>
  )
}

export default Hero