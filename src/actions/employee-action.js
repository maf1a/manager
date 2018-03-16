import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE, EMPLOYEE_SAVED_SUCCESS,
  EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_DELETE_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  }
}

export const employeeCreate = (object) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push(object)
      .then(() => {
        dispatch(EMPLOYEE_CREATE, object);
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
            Actions.employeeList();
          });
      });
  }
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVED_SUCCESS });
        Actions.employeeList();
      })
  }
};

export const employeeDelete = (uid) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: EMPLOYEE_DELETE_SUCCESS });
        Actions.employeeList()
      });
  }
}
