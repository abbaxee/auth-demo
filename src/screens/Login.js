import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import api from '../api';
import buttonStyles from '../styles/button';
import {BLUE_COLOR, GREY_THREE} from '../styles/colors';
import container from '../styles/container';
import inputStyles from '../styles/input';
import {isValidEmail} from '../utils';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmitForm = async () => {
    if (!isValidEmail(email)) {
      Alert.alert('Inavlid Email', 'Kindly enter a valid email address');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Inavlid Password', 'Password Must be at least 6 characters');
      return;
    }
    setLoading(true);
    try {
      const response = await api.loginUser({email, password});
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SafeAreaView>
        <View style={container.medium}>
          <View style={inputStyles.inputsContainer}>
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
              activeOpacity={0.8}
              style={buttonStyles.button}
              onPress={onSubmitForm}>
              {loading ? (
                <ActivityIndicator style={{padding: 1}} />
              ) : (
                <Text style={buttonStyles.buttonText}>Login</Text>
              )}
            </TouchableOpacity>

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
