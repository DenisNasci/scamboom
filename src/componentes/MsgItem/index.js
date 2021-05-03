import React from 'react';
import { Container, Msg, BalaoEsquerda, BalaoDireita, Nome } from './styles';

const MsgItem = (props) => {

  let Balao = BalaoEsquerda;

  if (props.data.me) {
    Balao = BalaoDireita;
  }

  return (
    <Container>
      
      <Balao>
        <Nome>{props.data.nome}</Nome>
        <Msg>{props.data.msg}</Msg>
      </Balao>  
    </Container>
  );
}

export default MsgItem;