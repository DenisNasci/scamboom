import React, {useState} from 'react';
import { Container, Imagem, Info, Nome, Msg, Post } from './styles';

const ListMessage = (props) => {
  const [msg, setMsg] = useState(props.data.msg);

  function chat(){
    props.navegar.navigate('Chat', {dados: props.data});
  }

  return (
    <Container onPress={chat}>
      <Imagem source={{uri: props.data.img}}/>
      <Info>
        <Post>{props.data.post}</Post>
        <Nome numberOfLines={1}>{props.data.nome}</Nome>
        <Msg numberOfLines={1}>{msg}</Msg>
      </Info>
    </Container>
  );
}

export default ListMessage;