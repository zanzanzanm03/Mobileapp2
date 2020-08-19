/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import { View, Text,Image,StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  }
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
    <Image
      style={styles.tinyLogo}
      source={require('./Image/shrit.png')}
    />
    </View>
  );
};
export default HomeScreen;