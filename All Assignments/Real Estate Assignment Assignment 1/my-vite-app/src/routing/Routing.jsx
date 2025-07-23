import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from '../pages/home/Home'
import Contact from '../pages/contactUs/Contact';
import Footer from '../single_components/Footer/Footer';
import CreatePosts from '../pages/createposts/CreatePost'; 
import Posts from '../pages/posts/Posts';
import Navbar from "../components/navbar/Navbar";

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
                        <Route path="/createpost" element={<CreatePosts />} />
                        <Route path='/posts' element={<Posts />} />
                    </Routes>

                    <div className="footer">
                        <Footer />
                    </div>
                </div>

            </BrowserRouter>
        </div>
    )
}
