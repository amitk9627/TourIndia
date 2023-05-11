import React, { useState } from 'react'
import './FormStyles.css'
export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function getFormData(e) {
    console.log(name, email, message);
    notify();
    e.preventDefault();
  }
  function notify() {
    alert("Thank you for contacting us");
  }
  return (

    <div className='form'>
      <div>
        <h1>Contact us</h1>
        <form onSubmit={getFormData}>
          <div className='input-form'>
            <label htmlFor='name'>Name : </label>
            <input type='text' name='name' placeholder='Enter Your Name....' value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className='input-form'>
            <label htmlFor='email'>Email : </label>
            <input type='email' name='email' placeholder='Enter Your email....' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className='textArea'>
            <div><label>Your Question</label></div>
            <textarea name='message' cols="40" rows="3" value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>
          <div className='btn'>
            <button type='submit' >Submit</button>
          </div>
        </form>
      </div>
    </div>

  )
}
