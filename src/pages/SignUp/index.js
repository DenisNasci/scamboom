import React, {useRef, useState} from 'react';
import { useDispatch } from 'react-redux';
import Background from '../../componentes/Background';
import { signUpRequest } from '../../store/modules/auth/actions';
import {Image, Keyboard} from 'react-native';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
} from './styles';

const SignUp = () => {

  const dispach = useDispatch();

  const emailRef = useRef();
  const passowrdRef = useRef();
  const phoneRef = useRef();
  const dataRef = useRef();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [numero_de_celular, setNumero_de_celular] = useState('');
  const [data_de_nascimento, setData_de_nascimento] = useState('');

  function handleSubmit() {
    dispach(signUpRequest(nome, email, senha, numero_de_celular, data_de_nascimento));
    Keyboard.dismiss();
  }

  return (
    <Background>
      <Container>
        <Image souce={''} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={nome}
            onChangeText={setNome}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => phoneRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="call"
            keyboardType="phone-pad"
            placeholder="Seu telefone"
            ref={phoneRef}
            returnKeyType="next"
            onSubmitEditing={() => dataRef.current.focus()}
            value={numero_de_celular}
            onChangeText={setNumero_de_celular}
          />
          <FormInput
            icon="today"
            keyboardType="phone-pad"  
            placeholder="Data de nascimento"
            ref={dataRef}
            returnKeyType="next"
            onSubmitEditing={() => passowrdRef.current.focus()}
            value={data_de_nascimento}
            onChangeText={setData_de_nascimento}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passowrdRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={senha}
            onChangeText={setSenha}
          />

          <SubmitButton onPress={handleSubmit}>Criar conta</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
};

export default SignUp;
