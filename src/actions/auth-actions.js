import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER,
  EMPLOYEES_FETCH_SUCCESS
} from './types';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
};

export const loginUser = (email, password) => {
  return dispatch => {
    if (email.length > 0 && password.length > 0) {
      dispatch({ type: LOGIN_USER, payload: true})
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(err => loginUserError(dispatch, err.message))
        )
    } else {
      loginUserError(dispatch, 'All fields required');
    }
  }
}

const loginUserSuccess = (dispatch, user) => {
  const { currentUser } = firebase.auth();
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      const snap = snapshot.val();
      const emp = '';
      if (snap) {
        const emp = Object.keys(snap).map((uid) => {
          return { ...snap[uid], uid }
        });
      };
      dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: emp });
      dispatch({ type: LOGIN_USER, payload: false});
      dispatch({ type: LOGIN_USER_SUCCESS, payload: user});
      Actions.employeeList();
    });
}

const loginUserError = (dispatch, err) => {
  dispatch({ type: LOGIN_USER, payload: false})
  dispatch({ type: LOGIN_USER_ERROR, payload: err});
}
