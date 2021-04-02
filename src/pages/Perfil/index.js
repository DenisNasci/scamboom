import React from 'react';
import Backgroud from '../../componentes/Background';
import { Container, LogoutButtom } from './styles';
import { signOut } from '../../store/modules/auth/actions';
import Header from '../../componentes/Header';
import SubHeader from '../../componentes/SubHeader';

import {useDispatch} from 'react-redux';

const Perfil = ({navigation}) => {

  const dispatch = useDispatch();

  function handleLogout(){
    dispatch(signOut());
    navigation.reset({
      routes: [{name: 'SignIn'}]
    });
  }

  return (
    <Backgroud>
      <Container>
        <Header titulo="Perfil"/>
        <SubHeader/>

        <LogoutButtom onPress={handleLogout}>Sair do Scamboom</LogoutButtom>
      </Container>
    </Backgroud>
  );
}

export default Perfil;