import React from 'react';
import '../CSS/Projects.css'

function Projects() {
    return (
        <div className="project-main">
            <h1 className='project-title' id='projects'>Projects</h1>
            <div className="projects-list">

                <a href="https://patel-shubham-portfolio.herokuapp.com/" target='_blank' className="project-item">My Portfolio</a>
                <a href="https://notes-0001.web.app/" target='_blank' className="project-item">Personal Notes</a>
                <a href="https://shubham-20120.github.io/photo-search-engine/" target='_blank' className="project-item">Photo Search Engine</a>
                <a href="https://shubham-20120.github.io/decideShadow/" target='_blank' className="project-item">Box Shadow Visualiser</a>
                <a href="https://github.com/shubham-20120/news-app-react" target='_blank' className="project-item">News App</a>
                <a href="https://github.com/shubham-20120/movie-recommendation-using-KNN" target='_blank' className="project-item">Movie Recommendation</a>
            </div>
        </div>
    )
}
export default Projects;