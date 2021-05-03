import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { Container, Image, InfoPerfil, Nome, Telefone, Email} from './styles';

const SubHeader = () => {

  //const profile = useSelector(state => state.user.profile);
  /**
   * 
   *  <Nome>{profile.nome}</Nome>
      <Email>{profile.email}</Email>
      <Telefone>{profile.numero_de_celular}</Telefone>
   */
  return (
    <Container>
        <Image source={require('../../assets/exemplo.jpg')}/>
        <InfoPerfil>
            <Nome>Jorge</Nome>
            <Email>jorge@gmail.com</Email>
            <Telefone>68444889988</Telefone>
        </InfoPerfil>
    </Container>
  );
}

export default SubHeader;