import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/banner1/Banner'
import Footer from '../../components/shared/Footer/Footer'
import Banner2 from '../../components/pages/banner2/banner2'
const Home = () => {
    return (
        <div className='home-page'>
            <Navbar />
            <Banner/>
            <Banner2/>
            <Footer />
        </div>
    )
}

export default Home
