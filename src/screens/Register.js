/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import buttonStyles from '../styles/button';
import {GREY_THREE} from '../styles/colors';
import container from '../styles/container';
import inputStyles from '../styles/input';

const Register = () => {
  return (
    <>
      <SafeAreaView>
        <View style={container.medium}>
          <View style={inputStyles.inputsContainer}>
            <TextInput
              selectionColor={GREY_THREE}
              placeholder="Enter Name"
              style={inputStyles.input}
            />
            <TextInput
              selectionColor={GREY_THREE}
              placeholder="Enter Username"
              style={inputStyles.input}
            />
            <TextInput
              selectionColor={GREY_THREE}
              placeholder="Enter Password"
              style={inputStyles.input}
              secureTextEntry
            />
            <TouchableOpacity activeOpacity={0.8} style={buttonStyles.button}>
              <Text style={buttonStyles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Register;
