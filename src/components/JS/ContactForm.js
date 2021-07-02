import React, { useState } from "react";
import '../CSS/ContactForm.css'
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  init("user_RW8PaD2HqlcazkRDRZtRe");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending ...")
    var templateParams = {
      name: name,
      email: email,
      message: message
    };

    emailjs.send('service_nk5iptp', 'template_6r8c12l', templateParams)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Details sent');
        setStatus("Sent")
      }, function (error) {
        alert('Failed to send Email :(');
        setStatus("Submit")
        console.log('FAILED...', error);
      });
  };
  return (
    <div className='contact-main' id='contact'>
      <form className='contact-form'>
        <div className="contact-upper-text">Contact/Hire Me</div>
        <div className='contact-name'>
          <label htmlFor="name" className='contact-text'>Name <span className='contact-asterisk'>*</span></label>
          <input value={name} onChange={(e) => { setName(e.target.value) }} className='contact-input' type="text" id="name" required />
        </div>
        <div className='contact-email'>
          <label htmlFor="email" className='contact-text'>Email <span className='contact-asterisk'>*</span></label>
          <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='contact-input' type="email" id="email" required />
        </div>
        <div className='contact-message'>
          <label htmlFor="message" className='contact-text'>Message <span className='contact-asterisk'>*</span></label>
          <textarea value={message} onChange={(e) => { setMessage(e.target.value) }} className='contact-textarea' id="message" required />
        </div>
        <div className="contact-btn-div"><button onClick={handleSubmit} type="submit" className='contact-btn'>{status}</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;