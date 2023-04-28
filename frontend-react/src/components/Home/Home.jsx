import React from 'react';

import Navbar from '../Navbar/Navbar';
import Header from '../../container/Header/Header'
import About from '../../container/About/About';
import Work from '../../container/Work/Work';
import Footer from '../../container/Footer/Footer';
import Services from '../../container/Services/Services';

const Home = () => {
    return (
    <div>
    <Navbar />
    <Navbar />
    <Header />
    <About />
    <Services/>
    <Work />
    <Footer />
    </div>
    );
};

export default Home;