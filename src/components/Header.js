import React from 'react';
import '../css/header.css';

export default function Header() {
  return (
    <header id="header">
      <div class="header-nav">
        <h1 class="title-name"><span>Larissa</span> Perinoto</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div class="title-page-principal">
        <h1 class="title-two greenShadow">
          Welcome
          {' '}
          <span class="text-two">to my</span>
          <span class="text-three">Web Developer</span>
          <span class="text-four">website </span>
        </h1>
      </div>
      <div class="header-background">
        <div class="box-background-one"></div>
        <div class="box-background-two"></div>
      </div>
  </header>
  );
};
