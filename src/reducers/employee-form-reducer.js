import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
  employeeList: null
};

export default (state = INITIAL_STATE, { type, payload }) => {
  // console.log(type, payload);
  switch (type) {
    case EMPLOYEE_UPDATE:
      return {...state, [payload.prop]: payload.value};
    case EMPLOYEE_CREATE:
      const newState = INITIAL_STATE;
      return {...state, newState};
    default:
      return state;
  }
}
