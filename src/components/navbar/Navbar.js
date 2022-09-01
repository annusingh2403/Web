import React, {useState} from 'react';
import './Navbar.css';
import {GiCrossMark } from 'react-icons/gi';
import {BsThreeDotsVertical } from 'react-icons/bs';
import { FaInstagram, FaFacebookF, FaTwitter, FaGithub, FaHamburger } from 'react-icons/fa';


const Navbar = () => {

    const [show, setShow] = useState(false);
    const [night, setNight] = useState(false);
    

  return (
      <>
          <div className="navbar" className={night ? 'night navbar' : "navbar"}>
              <div className="logo">
                  <h4><a href="/"><img src="https://image.freepik.com/free-photo/fun-3d-illustration-cartoon-kid-with-rain-gear_183364-81071.jpg" alt="" /></a></h4>
              </div>
              <div className= {show ? 'navbar-menu active' : "navbar-menu"}>
                    <div className='cross' onClick={() => setShow(!show)}>
                         <GiCrossMark/>
                    </div>
                  <ul>
                      <li>
                          <a href="/">home</a>
                      </li>
                      <li>
                          <a href="/about">about</a>
                      </li>
                      <li>
                          <a href="/gallery">gallery</a>
                      </li>
                      <li>
                          <a href="/projects">projects</a>
                      </li>
                      <li>
                          <a href="/contact">contact</a>
                      </li>
                  </ul>
              </div>
              <div className="navbar-social-media">
                <ul className="social-media-desktop">
                    <li>
                        <a href="#" target='blank'> <FaInstagram className='insta'/> </a>
                    </li>
                    <li>
                        <a href="#" target='blank'> <FaFacebookF className='facebook'/> </a>
                    </li>
                    <li>
                        <a href="#" target='blank'> <FaTwitter className='twitter'/> </a>
                    </li>
                    <li>
                        <a href="#" target='blank'> <FaGithub className='git' /> </a>
                    </li>
                </ul>
            </div>
              <div className='hamberger'>
                  <div onClick={() => setShow(!show)}>
                      <BsThreeDotsVertical/>
                  </div>
              </div>
          </div>
      </>
  );
};

export default Navbar;
