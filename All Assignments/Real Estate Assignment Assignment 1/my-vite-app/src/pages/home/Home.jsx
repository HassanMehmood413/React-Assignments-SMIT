import React from 'react';
import logo1 from '../../assets/Images/logo1.png';
import logo2 from '../../assets/Images/logo2.png';
import logo3 from '../../assets/Images/logo3.png';
import logo4 from '../../assets/Images/logo4.png';
import logo5 from '../../assets/Images/logo6.png';
import blocks from '../../assets/Images/four_blocks.png';
import PopularResidance from '../../single_components/popular_residance/PopularResidance.jsx';
import ChooseUs from '../../single_components/ChooseUs/ChooseUs.jsx';
import Needhelp from '../../single_components/NeedHelp/Needhelp.jsx';
import Abovefooter from '../../single_components/AboveFooter/Abovefooter.jsx';
import Footer from '../../single_components/Footer/Footer.jsx';

export default function Home() {
    return (
        <div>
            <div>

                <div className="home-whole">

                    <div className="text-area-section">
                        <div className="textarea-1">
                            <h1>Perfect Way To Buy And Sell A Home</h1>
                        </div>

                        <div className="textarea-2">
                            <p>Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa aliqua dui pellentesque. Ac, gravida in eget non amet eget purus non.</p>
                        </div>

                        <div className="search-container">
                            <div className="search-box">
                                <div className="search-item">
                                    <label>Purpose</label>
                                    <select>
                                        <option value="buy">Buy</option>
                                        <option value="rent">Rent</option>
                                    </select>
                                </div>

                                <div className="search-item">
                                    <label>Location</label>
                                    <select>
                                        <option value="toronto">Toronto, Canada</option>
                                        <option value="new-york">New York, USA</option>
                                    </select>
                                </div>

                                <div className="search-item">
                                    <label>Type</label>
                                    <select>
                                        <option value="industrial">Industrial Home</option>
                                        <option value="apartment">Apartment</option>
                                    </select>
                                </div>

                                <button className="search-button">Search</button>
                            </div>
                        </div>
                    </div>

                    <div className="home-image">
                        <figure className="project-img">
                            <img src={require('../../assets/Images/home-image-1.png')} alt="finance" loading="lazy" />
                        </figure>
                    </div>

                </div>


                <div className="four-blocks">
                    <img src={blocks} alt="" className="block" />
                </div>

                <div className="features-logo">
                    <h1 className='heading-1'>Featured In</h1>
                    <ul className='features-logos'>
                        <li className="logos"><img src={logo1} alt="Home" /></li>
                        <li className="logos"><img src={logo2} alt="Home" /></li>
                        <li className="logos"><img src={logo3} alt="Home" /></li>
                        <li className="logos"><img src={logo4} alt="Home" /></li>
                        <li className="logos"><img src={logo5} alt="Home" /></li>
                    </ul>
                </div>

            </div>


            <PopularResidance />
            <ChooseUs />
            <Needhelp />
            <Abovefooter />
        </div>
    );
}
