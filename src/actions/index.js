import firease from 'firebase';
import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS} from './types';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    firease.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log('Before dispatching LOGIN_USER_SUCCESS');
      // async action dispatch
      dispatch({type: LOGIN_USER_SUCCESS, payload: user});
    });
  };
};
