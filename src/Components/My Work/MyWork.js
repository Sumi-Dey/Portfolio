import React, {useState} from 'react';
import './MyWork.css';
import HotelSS from '../../Assets/HotelSS.png';
import SbagsSS from '../../Assets/SbagsSS.png';

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
        <div className='myWork'>
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
                    <img src={SbagsSS} alt='...' />
                    <img src={HotelSS} alt='...' />
                    <img src='https://img.freepik.com/free-vector/various-screens-violet-public-transport-mobile-app_23-2148704862.jpg?w=2000' alt='...' />
                    <img src='https://w3layouts.com/wp-content/uploads/2020/06/mastery.jpg' alt='...' />
                    <img src='https://cdn.dribbble.com/users/1756963/screenshots/17359662/media/1a020aaaf8e1dfabf63ecef866a3d3ab.png?compress=1&resize=400x300' alt='...' />
                </div>
                <div className={`items ${content2?"work-active-content":""}`}>
                    <img src={HotelSS} alt='...' />
                    <img src={SbagsSS} alt='...' />
                </div>
                <div className={`items ${content3?"work-active-content":""}`}>
                    <img src={HotelSS} alt='...' />
                    <img src='https://img.freepik.com/free-vector/various-screens-violet-public-transport-mobile-app_23-2148704862.jpg?w=2000' alt='...' />
                    <img src='https://cdn.dribbble.com/users/1756963/screenshots/17359662/media/1a020aaaf8e1dfabf63ecef866a3d3ab.png?compress=1&resize=400x300' alt='...' />
                </div>
            </div>
        </div>
    )
}

export default MyWork
