import React, { useContext } from 'react';
import Context from '../context/Context';

export default function MenuIcon() {
  const { showMenu, setShowMenu } = useContext(Context);

  return (
    <button
      type="button"
      onClick={ () => setShowMenu(!showMenu) }
    >
      <img
        src="https://img.icons8.com/dusk/64/000000/menu.png"
        alt="Menu"
        className="menu_icon"
        title="Menu"
      />
    </button>
  );
}