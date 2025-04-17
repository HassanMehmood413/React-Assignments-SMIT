import React, { useState } from "react";
// import "./SimpleForm.css"; // Import the CSS
import './App.css'
import * as yup from "yup"; // Import yup

export default function SimpleForm() {

  const [ErrorMessage, setErrorMessage] = useState("");


  const contactvalidator = yup.object({
    name: yup.string().required("Name is required").min(3).max(12),
    email: yup.string().email("Email is invalid").required("Email is required"),
    message: yup.string().required("Message is required"),
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handlesubmit = async (e) => {
    e.preventDefault(); // ✅ add this line
    try {
      await contactvalidator.validate(formData);
      setErrorMessage('');
      alert("Form submitted!");
      console.log(formData);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev,[name]: value}));
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" onClick={handlesubmit}>
          Submit
        </button>
        {ErrorMessage && <p style={{color:'red'}}>{ErrorMessage}</p>}
      </form>
    </div>
  );
}
