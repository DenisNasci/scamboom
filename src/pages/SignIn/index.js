import React, { useRef, useState, useEffect } from 'react';

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
  const isSigned = useSelector(state => state.auth.signed);

  //Mapeia se o usuário já logou no app ou se vai logar
  //Navigation.reset não permite que o usuário volte ao login
  useEffect(()=>{
    if (isSigned) {
      navigation.reset({
        routes: [{name: 'MainTabs'}]
      });
    } else {
      navigation.navigate('SignIn');
    }
  }, [isSigned]);

  function handleSubmit(){
    dispatch(signInResquest(email, senha));
    setEmail('');
    setSenha('');
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
