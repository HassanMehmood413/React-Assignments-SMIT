import React from 'react'

export default function ChooseCard(props) {
    return (
        <div>
            <div className="choose-card">
                <h1>Why Choose Us</h1>
                <ul>
                    <li className="cardslogo">
                        <div className="licontent">
                            <img src={props.label1} alt="Not showing" />
                            <h3>{props.name}</h3>
                            <p>{props.description}</p>
                        </div>
                    </li>
                    <li className="cardslogo">
                        <div className="licontent">

                            <img src={props.label2} alt="Not showing" />
                            <h3>{props.name}</h3>
                            <p>{props.description}</p>
                        </div>
                    </li>
                    <li className="cardslogo">
                        <div className="licontent">

                            <img src={props.label3} alt="Not showing" />
                            <h3>{props.name}</h3>
                            <p>{props.description}</p>
                        </div>
                    </li>
                </ul>

            </div>

        </div>
    )
}
