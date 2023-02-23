import React from 'react';
import './Service.css';
import {IoIosCreate} from 'react-icons/io';
import {MdOutlineDesignServices} from 'react-icons/md';
import {SlMagnifier} from 'react-icons/sl';


const Service = () => {
    
  return (
    <div className='service'>
      <div className='left-service'>
        Services
      </div>
      <div className='right-service'>
        <div className='card'>
            <h4><IoIosCreate size={40} /></h4>
            <h4>Development</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='card'>
            <h4><SlMagnifier size={40} /></h4>
            <h4>SEO</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='card'>
            <h4><MdOutlineDesignServices size={40} /></h4>
            <h4>Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  )
}

export default Service
