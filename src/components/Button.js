import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import buttonStyles from '../styles/button';

const Button = ({onPress, loading, disabled, text}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={buttonStyles.button}
      onPress={onPress}
      disabled={disabled || loading}>
      {loading ? (
        // eslint-disable-next-line react-native/no-inline-styles
        <ActivityIndicator style={{padding: 1}} />
      ) : (
        <Text style={buttonStyles.buttonText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
