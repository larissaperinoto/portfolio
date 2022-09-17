import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Menu() {
  const { showMenu, setShowMenu } = useContext(Context);

  return (
    <ul>
      <li onClick={ () => setShowMenu(!showMenu) }><a href="#about">About</a></li>
      <li onClick={ () => setShowMenu(!showMenu) }><a href="#projects">projects</a></li>
      <li onClick={ () => setShowMenu(!showMenu) }><a href="#contact">Contact</a></li>
    </ul>
  );
}