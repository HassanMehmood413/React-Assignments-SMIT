import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from '../pages/home/Home'
import Navbar from '../components/navbar/Navbar';
import App from '../App';
import Contact from '../pages/contactUs/Contact';
import Footer from '../single_components/Footer/Footer';

export default function Routing() {
    return (
        <div>
            <BrowserRouter>

                <div className="main-content">
                    <div className="nav">
                        <Navbar />
                    </div>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path='/contactus' element={<Contact />} />
                    </Routes>

                    <div className="footer">
                        <Footer />
                    </div>
                </div>

            </BrowserRouter>
        </div>
    )
}
