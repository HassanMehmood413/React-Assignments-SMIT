import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from '../pages/home/Home'
import Navbar from '../components/navbar/Navbar';
import App from '../App';

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
                    </Routes>

                </div>

            </BrowserRouter>
        </div>
    )
}
