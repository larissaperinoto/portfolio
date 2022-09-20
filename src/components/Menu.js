import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Menu() {
  const { showMenu, setShowMenu } = useContext(Context);

  return (
    <div>
      <a href="#about" onClick={ () => setShowMenu(!showMenu) }>About</a>
      <a href="#projects" onClick={ () => setShowMenu(!showMenu) }>Projects</a>
      <a href="#contact" onClick={ () => setShowMenu(!showMenu) }>Contact</a>
    </div>
  );
}