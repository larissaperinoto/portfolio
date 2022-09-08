import React from 'react';

import { data } from '../services/projectsData';
import '../css/projects.css';

export default function Projects() {
  return (
    <section id="projects">
      <ul className="projects-container">
          {
            data.map((project, index) => (
              <li className="slide" key={ index }>
                <div className="menu">
                  <div><i className="fa-regular fa-heart"></i></div>
                  <div><i className="fa-regular fa-circle-left"></i></div>
                  <div><i className="fa-regular fa-circle-right"></i></div>
                  <div><i className="fa-regular fa-window-minimize"></i></div>
                  <div><i className="fa-regular fa-arrows-up-down-left-right"></i></div>
                </div>
                <img src={ project.image } alt={ project.name } width="100%" />
              </li>
            ))
          }
      </ul>
    </section>
  );
}
