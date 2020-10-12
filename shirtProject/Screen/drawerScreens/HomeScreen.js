/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import 'react-native-gesture-handler';
import { View, Text,Image,StyleSheet,TouchableOpacity, Button,ScrollView, ImageBackground } from 'react-native';
import { Slide } from 'react-slideshow-image';



const HomeScreen =({navigation}) =>{
  global.currentScreenIndex = 'HomeScreen';
  
  return (
    <ImageBackground source={require('D:/application/Mobileapp2/shirtProject/Image/back.jpg')}
    style={{flex: 1,
      resizeMode: "cover",
      justifyContent: "center"}} 
    >
    <View style={styles.container}> 
      <ScrollView>
            <Image
              style={styles.logo}
              source={require('../image/4.jpg')}
            />
            <Button
                style={styles.buttonStyle}
                title="Go to Details"
                onPress={() => navigation.navigate('DetailScreen')}
              />
             <Image
              style={styles.logo}
              source={require('../image/shrit2.png')}
            />
            <Button
                style={styles.buttonStyle}
                title="Go to Details"
                onPress={() => navigation.navigate('DetailScreen')}
              />
             <Image
              style={styles.logo}
              source={require('../image/shrit3.png')}
            />
            <Button
                style={styles.buttonStyle}
                title="Go to Details"
                onPress={() => navigation.navigate('DetailScreen')}
              />
             <Image
              style={styles.logo}
              source={require('../image/shrit4.png')}
            />
             <Button
                style={styles.buttonStyle}
                title="Go to Details"
                onPress={() => navigation.navigate('DetailScreen')}
              />
        </ScrollView>
    </View>
    </ImageBackground>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 300,
    height: 300,
    marginTop: 10,
    marginBottom: 10,
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
