import React from 'react';
import photo from '../../Images/aboutMe.png';
import '../CSS/AboutMe.css';
function AboutMe(){
    return(
        <div className="main-about" id='about'>
            <div className="photo-section-about">
                <img className='photo-about' src={photo} alt="About Me Photo"/>
            </div>
            <div className="text-about">
                <p className='p-about'>My self Shubham Patel, student of Computer Science and Engineering at National Institute of Technology(NIT), Jalandhar. </p>
                <hr/>
                <p className='p-about'>I have completed my SSC and HSC from Vadodara, Gujarat, with 90% and 80% in SSC and HSC respectively.</p>
                
                <hr/>
                <p className="p-about">
                    Coding, driving, blogging and travelling are my hobbies.
                </p><hr/>
                <p className="p-about">
                    I speak mainly native languages, Hindi and Gujarati. Apart from that, I can communicate in English as well.
                </p>
                <hr/>
                <p className="p-about">
                    I have achieved 5⭐ in C++ and 5⭐ in Problem Solving on <a href="https://www.hackerrank.com/shubham_20120" className='a-about' target='_blank'>Hackerrank</a>.
                    I am a Competitive Programmer with 3⭐ on Codechef.
                    Apart from that, I am a MERN and Flutter developer.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
