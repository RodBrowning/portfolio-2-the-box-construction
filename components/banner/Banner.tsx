import BannerST from '../../styles/Banner.module.css'
import React from 'react'

const Banner = () => {
  return (
    <section className={BannerST.container_fluid} style={{backgroundImage: 'url(./assets/banner_image.png)'}}>
      <div className={`container ${BannerST.container}`}>
        <div className={BannerST.text_container}>
          <h4>
            Free consultation with exceptional quality
          </h4>
          <p>
            Just one call away: <a href="tel:+5511949485112">+55 11 9 4948 5112</a>
          </p>
        </div>
        <div className={BannerST.button_div}>
          <button className='btn btn-light'>Get your consultation</button>
        </div>
      </div>
    </section>
  )
}

export default Banner