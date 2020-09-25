import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import buttonStyles from '../styles/button';
import {GREY_THREE, WHITE_COLOR} from '../styles/colors';
import container from '../styles/container';

const DetailText = ({title, text}) => (
  <Text style={styles.detailText}>
    <Text style={styles.titleText}>{title}: </Text> {text}
  </Text>
);

const UserData = () => {
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
              <DetailText title="Name" text="Abdullahi Aliyu" />
              <DetailText title="Username" text="Abbaxee" />
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={buttonStyles.button}>
            <Text style={buttonStyles.buttonText}>Logout</Text>
          </TouchableOpacity>
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
