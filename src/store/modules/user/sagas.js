import { takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure} from './actions';

export function* updateProfile({payload}){
  try {
    const {nome, email, avatar_id, ... rest} = payload.data;

    const profile = Object.assign(
      {nome, email, avatar_id}, 
      rest.oldPassword ? rest: {}
    );

    const response = yield call(api.put, 'usuarios', profile);

    Alert.alert('Atualização', 'Perfil atualizado com sucesso' );

    yield put(updateProfileSuccess(response.data));

  } catch (error) {
    Alert.alert('Erro ao atualzar', 'Confira seus dados');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)])