import React from 'react';
import './Home.css';
import profileCover from "../../Assets/Cover.png";
import proPic from "../../Assets/proPic.jfif";
import CV from '../../Assets/CV.pdf';
import Typing from 'react-typing-effect'

const Home = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'CV.pdf';
        link.click();
    }

    return (
        <div className='home'>
            <div>
                <img src={profileCover} className='proImg' alt='...' />
                <div className='name'>
                    <div><img src={proPic} className='proPic' alt='...' /></div>
                    <div className='details'><span>I'm Sumi Dey, a</span><br />
                        <span>
                            <Typing speed={90} typingDelay={100}
                                text={['Developer', 'Designer', 'Editor']} />
                        </span>
                    </div>
                    <div>
                        <button className='cv' onClick={handleDownload}> Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
