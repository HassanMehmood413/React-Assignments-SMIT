import React from 'react'
import help1 from '../../assets/Images/help1.png'
import help2 from '../../assets/Images/help2.png'
import '../NeedHelp/Needhelp.css'

export default function Needhelp() {
    return (
        <div>
            <div className="help-container">
                <div className="images">
                    <img src={help1} alt="" />
                    <img src={help2} alt="" />
                </div>
                <div className="content-info">
                    <h1>We Help People To Find Homes</h1>
                    <p>Mauris orci donec blandit maecenas. Orci lorem purus porttitor massa consectetur. Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue justo. Nibh laoreet volutpat quis velit. Blandit aliquam donec sed morbi congue eget lorem viverra porta id lobortis.</p>
                    <button className="btn">
                        Get In Touch
                    </button>
                </div>
            </div>
        </div>
    )
}
