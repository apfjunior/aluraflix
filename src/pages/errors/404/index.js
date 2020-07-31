import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function Erro404() {
  return (
    <PageDefault>
      <h1 align="center">404 Error. Página não encontrada.</h1>

      <p align="center">
        {' '}
        <Link to="/">Retornar a Página Inicial</Link>{' '}
      </p>

      <div align="center">
        <iframe
          title="Flappy Bird Game"
          src="https://mariosouto.com/flappy-bird-devsoutinho/"
          width="340"
          height="600"
        />
      </div>
    </PageDefault>
  );
}

export default Erro404;
