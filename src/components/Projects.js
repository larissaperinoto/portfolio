import React, { useState, useEffect } from 'react';
import clipboardCopy from 'clipboard-copy';
import { BsGithub } from 'react-icons/bs';
import { BiLogIn } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai';
import { BsFillShareFill } from 'react-icons/bs';

import { data } from '../services/projectsData';
import '../css/projects.css';

export default function Projects() {
  const [shareMessage, setShareLink] = useState({ id:'', messsage: '' });

  const shareButton = ({ id, url}) => {
    clipboardCopy(url);
    setShareLink({ id: id, messsage: 'Copied!!' });
  }

  useEffect(() => {
    if (shareMessage.id !== '') {
      setTimeout(() => setShareLink({ id:'', messsage: '' }), 2000);
    }
  }, [shareMessage]);

  return (
    <section id="projects">
      <ul className="projects-container">
          {
            data.map((project, index) => (
              <li className="slide" key={ index }>
                <div>
                  <button type="button" title='GitHub'>
                    <a href={ project.repositorie } target='blank' >
                      <BsGithub />
                    </a>
                  </button>
                  <button type="button" title='Website'>
                    <a href={ project.url } target='blank'>
                      <BiLogIn />
                    </a>
                  </button>
                  <button type='button' title='Like'>
                      <AiOutlineHeart />
                  </button>
                  <button type='button' title='Share' onClick={ () => shareButton(project) }>
                      <BsFillShareFill />
                  </button>
                </div>
                <p
                  className='share_message'
                >{ shareMessage.id === project.id && shareMessage.messsage }
                </p>
                <img src={ project.image } alt={ project.name } width="100%" />
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
