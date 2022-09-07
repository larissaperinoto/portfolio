import React from 'react';
import '../css/projects.css';
import Nikel from '../img/Nikel.png';

export default function Projects() {
  return (
    <section id="projects">
      <div class="projects-container">
        <div class="project-container-menu">
          <div class="menu">
            <div><i class="fa-regular fa-heart"></i></div>
            <div><i class="fa-regular fa-circle-left"></i></div>
            <div><i class="fa-regular fa-circle-right"></i></div>
            <div><i class="fa-regular fa-window-minimize"></i></div>
            <div><i class="fa-regular fa-arrows-up-down-left-right"></i></div>
          </div>
          <img src={ Nikel } alt="Projeto Nikel" class="image" />
        </div>
      </div>
      <div class="project-background">
      </div>
      <p class="whiteTextColor">{`{`} <span>projects</span>{`}`}</p>
    </section>
  );
}
