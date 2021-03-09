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

const SignIn = ({navigation}) => {

  const passwordRef = useRef();

  function handleSubmit(){};

  return (
    <Background>  
      <Container>
        <Image souce={''}/>
        <Logo>ScamBoom</Logo>

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>
        <SignLink onPress={ () => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

export default SignIn;
