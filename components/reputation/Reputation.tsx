import Image from 'next/image'
import React from 'react'
import ReputationST from '../../styles/Reputation.module.css'
import icone1 from '../../public/assets/icons/reputation_icon_1.svg'
import icone2 from '../../public/assets/icons/reputation_icon_2.svg'
import icone3 from '../../public/assets/icons/reputation_icon_3.svg'

const Reputation = () => {
  return (
    <section className={`container ${ReputationST.container}`}>
      <h4 className={ReputationST.heading}>
        Our Reputation
      </h4>
      <div className={ReputationST.cards}>
        <div className={ReputationST.card}>
          <div className={ReputationST.card_icon}>
            <Image src={icone1} alt="icone1"/>
          </div>
          <h5>
            Best Services
          </h5>
          <p className='color-light'>
            Nullam senectus porttitor in eget. Eget rutrum leo interdum.
          </p>
        </div>
        <div className={ReputationST.card}>
          <div className={ReputationST.card_icon}>
            <Image src={icone2} alt="icone2"/>
          </div>
          <h5>
            Best Teams
          </h5>
          <p className='color-light'>
            Cursus semper tellus volutpat aliquet lacus. 
          </p>
        </div>
        <div className={ReputationST.card}>
          <div className={ReputationST.card_icon}>
            <Image src={icone3} alt="icone3"/>
          </div>
          <h5>
            Best Designs
          </h5>
          <p className='color-light'>
            Ultricies at ipsum nunc, tristique nam lectus.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Reputation