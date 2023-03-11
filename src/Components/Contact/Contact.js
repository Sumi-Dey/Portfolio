import React, {useRef} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hkxs2dg', 'template_oy4o3pf', form.current, 'fzVaCt6e75eRR8929')
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
                <div>
                <div>
                    <form ref={form} className='email-container' onSubmit={sendEmail} >
                        <input type='text' className='input' placeholder='Your Name' /><br />
                        <input type='email' name='user-email' className='input' placeholder='Your Email' /><br />
                        <input type='text' className='input' placeholder='Your Phone' /><br />
                        {/* <button className='submit'>Submit</button> */}
                    </form>
                </div>
                <div>
                    <textarea id="subject" name="subject" className='textarea' placeholder="Your messege" />
                </div>
                </div>
                <div><button className='submit'>Submit</button></div>
            </div>
        </div>
    )
}

export default Contact;
