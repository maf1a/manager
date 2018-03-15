import { combineReducers } from 'redux';

import LoginFormReducer from './login-form-reducer';
import EmployeeFormReducer from './employee-form-reducer';
import EmployeeReducer from './employee-reducer';

export default combineReducers({
  auth: LoginFormReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer
});
