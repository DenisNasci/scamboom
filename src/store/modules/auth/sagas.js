import {all, takeLatest, call, put} from 'redux-saga/effects';
import api from '../../../services/api';

import {Alert} from 'react-native';
import {signInSucess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {email, senha} = payload;

    const response = yield call(api.post, 'sessoes', {
      email,
      senha,
    });

    const {token, usuario} = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSucess(token, usuario));

  } catch (err) {
      Alert.alert('Falha na autenticação', 'Verifique seus dados' );
    yield put(signFailure());
  }
}

export function* signUp({payload}) {
  try {
    const {nome, email, senha} = payload;

    yield call(api.post, 'usuarios', {
      nome,
      email,
      senha,
    });

  } catch (err) {
      Alert.alert('Falha no cadastro', 'Verifique seus dados' );
    yield put(signFailure());
  }
}

export function setToken({payload}){
  if(!payload) return;
  const {token} = payload.auth;

  if(token){
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}

export function signOut() {

}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);