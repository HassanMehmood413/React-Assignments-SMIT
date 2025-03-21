import React from 'react'
import '../ChooseUs/ChooseUs.css'
import ChooseCard from '../../components/cards/ChooseCard';
import quote from '../../assets/Images/qoute.png'
import slider from '../../assets/Images/slider.png'

export default function ChooseUs() {
    const cardData = [
        {
            name: "Luxury Villa",
            label1: require('../../assets/Images/section3-02.png'),
            label2: require('../../assets/Images/section3-03.png'),
            label3: require('../../assets/Images/section3-04.png')
        },

    ];



    return (
        <div className='chooseus'>

            <div className="chooseus-flex">
                {cardData.map((item, value) => (
                    <ChooseCard
                        key={value}
                        name={item.name}
                        label1={item.label1}
                        label2={item.label2}
                        label3={item.label3}
                    />
                ))}
            </div>

            <img className='quotes' src={quote} alt="Not showing" />
            <p className="quote">Massa semper non rutrum orci facilisi sit. Lectus porta quam a fringilla eget viverra sem. Vulputate massa hendrerit turpis gravida tempor, porttitor.</p>
            <div className="info">
                <div className="text">
                    <p className="authur">HM_Leigons</p>
                    <p className="title">CEO & Founder LEIGONS</p>
                </div>

                <div className="image">
                    <img src={slider} alt="" />
                </div>
            </div>
        </div>

    )
}
