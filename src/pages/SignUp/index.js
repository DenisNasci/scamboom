import React, { useRef } from 'react';
import Background from '../../componentes/Background';
import {Image} from 'react-native';

import {
  Container, 
  Form, 
  FormInput, 
  SubmitButton, 
  SignLink, 
  SignLinkText,
  Logo
} from './styles';

const SignUp = ({navigation}) => {

  const emailRef = useRef();
  const passowrdRef = useRef();

  function handleSubmit(){

  }

  return (
    <Background>  
      <Container>
        <Image souce={''}/>

        <Logo>ScamBoom</Logo>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passowrdRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passowrdRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>Criar conta</SubmitButton>
        </Form>
        <SignLink onPress={ () => navigation.navigate('SignIn')}>
          <SignLinkText>Já tenho conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

export default SignUp;
