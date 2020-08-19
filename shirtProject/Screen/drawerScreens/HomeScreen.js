/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import { View, Text,Image,StyleSheet,TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';


const HomeScreen = () => {
  global.currentScreenIndex = 'HomeScreen';
  return (
    <View style={styles.container}>

          <Image
            source={require('../image/shrit.png')}
            style={{ width: '90%', resizeMode: 'contain', margin: 30 }}
          />

    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});