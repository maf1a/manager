import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVED_SUCCESS,
  EMPLOYEE_DELETE_SUCCESS
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
    case EMPLOYEE_SAVED_SUCCESS:
      return INITIAL_STATE;
    case EMPLOYEE_DELETE_SUCCESS:
      return INITIAL_STATE;
    case EMPLOYEE_CREATE:
      const newState = INITIAL_STATE;
      return {...state, newState};
    default:
      return state;
  }
}
