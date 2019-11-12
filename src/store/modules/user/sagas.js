import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

// Saga para ser disparado.
export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    console.tron.log(payload.data);

    // Object.assign unifica dois objetos.
    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    Alert.alert(
      'Erro ao atualizar perfil',
      'Houve um erro ao atualizar o perfil, confira seus dados!'
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
