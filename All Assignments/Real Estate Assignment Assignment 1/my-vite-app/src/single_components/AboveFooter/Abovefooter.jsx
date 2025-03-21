import React from 'react'
import '../AboveFooter/Abovefooter.css'
import secondlast from '../../assets/Images/secondlast.png'

export default function Abovefooter() {
    return (
        <div className="above-container">
            <img src={secondlast} alt="Not showing" />
            <div className="content">
                <h1>Let's Simply Begin With Rentiz</h1>
            </div>

            <div className="info">
                <p>Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue justo. Nibh laoreet volutpat quis velit. Blandit aliquam donec sed morbi congue eget lorem viverra porta id lobortis.</p>
                <button className='btn'>Get Started</button>
            </div>
        </div>

    )
}
