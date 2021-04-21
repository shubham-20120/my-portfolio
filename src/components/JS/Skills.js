import React from 'react';
import '../CSS/Skills.css';
import '../CSS/SkillBar.css';
import photo from '../../Images/skills.png';
function Skills(){
    return(
        <div className="main-skills" id='skills'>
            <div className="top-img-skills">
                <img src={photo} alt="" className="skill-photo"/>
            </div>
            <div className="left-section-skills">

                <div className="text-skill">
                    <p className='skill-inner-text'>
                        I have more than two years of experience in Computer World.
                        I can code in programming languages like C++, Python and Javascript. I have experience in MERN stack technologies, Flutter Development and currently exploring the field of Artificial Intelligence algorithms.
                    </p>
                </div>

                <div class="skill-bars">

                            <div class="bar">
                                <div class="info">
                                    <span>MERN Stack Development</span>
                                </div>
                                <div class="progress-line mern html">
                                    <span style={{width:'95%'}}></span>
                                </div>
                            </div>

                            <div class="bar">
                                <div class="info">
                                    <span>Flutter Development</span>
                                </div>
                                <div class="progress-line flutter mern html">
                                    <span style={{width:'45%'}}></span>
                                </div>
                            </div>

                            <div class="bar">
                                <div class="info">
                                    <span>C++</span>
                                </div>
                                <div class="progress-line cpp mern html">
                                    <span style={{width:'80%'}}></span>
                                </div>
                            </div>

                            <div class="bar">
                                <div class="info">
                                    <span>Python</span>
                                </div>
                                <div class="progress-line python mern html">
                                    <span style={{width:'85%'}}></span>
                                </div>
                            </div>

                            <div class="bar">
                                <div class="info">
                                    <span>Machine Learning</span>
                                </div>
                                <div class="progress-line ml html">
                                    <span style={{width:'60%'}}></span>
                                </div>
                            </div>
                        </div> 

                <div className="text-skill">
                        <p className='skill-inner-text'>
                            I have Interpersonal skills,
                            <ul className='sub'>
                                <li>Team Maganement and Team Work</li>
                                <li>Work Ethics</li>
                                <li>Good Listening Skill</li>
                                <li>Positive Attitude</li>
                                <li>Self Confidence</li>
                            </ul>
                        </p>
                </div>
            </div>
            <div className="right-img-skill">
                <img src={photo} alt="" className="skill-photo"/>
            </div>
                
        </div>

    )
}
export default Skills;