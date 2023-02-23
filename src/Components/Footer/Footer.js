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
        <a href='/'><BsFacebook size={30} style={{padding:"0 1rem",color:"white"}} /></a>
        <a href='https://www.linkedin.com/in/sumi-dey-01332a234/' target='_blank'><AiFillLinkedin size={30} style={{padding:"0 1rem",color:"white"}}/></a>
        <a href='https://github.com/Sumi-Dey' target='_blank'><BsGithub size={30} style={{padding:"0 1rem",color:"white"}}/></a>
        <AiFillInstagram size={30} style={{padding:"0 1rem",color:"white"}}/>
      </div>
    </div>
  )
}

export default Footer
