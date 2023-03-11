import React from 'react';
import './Service.css';
import {IoIosCreate} from 'react-icons/io';
import {MdOutlineDesignServices} from 'react-icons/md';
import {SlMagnifier} from 'react-icons/sl';


const Service = () => {
    
  return (
    <div className='service' id='services'>
      <div className='left-service'>
        Services
      </div>
      <div className='right-service'>
        <div className='card'>
            <h4><IoIosCreate size={40} /></h4>
            <h4>Development</h4>
            <p>In Development I have developed many projects with Javascript and I have strong knowledge in this language.</p>
        </div>
        <div className='card'>
            <h4><SlMagnifier size={40} /></h4>
            <h4>Blog</h4>
            <p>I have authored several blog articles on various topics of React JS that showcase my writing skills and knowledge in my field.</p>
        </div>
        <div className='card'>
            <h4><MdOutlineDesignServices size={40} /></h4>
            <h4>Design</h4>
            <p>I have created the UI Design before developed the websites and I have also created some other design of poster.</p>
        </div>
      </div>
    </div>
  )
}

export default Service
