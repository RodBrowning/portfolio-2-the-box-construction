import About from '../components/about/About'
import Address from '../components/address/Address'
import Banner from '../components/banner/Banner'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Head from 'next/head'
import Hero from '../components/hero/Hero'
import Nav from '../components/nav/Nav'
import Projects from '../components/projects/Projects'
import Reputation from '../components/reputation/Reputation'
import Services from '../components/services/Services'
import ServicesImgText from '../components/services/ServicesImgText'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Box</title>
        <meta name="description" content="Portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Nav />
      </header>

      <main>
        <Hero />
        <Reputation />
        <About />
        <Services />
        <ServicesImgText />
        <Banner />
        <Projects />
        <Contact />
        <Address />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
