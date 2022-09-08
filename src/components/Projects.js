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
                <img src={ project.image } alt={ project.name } width="100%" />
                <button type="button">
                  <a href={ project.repositorie } target='blank'>
                    Repositorie
                  </a>
                </button>
                <button type="button">
                  <a href={ project.url } target='blank'>
                    Website
                  </a>
                </button>
              </li>
            ))
          }
      </ul>
      <div className='project-background whiteTextColor'>
        <p>{`{`}<span>Projects</span>{`}`}</p>
      </div>
    </section>
  );
}
