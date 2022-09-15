import React, {useState} from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaGithub, FaHamburger } from 'react-icons/fa';
import './Home.css';

const Home = () => {

    const [night, setNight] = useState(false);

  return (
    <>

    <div className={night ? 'night home' : "home"}>
        <div className='home-left'>
            <h5>__ HELLO</h5>
            <h3>I'M ANNU SINGH </h3>
            <p>I'm a Web Developer. My expertise is to create and design Websites.</p>
            <div className='home-button'>
                <button className='button-one'><a href="/projects">MY WORK</a></button>
                <button className='button-two'><a href="/contact">HIRE ME</a></button>
            </div>
        </div>
        <div className='home-right'>
            {night ? <img src="https://www.finetoshine.com/wp-content/uploads/2020/09/1599945645_140_notitle.jpg" alt="" /> : <img style={{width: '70%'}} src="https://image.freepik.com/free-photo/fun-3d-illustration-cartoon-kid-with-rain-gear_183364-81185.jpg" alt="" />}
            
        </div>
    </div>

    <div className="social-media">
        <ul className="social-media-desktop">
            <li>
                <a href="https://amzn.to/34WF745" target='blank'> <FaInstagram className='insta'/> </a>
            </li>
            <li>
                <a href="#" target='blank'> <FaFacebookF className='facebook'/> </a>
            </li>
            <li>
                <a href="#" target='blank'> <FaTwitter className='twitter'/> </a>
            </li>
            <li>
                <a href="#" target='blank'> <FaGithub className={night ? 'git-night' : 'git'} /> </a>
            </li>
        </ul>
    </div>

    <div className='dark'>
        <button onClick={() => setNight(!night)}>
            {night ? 'Light' : 'Dark'}
        </button>
    </div>
    
    </>
  )
};

export default Home;
