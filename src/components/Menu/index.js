import React from 'react';

import Logo from '../../assets/img/Logo.png';
import Button from '../Button';

import './styles.css';

// import ButtonLink from './components/ButtonLink/index';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Alura logo" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
