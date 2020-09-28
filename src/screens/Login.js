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
// import api from '../api';
import Button from '../components/Button';
import {BLUE_COLOR, GREY_THREE} from '../styles/colors';
import container from '../styles/container';
import inputStyles from '../styles/input';
import {isValidEmail} from '../utils';
// import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext} from '../navigation';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const {dispatch} = React.useContext(AuthContext);

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
    // auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then(async () => {
    //     const userData = await auth().currentUser._user;
    //     console.log(userData);
    //     AsyncStorage.setItem('@userData', JSON.stringify(userData));
    //     dispatch({type: 'LOGIN', payload: userData});
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     const {code, message} = error;
    //     console.log(code);
    //     let errorMessage = message;

    //     if (code === 'auth/user-not-found') {
    //       errorMessage = 'User not found!';
    //     }

    //     if (code === 'auth/wrong-password') {
    //       errorMessage = 'That password is incorrect!';
    //     }

    //     Alert.alert('Error', errorMessage);
    //     setLoading(false);
    //   });
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
