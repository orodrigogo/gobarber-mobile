import produce from "immer";

const INITIAL_STATE = {
  profile: null
};

/*
  Um reducer, necessariamente não precisa ouvir as Actions somente do seu modulo.
  Mas pode ouvir action de outros modulos. Como é o caso abaixo, que escuta uma Action de Auth.
*/
export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      // Manipulação quando a Action @auth/SIGN_IN_SUCCESS for disparada.
      case "@auth/SIGN_IN_SUCCESS": {
        draft.profile = action.payload.user;
        break;
      }

      case "@user/UPDATE_PROFILE_SUCCESS": {
        draft.profile = action.payload.profile;
        break;
      }

      case "@user/SIGN_OUT": {
        draft.profile = null;
        break;
      }

      default:
        return state;
    }
  });
}
