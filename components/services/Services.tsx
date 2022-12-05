import Image from 'next/image'
import React from 'react'
import ServicesST from '../../styles/Services.module.css'
import service_icon_1 from '../../public/assets/icons/services_icon_1.svg'
import service_icon_2 from '../../public/assets/icons/services_icon_2.svg'
import service_icon_3 from '../../public/assets/icons/services_icon_3.svg'
import service_icon_4 from '../../public/assets/icons/services_icon_4.svg'
import service_icon_5 from '../../public/assets/icons/services_icon_5.svg'
import service_icon_6 from '../../public/assets/icons/services_icon_6.svg'

const Services = () => {
  return (
    <section className={ServicesST.container_fluid}>
      <div className='container'>
        <h4>Services</h4>
        <div className={ServicesST.cards}>
          <div className={ServicesST.card}>
            <div className={ServicesST.icon}>
              <Image src={service_icon_1} alt="services icon 1"/>
            </div>
            <div className={ServicesST.card_container}>
              <h5>Construction</h5>
            </div>
          </div>
          <div className={ServicesST.card}>
            <div className={ServicesST.icon}>
              <Image src={service_icon_2} alt="services icon 2"/>
            </div>
            <div className={ServicesST.card_container}>
              <h5>Renovation</h5>
            </div>
          </div>
          <div className={ServicesST.card}>
            <div className={ServicesST.icon}>
              <Image src={service_icon_3} alt="services icon 3"/>
            </div>
            <div className={ServicesST.card_container}>
              <h5>Consultation</h5>
            </div>
          </div>
          <div className={ServicesST.card}>
            <div className={ServicesST.icon}>
              <Image src={service_icon_4} alt="services icon 4"/>
            </div>
            <div className={ServicesST.card_container}>
              <h5>Repair Services</h5>
            </div>
          </div>
          <div className={ServicesST.card}>
            <div className={ServicesST.icon}>
              <Image src={service_icon_5} alt="services icon 5"/>
            </div>
            <div className={ServicesST.card_container}>
              <h5>Architecture</h5>
            </div>
          </div>
          <div className={ServicesST.card}>
            <div className={ServicesST.icon}>
              <Image src={service_icon_6} alt="services icon 6"/>
            </div>
            <div className={ServicesST.card_container}>
              <h5>Electric</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services