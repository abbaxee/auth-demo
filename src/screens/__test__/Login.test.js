import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Login from '../Login';
import {Alert} from 'react-native';

const signInWithEmailAndPassword = jest.fn(() => {
  return Promise.resolve('result of signInWithEmailAndPassword');
});

const auth = jest.fn(() => {
  return {
    signInWithEmailAndPassword,
    currentUser: {
      _user: {},
      updateProfile: jest.fn(() => Promise.resolve()),
    },
  };
});
test('Get Alert when values has not been entered else call auth/sign in with values', () => {
  const {getByPlaceholderText, getByText} = render(<Login auth={auth} />);
  const emailInput = getByPlaceholderText('Enter Email');
  const passwordInput = getByPlaceholderText('Enter Password');
  const loginButton = getByText('Login');

  const AlertSpy = jest.spyOn(Alert, 'alert');
  fireEvent.press(loginButton);
  expect(AlertSpy).toHaveBeenCalled();

  fireEvent.changeText(emailInput, 'john@doe.com');
  fireEvent.changeText(passwordInput, 'password');
  fireEvent.press(loginButton);

  expect(auth).toHaveBeenCalled();
  expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
    'john@doe.com',
    'password',
  );
});
