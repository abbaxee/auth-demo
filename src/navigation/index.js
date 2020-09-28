import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import UserData from '../screens/UserData';
import {StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = React.createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const AppNavigator = () => {
  const {Screen, Navigator} = createStackNavigator();
  const initialState = {user: null};
  const [authState, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    const initializeAuth = async () => {
      const user = await AsyncStorage.getItem('@userData');
      if (user) {
        dispatch({type: 'LOGIN', payload: JSON.parse(user)});
      }
    };
    initializeAuth();
  }, []);

  const logout = React.useCallback(() => {
    AsyncStorage.removeItem('@userData');
    dispatch({type: 'LOGOUT'});
  }, [dispatch]);

  return (
    <AuthContext.Provider value={{state: authState, dispatch, logout}}>
      <NavigationContainer>
        <Navigator screenOptions={{headerTitleStyle: styles.headerTitleStyle}}>
          {!authState.user ? (
            <>
              <Screen name="Login" component={Login} />
              <Screen name="Register">
                {(props) => <Register auth={auth} {...props} />}
              </Screen>
            </>
          ) : (
            <Screen
              name="User"
              component={UserData}
              options={{title: 'User Data'}}
            />
          )}
        </Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default AppNavigator;
