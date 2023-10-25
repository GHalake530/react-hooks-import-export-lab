import React from 'react';
import './NavBar.css'; 

function NavBar() {
  return (
    <nav>
      <ul className="navbar-list">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
