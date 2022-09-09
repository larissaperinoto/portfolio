import React from 'react';
import clipboardCopy from 'clipboard-copy';
import '../css/contact.css';

export default function Contact() {
  const sharePage = () => {
    clipboardCopy('larissaperinoto.github.io/portifolio/');
  }

  return (
    <section id="contact">
      <div className="contact_background_container">
        <div className="contact_background_green"/>
        <div className="contact_background_purple">
          <h3 className="whiteTextColor">
            {`{`}<span>Contact me </span>{`}`}
          </h3>
        </div>
      </div>

      <div className="contact_container">
        <a href="https://www.linkedin.com/in/larissaperinoto" title="Linkedin" target="blank">
          <img src="https://img.icons8.com/dusk/64/000000/linkedin--v1.png" alt="Linkedin"/>
        </a>
        <a href="https://github.com/larissaperinoto" title="GitHub" target="blank">
          <img src="https://img.icons8.com/dusk/64/000000/github.png" alt="GitHub"/>
        </a>
        <a href="https://open.spotify.com/user/22wksmrmnf6bbakqayxq3koli?si=f076d97b0593428a" title="Spotify" target="blank">
          <img src="https://img.icons8.com/dusk/64/000000/spotify.png" alt="Spotify"/>
        </a>
        <a href="https://drive.google.com/file/d/1Whfs3wFy3c533zsOb_31OyNxxg-5lNkh/view?usp=sharing" title="Curriculum" target="blank">
          <img src="https://img.icons8.com/dusk/64/000000/resume.png" alt="Curriculum"/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=5543996340358" title="WhatsApp" target="blank">
          <img src="https://img.icons8.com/dusk/64/000000/whatsapp.png" alt="WhatsApp" />
        </a>
        <a href="mailto:perinotolarissa@gmail.com" title="Email" target="blank">
          <img src="https://img.icons8.com/dusk/64/000000/gmail.png" alt="Email"/>
        </a>
        <a href=" " onClick={ sharePage } title="Share">
          <img src="https://img.icons8.com/dusk/64/000000/share-2.png" alt="Share"/>
        </a>
      </div>
    </section>
  );
}
