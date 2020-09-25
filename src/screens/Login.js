import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import api from '../api';
import Button from '../components/Button';
import {BLUE_COLOR, GREY_THREE, MALON_RED} from '../styles/colors';
import container from '../styles/container';
import inputStyles from '../styles/input';
import {isValidEmail} from '../utils';
import AsyncStorage from '@react-native-community/async-storage';
import {errorStyle} from '../styles/typography';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmitForm = async () => {
    if (!isValidEmail(email)) {
      Alert.alert('Inavlid Email', 'Kindly enter a valid email address');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Invalid Password', 'Password Must be at least 6 characters');
      return;
    }
    setLoading(true);
    try {
      const response = await api.loginUser({email, password});
      // console.log(response);
      const responseString = JSON.stringify({...response, email});
      await AsyncStorage.setItem('@userData', responseString);
    } catch (error) {
      console.log(error);
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SafeAreaView>
        <View style={container.medium}>
          <View style={inputStyles.inputsContainer}>
            <Text style={errorStyle}>
              There was an error with your request, Kindly try again later
            </Text>
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
            <Button onPress={onSubmitForm} loading={loading} text="Login" />

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Register')}>
              <Text style={styles.signupText}>
                Don't have an account?
                <Text style={{color: BLUE_COLOR}}> Register</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  signupText: {
    fontSize: 16,
  },
});

export default Login;
