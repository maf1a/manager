import React, { Component } from 'react';
import { Text, Picker } from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../actions/employee-action';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './employee-form';

class EmployeeCreate extends Component {
  componentWillMount() {
    this.props = false;
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || "Monday" });
  }

  render() {
    const { name, phone, shift } = this.props;

    return(
      <Card>
        <EmployeeForm {...this.state} />
        <CardSection>
          <Button payloadFunction={() => this.onButtonPress()}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift }
}

export default connect(mapStateToProps, actions)(EmployeeCreate);
