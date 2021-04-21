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
                <p className='p-about'>My self Shubham Patel. I am a MERN stack and Flutter Developer. I also work on Machine Learning algorithms. I am pursuing my Bachelor of Technology Degree, honors in Computer Science and Engineering, from one of the renowned college of India - National Institute of Technology, Jalandhar</p><hr/>
                <p className="p-about">
                    I have achieved 5⭐ in C++ and 5⭐ in Problem Solving on <a href="https://www.hackerrank.com/shubham_20120" className='a-about' target='_blank'>Hackerrank</a>.
                    I am a Competitive Programmer with 3⭐ on Codechef.
                </p>
                <hr/>
                <p className="p-about">
                    I love to code, driving and travelling.  
                </p><hr/>
                <p className="p-about">
                    I speak English, Hindi and Gujarati languages.
                </p>
                
            </div>
        </div>
    );
}

export default AboutMe;
