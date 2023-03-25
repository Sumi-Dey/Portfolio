import React, { useState } from 'react';
import './MyWork.css';
import HotelSS from '../../Assets/HotelSS.png';
import SbagsSS from '../../Assets/SbagsSS.png';
import IcoderSS from '../../Assets/IcoderSS.png';
import LibrarySS from '../../Assets/LibrarySS.png';
import PosterSS from '../../Assets/PosterSS.jpg';
import redux from '../../Assets/redux.jpg';
import VS from '../../Assets/VS.png';
import code from '../../Assets/codeSplitting.png';
import { Link } from 'react-router-dom';

const MyWork = () => {
    const [content, setContent] = useState(true)
    const [content2, setContent2] = useState(false)
    const [content3, setContent3] = useState(false)
    const [content4, setContent4] = useState(false)

    const contentFunc1 = () => {
        setContent(true)
        setContent2(false)
        setContent3(false)
        setContent4(false)
    }
    const contentFunc2 = () => {
        setContent(false)
        setContent2(true)
        setContent3(false)
        setContent4(false)
    }
    const contentFunc3 = () => {
        setContent(false)
        setContent2(false)
        setContent3(true)
        setContent4(false)
    }
    const contentFunc4 = () => {
        setContent(false)
        setContent2(false)
        setContent3(false)
        setContent4(true)
    }

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

    window.addEventListener("scroll reveal", reveal);

    return (
        <div className='myWork reveal' id='my-work'>
            <div className='left-myWork'>
                my work
            </div>
            <div className='right-myWork'>
                <div className='work-container'>
                    <div onClick={() => contentFunc1()}>all projects</div>
                    <div onClick={() => contentFunc2()}>website</div>
                    <div onClick={() => contentFunc4()}>blog</div>
                    <div onClick={() => contentFunc3()}>design</div>
                </div>
                <div className={`items ${content ? "work-active-content" : ""}`}>
                    <Link to="https://frontend-swart-alpha.vercel.app/"><img src={HotelSS} alt='...' /></Link>
                    <Link to="https://shopping-cart-eight-liard.vercel.app/"><img src={SbagsSS} alt='...' /></Link>
                    <Link to="https://github.com/Sumi-Dey/iCoder"><img src={IcoderSS} alt='...' /></Link>
                    <Link to="https://github.com/Sumi-Dey/Library"><img src={LibrarySS} alt='...' /></Link>
                    <img src={PosterSS} alt='...' />
                </div>
                <div className={`items ${content2 ? "work-active-content" : ""}`}>
                    <Link to="https://shopping-cart-eight-liard.vercel.app/"><img src={SbagsSS} alt='...' /></Link>
                    <Link to="https://frontend-swart-alpha.vercel.app/"><img src={HotelSS} alt='...' /></Link>
                    <Link to="https://github.com/Sumi-Dey/iCoder"><img src={IcoderSS} alt='...' /></Link>
                    <Link to="https://github.com/Sumi-Dey/Library"><img src={LibrarySS} alt='...' /></Link>
                </div>
                <div className={`items ${content4 ? "work-active-content" : ""}`}>
                    <Link to="https://sumideycodingblog.hashnode.dev/usecallback-vs-usememo"><img src={VS} alt='...' /></Link>
                    <Link to="https://sumideycodingblog.hashnode.dev/code-splitting"><img src={code} alt='...' /></Link>
                    <Link to="https://sumideycodingblog.hashnode.dev/getting-started-with-redux"><img src={redux} alt='...' /></Link>
                </div>
                <div className={`items ${content3 ? "work-active-content" : ""}`}>
                    <img src={PosterSS} alt='...' />
                </div>
            </div>
        </div>
    )
}

export default MyWork
