import React from 'react';
import Background from '../../componentes/Background';
import ListPost from '../../componentes/ListPosts';

// import { Container } from './styles';

const Produto = ({navigation}) => {
  return (
      <Background>
        <ListPost navegar={navigation}/>
      </Background>
  );
}

export default Produto;