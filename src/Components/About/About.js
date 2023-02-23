import React, { useState } from 'react';
import './About.css';

const About = () => {
    const [option, setOption] = useState(true)
    const [option2, setOption2] = useState(false)
    const [option3, setOption3] = useState(false)
    const optionFunc = () => {
        setOption(true)
        setOption2(false);
        setOption3(false);
    }
    const optionFunc2 = () => {
        setOption2(true);
        setOption(false);
        setOption3(false);
    }
    const optionFunc3 = () => {
        setOption3(true);
        setOption2(false);
        setOption(false);
    }
    return (
        <div className='about'>
            <div className='left-about'>
                about me
            </div>
            <div className='right-about'>
                <p>Hello, I am a Web Developer with strong knowledge of HTML,CSS,Javascript, React JS, Node JS, MongoDB, Bootstrap and I am also familiar with SCSS and Firebase.During my courses I have completed several projects that demonstrate my skills in web development.I am highly motivated, detail-oriented, and enjoy collaborating with others to bring creative ideas to life. I am excited to begin my career as a web developer and look forward to the opportunity to work with a team of professionals to build amazing web applications that solve real-world problems.</p>
                <div className='option-titles'>
                    <p className='option-links' onClick={() => optionFunc()}>Skills</p>
                    <p className='option-links' onClick={() => optionFunc2()}>Experience</p>
                    <p className='option-links' onClick={() => optionFunc3()}>Education</p>
                </div>
                <div className={`option-contents ${option ? "active-content" : ""}`}  >
                    <ul>
                        <li><span>HTML</span><br />
                            <div className='container'>
                                <div className='skill html'></div>
                            </div>
                        </li>
                        <li><span>CSS</span><br />
                        <div className='container'>
                                <div className='skill css'></div>
                            </div>
                        </li>
                        <li><span>Javascript</span><br />
                        <div className='container'>
                                <div className='skill JS'></div>
                            </div>
                        </li>
                        <li><span>React</span><br />
                        <div className='container'>
                                <div className='skill react'></div>
                            </div>
                        </li>
                        <li><span>Redux</span><br />
                        <div className='container'>
                                <div className='skill redux'></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={`option-contents ${option2 ? "active-content" : ""}`}>
                    <ul>
                        <li><span>iMerit</span><br />Back Office Executive<br />11/2020 to 06/2022</li>
                    </ul>

                </div>
                <div className={`option-contents ${option3 ? "active-content" : ""}`}>
                    <ul>
                        <li><span>Calcutta University</span><br/>BSc. Hons.<br />2017-2020</li>
                        <li><span>S.S.K.M</span><br/>Completed Higher Secondary Education<br />2017-2020</li>
                        <li><span>S.S.K.M</span><br/>Completed Secondary Education<br />2015-2017</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
