import React, {useState} from 'react';
import '../App.css';
import {Button} from './Button';
import '../styles/_heroSection.scss';
import homepic from '../home-pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileDownload} from '@fortawesome/free-solid-svg-icons';
import github_icon from '../vectors/github_icon.svg';
import linkedin_icon from '../vectors/linkedin_icon.svg'

function HeroSection() {
    const [mobile, setMobile] = useState(false);
    const showMobile = () =>{
        let mounted = true;
        if (window.innerWidth <= 960){
            if(mounted){
                setMobile(true);
            }
        }else{
            setMobile(false);
        }
        return () => mounted = false;
    };

    window.addEventListener('resize', showMobile);

    return(
        <div className = "hero-container">
            <div className = "greeting-container">
            <h1>Hi,{!mobile && <br/>} I'm Jack Frumkes</h1>
            <p>I like to design websites that are creative, unique and expressive.</p>
            <Button
                className='btns'
                buttonStyle='btn--download'
                buttonSize='btn--large'
            >
                <FontAwesomeIcon icon={faFileDownload} fixedWidth/> Download Resume
            </Button>
            <div className="SMIcons"> {/*Social media Icons*/}
                <a href="https://github.com/jfrumk"><img src={github_icon} alt="githubIcon"/></a>
                <a href="https://www.linkedin.com/in/jack-frumkes-b9926a19a/"><img src={linkedin_icon} alt="linkedinIcon"/></a>
            </div>
            </div>
            <div className="photo-container">
                <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg" id="star1">
                <path d="M14.0984 11.7979C14.0984 11.7979 0.934835 13.9581 0.059244 18.86C-0.816347 23.762 8.3032 32.5689 8.3032 32.5689C8.3032 32.5689 4.8611 46.3788 10.3438 49.518C14.2617 51.7612 25.6889 45.4468 25.6889 45.4468C25.6889 45.4468 35.924 52.3724 40.9525 48.8533C44.7888 46.1685 42.8298 32.5689 42.8298 32.5689C42.8298 32.5689 51.997 22.6819 50.9105 18.86C49.824 15.0382 36.5448 11.7979 36.5448 11.7979C36.5448 11.7979 30.0966 0 25.3625 0C20.6283 0 14.0984 11.7979 14.0984 11.7979Z" fill="#FFC062"/>
                </svg>
                <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg" id="star2">
                <path d="M14.0984 11.7979C14.0984 11.7979 0.934835 13.9581 0.059244 18.86C-0.816347 23.762 8.3032 32.5689 8.3032 32.5689C8.3032 32.5689 4.8611 46.3788 10.3438 49.518C14.2617 51.7612 25.6889 45.4468 25.6889 45.4468C25.6889 45.4468 35.924 52.3724 40.9525 48.8533C44.7888 46.1685 42.8298 32.5689 42.8298 32.5689C42.8298 32.5689 51.997 22.6819 50.9105 18.86C49.824 15.0382 36.5448 11.7979 36.5448 11.7979C36.5448 11.7979 30.0966 0 25.3625 0C20.6283 0 14.0984 11.7979 14.0984 11.7979Z" fill="#FFC062"/>
                </svg>
                <img src={homepic} alt="home_pic" id="photo" draggable="false"/>
            </div>
        </div>
    );
};

export default HeroSection;