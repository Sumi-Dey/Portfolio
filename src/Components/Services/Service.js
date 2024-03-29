import React from 'react';
import './Service.css';
import { IoIosCreate } from 'react-icons/io';
import { MdOutlineDesignServices } from 'react-icons/md';
import { SlMagnifier } from 'react-icons/sl';


const Service = () => {

  const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);


  return (
    <section>
      <div className='service reveal' id='services'>
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
    </section>
  )
}

export default Service
