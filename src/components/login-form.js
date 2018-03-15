import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';

import firebase from  'firebase';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onbuttonPress() {
    const { email, password, loginUser } = this.props;
    loginUser(email, password)
  }

  onLoginUserError() {
    if (this.props.loginUserError) return (
      <CardSection>
        <Text style={{color:'red',fontSize:17,marginLeft:6}}>
          {this.props.loginUserError}
        </Text>
      </CardSection>
    );
  }

  renderButton() {
    if (!this.props.loading) { return (
      <CardSection>
        <Button payloadFunction={() => this.onbuttonPress()}>Go!</Button>
      </CardSection>
    )} return (
      <CardSection>
        <Spinner size='large'/>
      </CardSection>
    );
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            onchangeText={(text) => this.onEmailChange(text)}
            value={this.props.email}
            label="Email"
            autocorrect={false}
            placeholder="email@gmail.com"
          />
        </CardSection>
        <CardSection>
          <Input
            onchangeText={(text) => this.onPasswordChange(text)}
            value={this.props.password}
            secureTextEntry
            autocorrect={false}
            label="Password"
            placeholder="password"
          />
        </CardSection>

        { this.onLoginUserError() }
        { this.renderButton() }

      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    loginUserError: state.auth.loginUserError,
    loading: state.auth.loading
  }
}

export default connect(mapStateToProps, actions)(LoginForm);
