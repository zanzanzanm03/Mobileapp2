/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import 'react-native-gesture-handler';
import { View, Text,Image,StyleSheet,TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';


const HomeScreen =({navigation}) =>{
  global.currentScreenIndex = 'HomeScreen';
  return (
    <View style={styles.container}> 
            <Image
              source={require('../image/shrit.png')}
              style={styles.logo}
            />
             <Button
                style={styles.buttonStyle}
                title="Go to Details"
                onPress={() => navigation.navigate('DetailScreen')}
              />
    </View>
  );
}
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
    width: 300,
    height: 300,
  },
  buttonStyle: {
    backgroundColor: '#4682B4',
    borderWidth: 0,
    color: '#708090',
    borderColor: '#4169E1',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
});