import React from 'react';
import Backgroud from '../../componentes/Background';
import Header from '../../componentes/Header';
import { Container, Search, SearchInput, SearchButton } from './styles';
import MainTopTabDestaques from '../../navigators/MainTopTabDestaques';

const Destaques = () => {

  return (
    <Backgroud>
      <Container>
        <Header titulo="Destaques" />
        <Search>
          <SearchInput
            icon="search"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Aulas de violão..."
            returnKeyType="send"
          />
        </Search>
        <SearchButton>Pesquisar</SearchButton>
        <MainTopTabDestaques />
      </Container>
    </Backgroud>
  );
}

export default Destaques;