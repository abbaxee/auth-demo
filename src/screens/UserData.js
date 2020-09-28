import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import Button from '../components/Button';
import {AuthContext} from '../navigation';
import {GREY_THREE, WHITE_COLOR} from '../styles/colors';
import container from '../styles/container';
// import AsyncStorage from '@react-native-community/async-storage';

const DetailText = ({title, text}) => (
  <Text style={styles.detailText}>
    <Text style={styles.titleText}>{title}: </Text> {text}
  </Text>
);

const UserData = () => {
  const {state, logout} = React.useContext(AuthContext);

  const {user} = state;

  return (
    <>
      <SafeAreaView>
        <View style={container.medium}>
          <View style={styles.content}>
            <View>
              <Image
                style={styles.avatar}
                resizeMode="contain"
                source={{uri: 'https://picsum.photos/200'}}
              />
            </View>

            <View style={styles.detail}>
              <DetailText title="Name" text={user && user.displayName} />
              <DetailText title="Email" text={user && user.email} />
            </View>
          </View>
          <Button text="Logout" onPress={logout} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    // alignItems: 'center',
    marginBottom: 20,
    backgroundColor: WHITE_COLOR,
    padding: 40,
    borderRadius: 6,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  detail: {
    marginTop: 20,
  },
  detailText: {
    fontSize: 14,
    paddingVertical: 2,
    color: GREY_THREE,
  },
  titleText: {
    fontWeight: 'bold',
  },
});

export default UserData;
