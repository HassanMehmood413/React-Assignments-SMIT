import React, { useState } from 'react'
import '../popular_residance/PopularResidance.css'
import Residancecards from '../../components/cards/Residancecards.jsx'

export default function PopularResidance() {
    const cardData = [
        {
            image: require('../../assets/Images/card1.png'),
            name: "Luxury Villa",
            location: "Los Angeles, CA",
            label1: require('../../assets/Images/label1.png'),
            label2: require('../../assets/Images/label2.png'),
            label3: require('../../assets/Images/label3.png')
        },
        {
            image: require('../../assets/Images/card2.png'),
            name: "Modern Apartment",
            location: 'Lahore ',
            label1: require('../../assets/Images/label1.png'),
            label2: require('../../assets/Images/label2.png'),
            label3: require('../../assets/Images/label3.png')
        },
        {
            image: require('../../assets/Images/card3.png'),
            name: "Beach House",
            location: "Miami, FL",
            label1: require('../../assets/Images/label1.png'),
            label2: require('../../assets/Images/label2.png'),
            label3: require('../../assets/Images/label3.png')
        },
        {
            image: require('../../assets/Images/card3.png'),
            name: "Beach House",
            location: "Miami, FL",
            label1: require('../../assets/Images/label1.png'),
            label2: require('../../assets/Images/label2.png'),
            label3: require('../../assets/Images/label3.png')
        },
        {
            image: require('../../assets/Images/card3.png'),
            name: "Beach House",
            location: "Miami, FL",
            label1: require('../../assets/Images/label1.png'),
            label2: require('../../assets/Images/label2.png'),
            label3: require('../../assets/Images/label3.png')
        },
    ];


    const [index, setIndex] = useState(0);
    const itemsPerPage = 3; // Number of visible cards

    const nextCards = () => {
        if (index + itemsPerPage < cardData.length) {
            setIndex(index + 1); // Move one step right
        }
    };

    const prevCards = () => {
        if (index > 0) {
            setIndex(index - 1); // Move one step left
        }
    };



    return (
        <div className='popular-residance'>
            <div className="popular-residance2">

                <button className="left-btn" onClick={prevCards} disabled={index === 0}>←</button>
                <div className="residance-flex">
                    {cardData.slice(index, index + itemsPerPage).map((item, value) => (
                        <Residancecards
                            key={value}
                            image={item.image}
                            name={item.name}
                            location={item.location}
                            label1={item.label1}
                            label2={item.label2}
                            label3={item.label3}
                        />
                    ))}
                </div>
                <button className="right-btn" onClick={nextCards} disabled={index + itemsPerPage >= cardData.length}>→</button>
            </div>
            <button className="click">View All Properties</button>
        </div>
    )
}
