import React, { useContext } from 'react';
import Context from '../context/Context';
import '../css/header.css';
import Menu from './Menu';
import MenuIcon from './MenuIcon';

export default function Header() {
  const { showMenu } = useContext(Context);

  return (
    <header id="header">
      <div className="location_container">
        <img src="https://img.icons8.com/dusk/64/000000/worldwide-location.png" alt="Location"/>
        <span>Paraná, Brazil</span>
      </div>
      <div class="header-nav">
        <a href="www.linkedin.com/in/larissaperinoto">
          <h1 class="title-name"><span>Larissa</span> Perinoto</h1>
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          { showMenu ? <Menu /> :  <MenuIcon /> }
        </nav>
      </div>
      <div class="header-background">
        <div class="title-page-principal greenShadow">
          <h1>
            Welcome
            {' '}
            <span class="text-two">to my</span>
            <span class="text-three salmonShadown">Web Developer</span>
            <span class="text-four">website </span>
          </h1>
        </div>
        <div class="box-background"></div>
      </div>
  </header>
  );
};
