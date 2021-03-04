import React from 'react';
import { Text } from 'react-native';
import Background from '../../componentes/Background';
import Input from '../../componentes/Input';
import Button from '../../componentes/Button';
// import { Container } from './styles';

const SignIn = () => {
  return (
    <Background>  
      <Text>Entrada</Text>
      <Input 
        style={{marginTop: 30}}
        icon="call"  
        placeholder="Digite seu nome"
      />
      <Button>Entrar</Button>
    </Background>
  );
}

export default SignIn;
