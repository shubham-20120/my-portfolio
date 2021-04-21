import React, { useState } from "react";
import '../CSS/ContactForm.css'

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    console.log('started waiting for response.json')
    let result = await response.json();
    console.log('result for response.json: ', result);
    alert(result.status);
  };
  return (
    <div className='contact-main'>
    <form onSubmit={handleSubmit} className='contact-form'>
    <div className="contact-upper-text">Contact/Hire Me</div>
      <div className='contact-name'>
        <label htmlFor="name" className='contact-text'>Name <span className='contact-asterisk'>*</span></label>
        <input className='contact-input' type="text" id="name" required />
      </div>
      <div className='contact-email'>
        <label htmlFor="email" className='contact-text'>Email <span className='contact-asterisk'>*</span></label>
        <input className='contact-input' type="email" id="email" required />
      </div>
      <div className='contact-name'>
        <label htmlFor="name" className='contact-text'>Contact No.</label>
        <input placeholder='optional' className='contact-input' type="text" id="name" />
      </div>
      <div className='contact-message'>
        <label htmlFor="message" className='contact-text'>Message <span className='contact-asterisk'>*</span></label>
        <textarea className='contact-textarea' id="message" required />
      </div>
      <div className="contact-btn-div"><button type="submit" className='contact-btn'>{status}</button>
      </div>
    </form>
    </div>
  );
};

export default ContactForm;