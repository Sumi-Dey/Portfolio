import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u253u13', 'template_oy4o3pf', form.current, 'fzVaCt6e75eRR8929')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='contact'>
            <div className='left-contact'>
                contact
            </div>
            <div className='right-contact'>
                <form ref={form} className='email-container' onSubmit={sendEmail} >
                    <div className='email-inputs'>
                        <div>
                            <input type='text' className='input' placeholder='Your Name' /><br />
                            <input type='email' name='user-email' className='input' placeholder='Your Email' /><br />
                            <input type='text' className='input' placeholder='Your Phone' /><br />
                        </div>
                        <div>
                            <textarea id="subject" name="subject" className='textarea' placeholder="Your messege" />
                        </div>
                    </div>
                    <div><button className='submit'>Submit</button></div>
                </form>
            </div>
        </div>
    )
}

export default Contact;
