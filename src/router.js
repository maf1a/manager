import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/login-form';
import EmployeeList from './components/employee-list';
import EmployeeCreate from './components/employee-create';

const RouterComponent = () => {
  return(
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key='auth'>
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key='main' >
          <Scene
            rightTitle=" Add new"
            onRight={() => Actions.employeeCreate()}
            key="employeeList"
            component={EmployeeList}
            title="Employees" />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create employee" />
        </Scene>
      </Scene>
    </Router>
  );
}

export default RouterComponent;
