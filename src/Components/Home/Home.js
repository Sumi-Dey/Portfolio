import FileSaver from 'file-saver';
import React from 'react';
import './Home.css'

const Home = () => {
    const saveFile = ()=>{
        FileSaver.saveAs(
            process.env.REACT_APP_CLIENT_URL + "public/assets/Sumi's Resume.pdf","Sumi's Resume.pdf"
        )
    }
    return (
        <div className='home'>
            <div>
                <span>I'm Sumi Dey, a</span><br />
                <span>Developer</span>

                <div>
                    <button className='cv' onClick={()=>saveFile()} >Download CV</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
