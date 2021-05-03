import React, {useState} from 'react';
import MsgItem from '../../componentes/MsgItem';
import { Container, BackgroundChat, ListChat } from './styles';
import { StatusBar } from 'react-native';

const Chat = (props) => {
    
  const [chat, setChat] = useState([
      {key: '1', nome: 'Lara', msg: 'Olá', me: false},
      {key: '2', nome: 'Denis', msg: 'E aí?!', me: true},
      {key: '3', nome: 'Lara', msg: 'Tudo certo?', me: false},
      {key: '4', nome: 'Lara', msg: 'Vi você ontem!', me: false},
      {key: '5', nome: 'Lara', msg: 'Pareu que estavas aflito.. A apresentação foi boa, mas precisou de um toque mais de cabeça na coisa.', me: false},
      {key: '6', nome: 'Denis', msg: 'Nada! Impressão sua.', me: true},
      {key: '7', nome: 'Denis', msg: 'Já disse que estou bem.', me: true},
      {key: '8', nome: 'Lara', msg: 'Se você diz.', me: false},
      {key: '9', nome: 'Denis', msg: 'Digo', me: true},
  ])
  
  return (
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#9d95ff"/>
        <BackgroundChat >
          <ListChat
            data={chat}
            renderItem={({item})=><MsgItem data={item}/>}
          />
        </BackgroundChat>
      </Container>
  );
}

export default Chat;