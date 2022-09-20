import React from 'react';
import Profile from '../image/Profile.jpeg';
import '../css/about.css';

export default function About() {
  return (
    <section id="about">
      <div className="about-background whiteTextColor ">
        <p>{`{`}<span>profile</span>{`}`}</p>
      </div>
      <div className="about_infos">
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
            I really like to spend my time consuming series, documentaries, old movies and lots of music.
            I like to practice yoga and go hiking in nature.
            I've been an ovo-lactovegetarian for over two years and I love to cook vegan food for my friends.
          </p>
          <p>
            Since I became interested in technology, I have been immersed in a universe of new discoveries and learning.
            I started to study programming independently until in March 2022 I started the Web Development course at Trybe and recently graduated as a Front-end Developer.
            I'm currently working as a Monitor at Trybe and studying Back-end development.
          </p>
        </div>
      </div>
    </section>
  );
}
