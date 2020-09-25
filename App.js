/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StatusBar} from 'react-native';

import AppNavigator from './src/navigation';
import 'react-native-gesture-handler';

const App = () => {
  const [user, setUser] = useState({authenticated: false, userData: {}});

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppNavigator user={user} />
    </>
  );
};

export default App;
