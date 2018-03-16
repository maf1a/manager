import {
  EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: 'No employees found'
};

export default (state = INITIAL_STATE, { type, payload }) => {
  console.log(type, payload, 'suka');
  switch (type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return payload;
    default:
      return state;
  }
}
