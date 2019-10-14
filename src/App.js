import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginFrom';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAj1cRq1JQOj5wPyBApk28m0Axd1nGXEWQ',
      authDomain: 'manager-3406c.firebaseapp.com',
      databaseURL: 'https://manager-3406c.firebaseio.com',
      projectId: 'manager-3406c',
      storageBucket: 'manager-3406c.appspot.com',
      messagingSenderId: '236336027539',
      appId: '1:236336027539:web:699c38f6c0aa961d6b3a66',
      measurementId: 'G-0GM3FDM928',
    };
    // Initialize Firebase
    console.log(
      `In componentDidMount firebase.app.length: ${firebase.apps.length}`
    );
    if (!firebase.apps.length) {
      console.log('Before initializing firebase');
      firebase.initializeApp(firebaseConfig);
    }
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
