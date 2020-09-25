import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import UserData from '../screens/UserData';
import {StyleSheet} from 'react-native';

// const Stack = createStackNavigator();

const AppNavigator = ({user}) => {
  const {Screen, Navigator} = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerTitleStyle: styles.headerTitleStyle}}>
        {!user.authenticated ? (
          <>
            <Screen name="Login" component={Login} />
            <Screen name="Register" component={Register} />
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
  );
};

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default AppNavigator;
