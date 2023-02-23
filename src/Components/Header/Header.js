import React, { useEffect, useState, useRef } from 'react';
import './Header.css';
// import {FaBars} from 'react-icons/fa'

const Header = () => {
  const [menu,setMenu] = useState(false);
  const menuFunc = ()=>{
    setMenu(true);
  }
  const [scroll,setScroll] = useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      setScroll(window.scrollY>20);
    })
  },[]);
  useEffect(()=>{
    document.addEventListener("click",handleOutside,true)
  },[])
  const refOne = useRef(null);
  const handleOutside = (e)=>{
    if (!refOne.current.contains(e.targer)) {
      setMenu(false)
    }
  }
  return (
    <div className={scroll?"header scrollingHeader":"header nonScrollHeader"}>
        <div className='left-header'>Portfolio</div>
        <div className='right-header'>
              <div>Home</div>
              <div>About</div>
              <div>Services</div>
              <div>My Work</div>
              <div>Contact Us</div>
        </div>
    </div>
  )
}

export default Header;
