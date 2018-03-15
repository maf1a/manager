import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER
} from '../actions/types'

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  loginUserError: '',
  loading: false
}

export default (state = INITIAL_STATE, { type, payload }) => {
  console.log(type, payload);

  switch (type) {
    case EMAIL_CHANGED:
      return { ...state, email: payload };
    case PASSWORD_CHANGED:
      return { ...state, password: payload };
    case LOGIN_USER:
      console.log(state);
      return { ...state, loading: payload, loginUserError: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: payload };
    case LOGIN_USER_ERROR:
      return { ...state, loginUserError: payload, loading: false };
    default:
      return state;
  }
}
