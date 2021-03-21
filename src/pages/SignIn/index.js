import React, { useRef, useState } from 'react';

import Background from '../../componentes/Background';
import { useDispatch, useSelector } from 'react-redux';
import { signInResquest } from '../../store/modules/auth/actions';

import {Image, Keyboard} from 'react-native';

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
  const dispatch = useDispatch();

  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const loading = useSelector(state => state.auth.loading);


  function handleSubmit(){
    dispatch(signInResquest(email, senha));
    Keyboard.dismiss();
  };

  return (
    <Background>  
      <Container>
        <Image souce={''}/>
        <Logo>Scamboom</Logo>

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={senha}
            onChangeText={setSenha}
          />

          <SubmitButton loading ={loading} onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>
        <SignLink onPress={ () => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

export default SignIn;
