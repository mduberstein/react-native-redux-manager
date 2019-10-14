import React, {Component} from 'react';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged} from '../actions';
import {Card, CardSection, Input, Button} from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    // redux dispatch implementation
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    // redux dispatch implementation
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            value={this.props.email}
            // dispatch implementation: this.onEmailChange.bind(this)
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.props.password}
            // dispatch implementation: this.onPasswordChange.bind(this)
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
  };
};
// Redux: emailChanged here is action creator, that after this call becomses available a this.props.emailChanged to LoginForm
// when this.props.emailChanged(text) is called, an action is dispatched to redux store
export default connect(
  mapStateToProps,
  // action creators
  {emailChanged, passwordChanged}
)(LoginForm);
