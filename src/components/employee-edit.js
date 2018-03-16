import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { CardSection, Button, Card, Confirm } from './common';
import EmployeeForm from './employee-form';

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    const ee = this.props.employee;
    Object.keys(ee).map((prop) => {
      this.props.employeeUpdate({prop, value: ee[prop]});
    })
  }

  onButtonPress() {
    const { name, phone, shift, uid } = this.props;
    this.props.employeeSave({ name, phone, shift, uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAcceptModal() {
    this.props.employeeDelete(this.props.uid);
    this.setState({ showModal: false });
    console.log('dag');
  }

  onDeclineModal() {
    this.setState({ showModal: false });
    console.log('gag');
  }

  render() {
    return(
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button payloadFunction={() => this.onButtonPress()}>
            Save chacges
          </Button>
        </CardSection>
        <CardSection>
          <Button payloadFunction={() => this.onTextPress()}>
            Text schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button payloadFunction={() => this.setState({
              showModal: !this.state.showModal
            })}>
            Fire employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAcceptModal.bind(this)}
          onDecline={this.onDeclineModal.bind(this)}
        >
          Are you sure want to fire him?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift, uid } = state.employeeForm;
  return { name, phone, shift, uid };
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
