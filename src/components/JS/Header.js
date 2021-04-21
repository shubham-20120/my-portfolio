import React, { useState } from 'react';
import myPhoto from '../../Images/shubham.jpg'
import '../CSS/Header.css';
import '../CSS/Navbar.css';
import Typist from 'react-text-typist';
import { Link, animateScroll as scroll } from "react-scroll";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar' >
            <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose onClick={showSidebar}/>
                </Link>
            </li>
            {SidebarData.map((item, index) => {
                return (
                <li key={index} className={item.cName}>
                    <Link
                        activeClass="active"
                        to={item.path}
                        spy={true}
                        smooth={true}
                        offset={-15}
                        duration={500}
                        onClick={showSidebar}
                    >{item.icon}
                    <span className='hamburger-text'>{item.title}</span></Link>
                </li>
                );
            })}
            </ul>
        </nav>
        </IconContext.Provider>
</>
    )
}

function Header(){
    const sentences = ['MERN Stact Developer', 'Flutter Developer', 'ML Enthusiast', 'Tech Blogger'];
    
    return(
        <>
        <div className="humberger">
            {Navbar()}
        </div>
        <div className="main-header">
            <div className="photoSection">
                <img className="myPhoto" src={myPhoto} alt="myPhoto"/>
            </div>
            <div className="textSection">
                <p>Hello !</p>
                <p>I am <span>Shubham Patel</span></p>
                <p>I am a <Typist className='typist' sentences={sentences} loop={true} cursorBlinkSpeed='1000' typingSpeed='100' deletingSpeed='50' pauseTime='2000'/></p>
            </div>
            
        </div>
        <div className="nav-header">
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-15}
                duration={500}
            ><button className='header-btn'>About Me</button></Link>
            <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-15}
                duration={500}
            ><button className='header-btn'>Skills</button></Link>
            <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-15}
                duration={500}
            ><button className='header-btn'>Projects</button></Link>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-15}
                duration={500}
            ><button className='header-btn'>Contact Me</button></Link>
        </div>

        </>
    )
}

export default Header;