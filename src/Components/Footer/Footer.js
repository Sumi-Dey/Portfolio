import React from 'react';
import './Footer.css';
import {BsFacebook} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <BsFacebook size={30} style={{padding:"0 1rem",color:"white"}} />
        <AiFillLinkedin size={30} style={{padding:"0 1rem",color:"white"}}/>
        <BsGithub size={30} style={{padding:"0 1rem",color:"white"}}/>
        <AiFillInstagram size={30} style={{padding:"0 1rem",color:"white"}}/>
      </div>
    </div>
  )
}

export default Footer
