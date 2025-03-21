import React from 'react'
import rentiz from '../../assets/Images/brand_logo.png'
import instagram from '../../assets/Images/instagram.png'
import facebook from '../../assets/Images/facebook.png'
import twitter from '../../assets/Images/twitter.png'
import youtube from '../../assets/Images/youtube.png'
import '../Footer/Footer.css'


export default function Footer() {
    return (
        <div>
            <div className="whole-footer">
                <div className="rentiz">
                    <img src={rentiz} alt="" />
                    <p>Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue.</p>
                    <ul>
                        <li><img src={instagram} alt="" /></li>
                        <li><img src={facebook} alt="" /></li>
                        <li><img src={twitter} alt="" /></li>
                        <li><img src={youtube} alt="" /></li>
                    </ul>
                </div>
                <div className="project">
                    <h3>Project</h3>
                    <ul>
                        <li>Houses</li>
                        <li>Rooms</li>
                        <li>Flats</li>
                        <li>Appartments</li>
                    </ul>
                </div>
                <div className="company">
                    <h3>Company</h3>
                    <ul>
                        <li>How we word?</li>
                        <li>Capital</li>
                        <li>Security</li>
                    </ul>
                </div>
                <div className="movemennt">
                    <h3>Movement</h3>
                    <ul>
                        <li>Who are we?</li>
                        <li>Support Us</li>
                    </ul>
                </div>
                <div className="help">
                    <h3>Help</h3>

                    <ul>
                        <li>Privacy</li>
                        <li>Conditions</li>
                        <li>Blogs</li>
                        <li>FAQs</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
