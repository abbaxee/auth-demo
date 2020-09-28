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
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {GREY_THREE} from '../styles/colors';
import container from '../styles/container';
import inputStyles from '../styles/input';
// import auth from '@react-native-firebase/auth';
import {isValidEmail} from '../utils';
import AsyncStorage from '@react-native-community/async-storage';
import Button from '../components/Button';
import {AuthContext} from '../navigation';

const Register = ({auth}) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const {dispatch} = React.useContext(AuthContext);

  const onRegister = React.useCallback(() => {
    if (!fullname) {
      Alert.alert('Input Name', 'Enter Your Full Name');
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
      .then(async () => {
        const update = {
          displayName: fullname,
        };
        await auth().currentUser.updateProfile(update);
        const userData = await auth().currentUser._user;
        console.log({userData});
        AsyncStorage.setItem('@userData', JSON.stringify(userData));
        dispatch({type: 'LOGIN', payload: userData});
        setLoading(false);
      })

      .catch((error) => {
        const {code, message} = error;
        console.log(code);
        let errorMessage = message;

        if (code === 'auth/email-already-in-use') {
          errorMessage = 'That email address is already in use!';
        }

        if (code === 'auth/invalid-email') {
          errorMessage = 'That email address is invalid!';
        }

        Alert.alert('Error', errorMessage);
        setLoading(false);
      });
  }, [fullname, email, password, setLoading, dispatch, auth]);

  return (
    <>
      <SafeAreaView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          enabled>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={container.medium}>
              <View style={inputStyles.inputsContainer}>
                <TextInput
                  selectionColor={GREY_THREE}
                  placeholder="Enter Name"
                  testID="CreateAccount.name"
                  style={inputStyles.input}
                  onChangeText={(value) => setFullname(value)}
                  value={fullname}
                />
                <TextInput
                  selectionColor={GREY_THREE}
                  placeholder="Enter Email"
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

                <Button
                  text="Register"
                  onPress={onRegister}
                  loading={loading}
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default Register;
