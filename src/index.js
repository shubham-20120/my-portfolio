import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/JS/Header';
import AboutMe from './components/JS/AboutMe';
import './index.css';
import Projects from "./components/JS/Projects";
import Skills from './components/JS/Skills';
import ContactForm from './components/JS/ContactForm';
ReactDOM.render(
  <React.StrictMode>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <ContactForm/>
    </React.StrictMode>,
  document.getElementById('root')
);