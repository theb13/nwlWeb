import React from 'react';

import LogoImg from '../../images/logo.svg'
import { FiArrowRight } from 'react-icons/fi';

import { Container } from './styles';
import { Link } from 'react-router-dom';


const LandingPage: React.FC = () => {
  return (
    <Container>
      <div className="content-wrapper">
        <img src={LogoImg} alt="logo" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas criancas</p>
        </main>
        <div className="location">
          <strong>Moçambique</strong>
          <span>Maputo</span>
        </div>
        <Link to="app" className="enter-app">
          <FiArrowRight size={25} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </Container>
  );
};

export default LandingPage;
