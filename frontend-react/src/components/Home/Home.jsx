import React from 'react';

import Navbar from '../Navbar/Navbar';
import Header from '../../container/Header/Header'
import About from '../../container/About/About';
import Work from '../../container/Work/Work';
// import Skills from '../../container/Skills/Skills';
// import Testimonial from '../../container/Testimonial/Testimonial';
import Footer from '../../container/Footer/Footer';
import Services from '../../container/Services/Services';

const Home = () => {
    return (
    <div>
    <Navbar />
    <Header />
    <About />
    <Services/>
    <Work />
    {/* <Skills /> */}
    {/* <Testimonial /> */}
    <Footer />
    </div>
    );
};

export default Home;