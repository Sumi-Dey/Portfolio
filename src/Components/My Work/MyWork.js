import React, {useState} from 'react';
import './MyWork.css';
import HotelSS from '../../Assets/HotelSS.png';
import SbagsSS from '../../Assets/SbagsSS.png';
import IcoderSS from '../../Assets/IcoderSS.png';
import LibrarySS from '../../Assets/LibrarySS.png';
import PosterSS from '../../Assets/PosterSS.jpg';

const MyWork = () => {
    const [content,setContent] = useState(true)
    const [content2,setContent2] = useState(false)
    const [content3,setContent3] = useState(false)
    const contentFunc1 = ()=>{
        setContent(true)
        setContent2(false)
        setContent3(false)
    }
    const contentFunc2 = ()=>{
        setContent(false)
        setContent2(true)
        setContent3(false)
    }
    const contentFunc3 = ()=>{
        setContent(false)
        setContent2(false)
        setContent3(true)
    }
    return (
        <div className='myWork' id='my-work'>
            <div className='left-myWork'>
                my work
            </div>
            <div className='right-myWork'>
                <div className='work-container'>
                    <div onClick={()=>contentFunc1()}>all projects</div>
                    <div onClick={()=>contentFunc2()}>website</div>
                    <div onClick={()=>contentFunc3()}>design</div>
                </div>
                <div className={`items ${content?"work-active-content":""}`}>
                  <a href='https://shopping-cart-eight-liard.vercel.app/' target='_blank'><img src={SbagsSS} alt='...' /></a> 
                  <a href='https://frontend-swart-alpha.vercel.app/' target='_blank'><img src={HotelSS} alt='...' /> </a>
                    <a href='https://github.com/Sumi-Dey/iCoder' target='_blank'><img src={IcoderSS} alt='...' /></a>
                    <a href='https://github.com/Sumi-Dey/Library' target='_blank'><img src={LibrarySS} alt='...' /></a>
                    <img src={PosterSS} alt='...' />
                </div>
                <div className={`items ${content2?"work-active-content":""}`}>
                <a href='https://shopping-cart-eight-liard.vercel.app/' target='_blank'><img src={SbagsSS} alt='...' /></a> 
                  <a href='https://frontend-swart-alpha.vercel.app/' target='_blank'><img src={HotelSS} alt='...' /> </a>
                    <a href='https://github.com/Sumi-Dey/iCoder' target='_blank'><img src={IcoderSS} alt='...' /></a>
                    <a href='https://github.com/Sumi-Dey/Library' target='_blank'><img src={LibrarySS} alt='...' /></a>
                </div>
                <div className={`items ${content3?"work-active-content":""}`}>
                <img src={PosterSS} alt='...' />
                </div>
            </div>
        </div>
    )
}

export default MyWork
