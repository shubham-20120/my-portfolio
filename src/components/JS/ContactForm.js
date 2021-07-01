import React, { useState } from "react";
import '../CSS/ContactForm.css'

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    // const { name, email, message } = e.target.elements;
    // let details = {
    //   name: name.value,
    //   email: email.value,
    //   message: message.value,
    // };
    // let response = await 
    fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message
      }),
    })
      .then(res => res.json())
      .then((res) => {
        if (res.error) {
          alert('error from fetching')
          console.log('====================================');
          console.log(res.error);
          console.log('====================================');
          return
        }
        alert(res.status);

      })
    setStatus("Submit");
    // console.log('response: ------ ', response);
    // console.log('started waiting for response.json')
    // let result = response.json();
    // console.log('result for response.json: ', result);
  };
  return (
    <div className='contact-main' id='contact'>
      <form onSubmit={handleSubmit} className='contact-form'>
        <div className="contact-upper-text">Contact/Hire Me</div>
        <div className='contact-name'>
          <label htmlFor="name" className='contact-text'>Name <span className='contact-asterisk'>*</span></label>
          <input value={name} onChange={(e) => { setName(e.target.value) }} className='contact-input' type="text" id="name" required />
        </div>
        <div className='contact-email'>
          <label htmlFor="email" className='contact-text'>Email <span className='contact-asterisk'>*</span></label>
          <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='contact-input' type="email" id="email" required />
        </div>
        {/* <div className='contact-name'>
        <label htmlFor="name" className='contact-text'>Contact No.</label>
        <input placeholder='optional' className='contact-input' type="text" id="name" />
      </div> */}
        <div className='contact-message'>
          <label htmlFor="message" className='contact-text'>Message <span className='contact-asterisk'>*</span></label>
          <textarea value={message} onChange={(e) => { setMessage(e.target.value) }} className='contact-textarea' id="message" required />
        </div>
        <div className="contact-btn-div"><button type="submit" className='contact-btn'>{status}</button>
        </div>
        {/* <div className="finalmessage">It will take some time to send message, Hold On!</div> */}
      </form>
    </div>
  );
};

export default ContactForm;