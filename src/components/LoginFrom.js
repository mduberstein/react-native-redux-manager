import React, {Component} from 'react';
import {Card, CardSection, Input, Button} from './common';

class LoginForm extends Component {
  onEmailChange(text){

  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Email" placeholder="email@gmail.com" />
        </CardSection>
        <CardSection>
          <Input secureTextEntry label="Password" placeholder="password"
          onChangeText={this.onEmailChange.bind(this)}/>
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
