import React, { Component } from 'react';
import { Text, Picker } from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../actions/employee-action';
import { Card, CardSection, Input, Button } from './common';

class EmployeeList extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || "Monday" });
  }

  render() {
    const { name, phone, shift } = this.props;
    return(
      <Card>
        <CardSection>
          <Input
            label='Name'
            value={name}
            onchangeText={value =>
              this.props.employeeUpdate({prop:'name', value})}
            placeholder='Jane'
          />
        </CardSection>

        <CardSection>
          <Input
            label='Phone'
            value={phone}
            onchangeText={value =>
              this.props.employeeUpdate({prop:'phone', value})}
            placeholder='555-555-555'
          />
        </CardSection>

        <CardSection style={{flexDirection: 'column'}}>
          <Text
            style={{fontSize:18, padding:20}}>
            Shift
          </Text>
          <Picker
            style={{marginLeft:10}}
            selectedValue={shift}
            onValueChange={value =>
              this.props.employeeUpdate({prop:'shift', value})}
          >
            <Picker.Item label='Monday' value='Monday' />
            <Picker.Item label='Tuesday' value='Tuesday' />
            <Picker.Item label='Wednesday' value='Wednesday' />
            <Picker.Item label='Thursday' value='Thursday' />
            <Picker.Item label='Friday' value='Friday' />
            <Picker.Item label='Saturday' value='Saturday' />
            <Picker.Item label='Sunday' value='Sunday' />
          </Picker>
        </CardSection>

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

export default connect(mapStateToProps, actions)(EmployeeList);
