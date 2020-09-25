/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import buttonStyles from '../styles/button';
import {GREY_THREE} from '../styles/colors';
import container from '../styles/container';
import inputStyles from '../styles/input';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {isValidEmail} from '../utils';
import AsyncStorage from '@react-native-community/async-storage';

const Register = ({navigation}) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onRegister = () => {
    if (!fullname) {
      Alert.alert('Enter Full Name');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Invalid Email', 'Kindly enter a valid email address');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Invalid Password', 'Password Must be at least 6 characters');
      return;
    }

    setLoading(true);

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const user = auth().currentUser;
        return user.updateProfile({
          displayName: fullname,
        });
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        const {code, message} = error;
        Alert.alert('Error', message);
        setLoading(false);
      });
  };

  return (
    <>
      <SafeAreaView>
        <View style={container.medium}>
          <View style={inputStyles.inputsContainer}>
            <TextInput
              selectionColor={GREY_THREE}
              placeholder="Enter Name"
              style={inputStyles.input}
              onChangeText={(value) => setFullname(value)}
              value={fullname}
            />
            <TextInput
              selectionColor={GREY_THREE}
              placeholder="Enter Email Address"
              style={inputStyles.input}
              onChangeText={(value) => setEmail(value)}
              value={email}
            />
            <TextInput
              selectionColor={GREY_THREE}
              placeholder="Enter Password"
              style={inputStyles.input}
              secureTextEntry
              onChangeText={(value) => setPassword(value)}
              value={password}
            />
            <TouchableOpacity
              onPress={onRegister}
              activeOpacity={0.8}
              style={buttonStyles.button}>
              <Text style={buttonStyles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Register;
