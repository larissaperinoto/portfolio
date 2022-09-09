import React from 'react';
import Profile from '../image/Profile.jpeg';
import '../css/about.css';

export default function About() {
  return (
    <section id="about">
      <div className="about-background whiteTextColor ">
        <p>{`{`}<span>profile</span></p>
        <p>{`}`}</p>
      </div>
      <div>
        <div className="about-profile">
          <div className="about-profile-background">
            <img src={ Profile } alt="Larissa's profile" />
          </div>
          <h3 className="greenShadow">
            Hi
            <span className="orangeShadow"> stranger</span>,
            <span className="block">My name is</span>
            <span className="orangeShadow"> Larissa</span>
          </h3>
        </div>
        <div className="about-text">
          <h2 className="pinkShadow">About me</h2>
          <p>
            Um cometa é um pequeno corpo gelado do Sistema Solar que, ao passar perto do Sol,
            aquece e começa a liberar gases, processo que é chamado de desgaseificação.
            Isso produz uma atmosfera visível ou coma e, às vezes, também uma cauda.
          </p>
          <p>
            Since I became interested in technology, I have been immersed in a universe of new discoveries and learning.
            I started to study programming independently until in March 2022 I started the Web Development course at Trybe.
            With Trybe I trained as a Front-end Developer with a focus on HTML, CSS, JavaScript, React, Redux, Context API, Unit Tests with Jest and Integration Tests with RTL.
            In addition to improving important soft skills such as communication and teamwork.
          </p>
        </div>
      </div>
    </section>
  );
}
