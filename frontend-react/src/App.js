import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import Home from './components/Home/Home';
import AllWork from './components/AllWork/AllWork';


const App = () => {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="work" element={<AllWork />} />
                </Routes>
            </Router>
        </div>



        // <div className="app">
        //     <Navbar />
        //     <Header />
        //     <About />
        //     <Work />
        //     <Skills />
        //     <Testimonial />
        //     <Footer />
        // </div>
    );
};

export default App;