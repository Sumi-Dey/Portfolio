import React from 'react';
import './Footer.css';
import {BsFacebook} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <Link to='/'><BsFacebook size={30} style={{padding:"0 1rem",color:"white"}} /></Link>
        <Link to='https://www.linkedin.com/in/sumi-dey-01332a234/'><AiFillLinkedin size={30} style={{padding:"0 1rem",color:"white"}}/></Link>
        <Link to='https://github.com/Sumi-Dey'><BsGithub size={30} style={{padding:"0 1rem",color:"white"}}/></Link>
        <Link to='/'><AiFillInstagram size={30} style={{padding:"0 1rem",color:"white"}}/></Link>
      </div>
    </div>
  )
}

export default Footer;
