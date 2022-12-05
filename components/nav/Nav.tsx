import React, { useState } from 'react'
import { ThreeLineHorizontal, ThreeLineVertical } from 'akar-icons';

import Image from 'next/image'
import NavST from '../../styles/Nav.module.css'
import logo from '../../public/assets/logo.png'

const Nav = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  return (
    <div className={`container ${NavST.container}`}>
      <div className={NavST.logo}>
        <Image src={logo} alt='logo'/>
      </div>
      <nav className={`${NavST.links} ${isMenuOpened ? '' : NavST.hide}`}>
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Projects</a>
        <a href="">Services</a>
        <a href="">Contact Us</a>
      </nav>
      <div className={NavST.mobile_menu}>
        <ThreeLineHorizontal className={isMenuOpened ? NavST.hide: ''} strokeWidth={2} size={36} onClick={()=> setIsMenuOpened(true)}/>
        <ThreeLineVertical className={isMenuOpened ? '' : NavST.hide} strokeWidth={2} size={36} onClick={()=> setIsMenuOpened(false)}/>
      </div>
    </div>
  )
}

export default Nav