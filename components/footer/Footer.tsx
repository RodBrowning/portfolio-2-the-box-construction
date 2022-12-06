import FooterST from '../../styles/Footer.module.css'
import React from 'react'

const Footer = () => {
  return (
    <footer className={FooterST.container_fluid} >
      <div className={`container ${FooterST.container}`}>
        <div className={FooterST.copy}>
          <p>TheBox Company © 2022. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer