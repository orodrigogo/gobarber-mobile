/*
 O all de effects, ermite passar uma lista de objeto de efeitos.
*/
import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import user from "./user/sagas";

/*
  A declaração function* (palavra chave function seguida de um asterisco)
  define um função geradora (generator function), que retorna um objeto Generator.
  yield é usada para pausar e aguardar a função terminar a execução.
*/

export default function* rootSaga() {
  // Dentro vamos ter todos os Sagas, em que, os Sagas capturam todas as Actions que definirmos.
  return yield all([auth, user]);
}
