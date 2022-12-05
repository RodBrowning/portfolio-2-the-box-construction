import Image from 'next/image'
import React from 'react'
import ServicesImgTextST from '../../styles/ServicesImgText.module.css'
import experienceImage from '../../public/assets/experience.png'

const ServicesImgText = () => {
  return (
    <section className={`container ${ServicesImgTextST.container}`}>
      <div className={ServicesImgTextST.image}>
        <Image src={experienceImage} alt='Experience Image' />
      </div>
      <div className={ServicesImgTextST.text_container}>
        <h2>
          30 Years Experience
        </h2>
        <p>
          Our company has been the leading provided construction services to clients throughout the USA since 1988.
        </p>
        <a className='btn btn-primary' href="#">Contact Us</a>
      </div>
    </section>
  )
}

export default ServicesImgText