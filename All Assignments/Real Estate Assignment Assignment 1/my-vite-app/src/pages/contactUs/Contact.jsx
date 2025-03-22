import React, { useState } from 'react'

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [contacts, setContacts] = useState([]);

    const handlesubmit = (event) => {
        event.preventDefault()
        console.log('Email', email)
        console.log('Name', name)
        console.log('message', message)
        console.log('phone', phone)

        const contact = {
            name: name,
            email: email,
            message: message,
            phone: phone
        }
        setContacts([...contacts, contact])


    }



    return (
        <div>
            <div className="contact-container">
                <div className="contact-content">
                    <div className="contact-form">
                        <h1>Contact Us</h1>
                        <p>We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.</p>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <textarea id="number" onChange={(e) => setPhone(e.target.value)} placeholder="Enter your message"></textarea>
                        </div>
                        <button type="submit" onClick={handlesubmit}>Send Message</button>

                        {[contacts.map((value, index) => {
                            return <li key={index}>
                                <p>{value.name}</p>
                                <p>{value.email}</p>
                                <p>{value.message}</p>
                                <p>{value.phone}</p>
                            </li>
                        })]}
                    </div>
                </div>
            </div>

        </div>
    )
}
