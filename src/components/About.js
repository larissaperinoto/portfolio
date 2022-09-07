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
          <p> Os cometas são corpos celestes que, junto com os planetas e asteroides, integram o Sistema Solar.
            Eles são descritos por astrônomos como "pedras de gelo sujo".
            Isso se deve a sua constituição, que é, basicamente, gases congelados, poeira cósmica e rochas.
          </p>
          <p>
            Um cometa é um pequeno corpo gelado do Sistema Solar que, ao passar perto do Sol,
            aquece e começa a liberar gases, processo que é chamado de desgaseificação.
            Isso produz uma atmosfera visível ou coma e, às vezes, também uma cauda.
          </p>
        </div>
      </div>
    </section>
  );
}
