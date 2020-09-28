import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import Register from '../Register';
import {Alert} from 'react-native';

const createUserWithEmailAndPassword = jest.fn(() => {
  return Promise.resolve('result of createUserWithEmailAndPassword');
});

const auth = jest.fn(() => {
  return {
    createUserWithEmailAndPassword,
    currentUser: {
      _user: {},
      updateProfile: jest.fn(() => Promise.resolve()),
    },
  };
});
test('getByPlaceholderText, queryByPlaceholderText', () => {
  const {getByPlaceholderText, getByText} = render(<Register auth={auth} />);
  const nameInput = getByPlaceholderText('Enter Name');
  const emailInput = getByPlaceholderText('Enter Email');
  const passwordInput = getByPlaceholderText('Enter Password');
  const registerButton = getByText('Register');

  const AlertSpy = jest.spyOn(Alert, 'alert');
  fireEvent.press(registerButton);
  expect(AlertSpy).toHaveBeenCalled();

  fireEvent.changeText(nameInput, 'John Doe');
  fireEvent.changeText(emailInput, 'john@doe.com');
  fireEvent.changeText(passwordInput, 'password');
  fireEvent.press(registerButton);

  expect(auth).toHaveBeenCalled();
  expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
    'john@doe.com',
    'password',
  );
});
