import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/banner1/Banner'
import Footer from '../../components/shared/Footer/Footer'
import Banner2 from '../../components/pages/banner2/banner2'
import Banner3 from '../../components/pages/banner3/banner3'
import Banner4 from '../../components/pages/banner4/banner4'
import OurServices from '../../components/pages/ourServices/ourServices'
import Subscribe from '../../components/pages/subscribe/subscribe'
const Home = () => {
    return (
        <div className='home-page'>
            <Navbar />
            <Banner/>
            <Banner2/>
            <Banner3/>
            <Banner4/>
            <OurServices/>
            <Subscribe/>
            <Footer />
        </div>
    )
}

export default Home
