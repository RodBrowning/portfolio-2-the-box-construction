import AboutST from '../../styles/About.module.css'
import Image from 'next/image'
import React from 'react'
import aboutImage from '../../public/assets/about_image.jpg'

const About = () => {
  return (
    <section className={`container ${AboutST.container}`}>
      <div className={AboutST.image}>
        <Image src={aboutImage} alt="About us image"/>
      </div>
      <div className={AboutST.text_container}>
        <div className={AboutST.inner_text_container}>
          <h4>About us</h4>
          <p>
            For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way. 
          </p>
          <p>
            We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.
          </p>
          <a className='btn btn-white'>More on Our History</a>
        </div>
      </div>
      
    </section>
  )
}

export default About