import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from '../Button';

test('can press the button', () => {
  const onPressMock = jest.fn();

  const {getByText} = render(<Button text="Login" onPress={onPressMock} />);

  fireEvent.press(getByText('Login'));
  expect(onPressMock).toHaveBeenCalled();
  expect(onPressMock.mock.calls.length).toBe(1);

  fireEvent.press(getByText('Login'));
  expect(onPressMock.mock.calls.length).toBe(2);
});

test('onPress is not called when button is disabled', () => {
  const onPressMock = jest.fn();
  const {getByText} = render(
    <Button text="Login" onPress={onPressMock} disabled />,
  );

  fireEvent.press(getByText('Login'));
  expect(onPressMock).not.toHaveBeenCalled();
});

test('When loading it does not show text and is disabled', () => {
  const onPressMock = jest.fn();
  const {getByText} = render(
    <Button text="Login" onPress={onPressMock} loading />,
  );

  expect(() => getByText('Login')).toThrow('No instances found');
});
