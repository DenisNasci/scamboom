import React from 'react';
import Backgroud from '../../componentes/Background';
import { Container, LogoutButtom, ContainerInferior} from './styles';
import { signOut } from '../../store/modules/auth/actions';
import Header from '../../componentes/Header';
import SubHeader from '../../componentes/SubHeader';
import MainTopTabPerfil from '../../navigators/MainTopTabPerfil';

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
      <Header titulo="Perfil"/>
      <Container>
        <SubHeader/>
        <MainTopTabPerfil/>
        <ContainerInferior>
          <LogoutButtom onPress={handleLogout}>Sair do Scamboom</LogoutButtom>
        </ContainerInferior>
      </Container>
      
    </Backgroud>
  );
}

export default Perfil;