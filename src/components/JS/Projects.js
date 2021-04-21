import React from 'react';
import '../CSS/Projects.css'

function Projects(){
    return(
        <div className="project-main">
            <h1 className='project-title' id='projects'>Projects in MERN Stack</h1>
            <div className="projects-list">
                <a href="https://shubham-20120.github.io/my-portfolio/" target='_blank' className="project-item">My Portfolio</a>
                <a href="https://shubham-20120.github.io/photo-search-engine/" target='_blank' className="project-item">Photo Search Engine</a>
                <a href="https://shubham-20120.github.io/decideShadow/" target='_blank' className="project-item">Box Shadow Visualiser</a>
            </div>
        </div>
    )
}
export default Projects;