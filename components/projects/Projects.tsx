import 'swiper/css';

import { ArrowLeft, ArrowRight } from 'akar-icons'

import Image from 'next/image'
import ProjectsST from '../../styles/Projects.module.css'
import React from 'react'
import project_1 from '../../public/assets/project_1.png'
import project_2 from '../../public/assets/project_2.png'
import project_3 from '../../public/assets/project_3.png'
import project_4 from '../../public/assets/project_4.png'

const Projects = () => {
  return (
    <section className={`container ${ProjectsST.container}`}>
      <h4>
        Projects
      </h4>
      <div className={ProjectsST.inner_container}>
        <div className={ProjectsST.menu}>
          <ul>
            <li className={ProjectsST.active}>All</li>
            <li>Commercial</li>
            <li>Residential</li>
            <li>Other</li>
          </ul>
        </div>
        <div className={ProjectsST.slider}>
          <div className={ProjectsST.slider_cards}>
            <div className={ProjectsST.slider_card}>
              <Image src={project_1} alt='Project 1' />
              <div className={ProjectsST.slider_card_text}>
                <h5>Wildstone Infra Hotel</h5>
                <p>
                  2715 Ash Dr. San Jose, South Dakota
                </p>
              </div>
            </div>
            <div className={ProjectsST.slider_card}>
              <Image src={project_2} alt='Project 2' />
              <div className={ProjectsST.slider_card_text}>
                <h5>Wish Stone Building</h5>
                <p>
                  2972 Westheimer Rd. Santa Ana, Illinois
                </p>
              </div>
            </div>
            <div className={ProjectsST.slider_card}>
              <Image src={project_3} alt='Project 3' />
              <div className={ProjectsST.slider_card_text}>
                <h5>Mr. Parkinston’s House</h5>
                <p>
                  3517 W. Gray St. Utica, Pennsylvania
                </p>
              </div>
            </div>
            <div className={ProjectsST.slider_card}>
              <Image src={project_4} alt='Project 4' />
              <div className={ProjectsST.slider_card_text}>
                <h5>Oregano Height</h5>
                <p>
                  2464 Royal Ln. Mesa, New Jersey 
                </p>
              </div>
            </div>
            {/* <div className={ProjectsST.slider_card}>
              <Image src={project_1} alt='Project 5' />
              <div className={ProjectsST.slider_card_text}>
                <h5>Wildstone Infra Hotel (2)</h5>
                <p>
                  (2) 2715 Ash Dr. San Jose, South Dakota
                </p>
              </div>
            </div>
            <div className={ProjectsST.slider_card}>
              <Image src={project_2} alt='Project 6' />
              <div className={ProjectsST.slider_card_text}>
                <h5>Wish Stone Building (2)</h5>
                <p>
                  (2) 2972 Westheimer Rd. Santa Ana, Illinois
                </p>
              </div>
            </div>
            <div className={ProjectsST.slider_card}>
              <Image src={project_3} alt='Project 7' />
              <div className={ProjectsST.slider_card_text}>
                <h5>Mr. Parkinston’s House (2)</h5>
                <p>
                  (2) 3517 W. Gray St. Utica, Pennsylvania
                </p>
              </div>
            </div>
            <div className={ProjectsST.slider_card}>
              <Image src={project_4} alt='Project 8' />
              <div className={ProjectsST.slider_card_text}>
                <h5>Oregano Height (2)</h5>
                <p>
                  (2) 2464 Royal Ln. Mesa, New Jersey 
                </p>
              </div>
            </div> */}
          </div>
          <div className={ProjectsST.slider_navigation}>
            <button className='btn btn-black'><ArrowLeft strokeWidth={2} size={36} /> Back</button>
            <div>Pagination</div>
            <button className='btn btn-black'>Next <ArrowRight strokeWidth={2} size={36} /></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects