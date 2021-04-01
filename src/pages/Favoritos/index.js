import React from 'react';
import Backgroud from '../../componentes/Background';
import ListFavorite from '../../componentes/ListFavorite';
import Header from '../../componentes/Header';
import { Container, List } from './styles';

const data =[1,2,3,4,5,6];

const Favoritos = () => {
  return (
    <Backgroud>
      <Container>
        <Header titulo="Favoritos"/>

        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => (
            <ListFavorite
              data={item}
            />
          )}
        />
      </Container>
    </Backgroud>
  );
}

export default Favoritos;