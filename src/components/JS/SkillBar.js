import React from 'react';
import '../CSS/SkillBar.css';

function SkillBar(props){
    return(
        <div class="skill-bars">
            <div class="bar">
                <div class="info">
                    <span>{props.text}</span>
                </div>
                <div className='test'>
                <div class="progress-line html">
                    <span style={{width:props.width}}></span>
                </div>
                </div>
            </div>
        </div>
    )
}
export default SkillBar;