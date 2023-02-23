import FileSaver from 'file-saver';
import React from 'react';
import './Home.css';
import profileCover from "../../Assets/Cover.png";
import proPic from "../../Assets/proPic.jfif";

const Home = () => {
    const saveFile = () => {
        FileSaver.saveAs(
            process.env.REACT_APP_CLIENT_URL + "public/assets/Sumi's Resume.pdf", "Sumi's Resume.pdf"
        )
    }
    return (
        <div className='home'>
            <div>
                <img src={profileCover} className='proImg' alt='...' />

                <div className='name'>
                    <div><img src={proPic} className='proPic' alt='...' /></div>
                    <div className='details'><span>I'm Sumi Dey, a</span><br />
                        <span>Developer</span></div>
                    <div><button className='cv' onClick={() => saveFile()} >Download CV</button></div>
                </div>
            </div>
        </div>
    )
}

export default Home;
