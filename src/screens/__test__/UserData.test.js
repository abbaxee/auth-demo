import React from 'react';
import {render} from '@testing-library/react-native';
import UserData from '../UserData';
import {AuthContext} from '../../navigation';

test('User Data renders properly', () => {
  const state = {user: {displayName: 'John Doe', email: 'john@doe.com'}};
  const logout = jest.fn();

  const instance = render(
    <AuthContext.Provider value={{state, logout}}>
      <UserData />
    </AuthContext.Provider>,
  ).toJSON();
  expect(instance).toMatchSnapshot();
});
