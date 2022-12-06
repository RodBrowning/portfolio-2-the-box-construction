import AddressST from '../../styles/Address.module.css'
import Image from 'next/image'
import React from 'react'
import ficon from '../../public/assets/icons/social_facebook.svg'
import licon from '../../public/assets/icons/social_linkedin.svg'
import logo from '../../public/assets/logo.png'
import ticon from '../../public/assets/icons/social_twitter.svg'

const Address = () => {
  return (
    <section className={`container ${AddressST.container}`}>
        <div className={AddressST.left_content}>
            <address className={AddressST.address}>
                <div className={AddressST.address_data}>
                    <div className={AddressST.label}>
                        <p>Address:</p>
                    </div>
                    <div className={AddressST.label_data}>
                        <p>6391 Elgin St. Celina, Delaware 10299</p>
                    </div>
                </div>
                <div className={AddressST.address_data}>
                    <div className={AddressST.label}>
                        <p>Phone:</p>
                    </div>
                    <div className={AddressST.label_data}>
                        <p>+84 1102 2703</p>
                    </div>
                </div>
                <div className={AddressST.address_data}>
                    <div className={AddressST.label}>
                        <p>Email:</p>
                    </div>
                    <div className={AddressST.label_data}>
                        <p>hello@thebox.com</p>
                    </div>
                </div>
            </address>
            <div className={AddressST.logo}>
                <Image src={logo} alt='logo'/>
            </div>
        </div>
        <div className={AddressST.right_content}>
            <form action="" className={AddressST.news}>
                <label htmlFor="email">
                    Newsletter:
                </label>
                <div className={AddressST.inputs}>
                    <input type="email" name="email" placeholder='Your email here' />
                    <input className='btn btn-orange' type="button" value="Subscribe" />
                </div>
            </form>
            <div className={AddressST.social_div}>
                <label>Social:</label>
                <div className={AddressST.social}>
                    <Image src={ficon} alt='facebook icon'/>
                    <Image src={licon} alt='linkedin icon'/>
                    <Image src={ticon} alt='twitter icon'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Address