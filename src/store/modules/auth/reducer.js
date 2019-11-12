/*
  Reducer é quem possui um switch para decidir qual action deverá ser executada
  de acordo com o type.
*/

/*
  Docs full: https://www.infoq.com/news/2019/09/immer-v4-released-oss-award/
  O immer é uma lib para simplificar a manipulação dos estados.
*/
import produce from "immer";

// State inicial do reducer com os valores default/iniciais.
const INITIAL_STATE = {
  token: null,
  loadingsigned: false,
  loading: false
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@auth/SIGN_IN_REQUEST": {
        draft.loading = true;
        break;
      }

      // Manipulação quando a Action @auth/SIGN_IN_SUCCESS for disparada.
      case "@auth/SIGN_IN_SUCCESS": {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = true;
        break;
      }
      case "@auth/SIGN_FAILURE": {
        draft.loading = false;
        break;
      }
      case "@auth/SIGN_OUT": {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
        return state;
    }
  });
}
