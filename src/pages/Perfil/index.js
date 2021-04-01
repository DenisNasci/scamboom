import React from 'react';
import Backgroud from '../../componentes/Background';
import { Container } from './styles';
import Header from '../../componentes/Header';
import SubHeader from '../../componentes/SubHeader';


const Perfil = () => {
  return (
    <Backgroud>
      <Container>
        <Header titulo="Perfil"/>
        <SubHeader/>
      </Container>
    </Backgroud>
  );
}

export default Perfil;