'use client';

import { useState } from 'react';
import '../styles/form.css'

function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const { name, email, message } = formData;
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Message has been sent successfully.')
        setFormData({ name: '', email: '', message: '' });
      };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <label>Name:</label>
                    <input
                        autoFocus
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        required
                        className='input'
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                        className='input'
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={handleChange}
                        required
                        className='input'
                        rows={5}
                    />
                </div>
                <button type="submit" className='button'>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm