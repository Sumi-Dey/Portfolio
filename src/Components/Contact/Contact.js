import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import {AiFillCloseCircle} from 'react-icons/ai';

const Contact = () => {
    const [message,setMessage] = useState(false)
    const [error,setError] = useState(false)
     const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID)
            .then((result) => {
                setMessage(true);
            }, (error) => {
                setError(true);
            });

        e.target.reset();
    }
    
    return (
        <div className='contact'>
            {message && <div className='alert'>You successfuly send the message<div className='close' onClick={()=>setMessage(false)}><AiFillCloseCircle /></div></div>}
            {error && <div className='alert'>Sorry there is some error please try once<div className='close' onClick={()=>setError(false)}><AiFillCloseCircle /></div></div>}
            <div className='left-contact'>
                contact
            </div>
            <div className='right-contact'>
                <form ref={form} className='email-container' onSubmit={sendEmail} >
                    <div className='email-inputs'>
                        <div>
                            <input type='text' name='user_name' className='input' placeholder='Your Name' required /><br />
                            <input type='email' name='user_email' className='input' placeholder='Your Email' /><br />
                            <input type='text' className='input' placeholder='Your Phone' name='user_number' /><br />
                        </div>
                        <div>
                            <textarea type='message' name="message" className='textarea' placeholder="Your messege" />
                        </div>
                    </div>
                    <div><button className='submit' value="Send">Submit</button></div>
                </form>
            </div>
        </div>
    )
}

export default Contact;
