import React, { useEffect, useState, useRef } from 'react';
import './Header.css';
import {FaBars} from 'react-icons/fa'

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
    <div className={scroll?"bg-color header":"bg-white header"}  style={{position:"fixed"}} >
      <div className='left-header'><span>Portfolio</span></div>
      <div className='right-header'>
        <ul className={menu?' active':'header-menu'}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>My Work</li>
            <li>Contact Us</li>
        </ul>
          <div className='icon' ref={refOne} ><FaBars size={20} onClick={()=>menuFunc()} /></div>  
      </div>
    </div>
  )
}

export default Header;
