//This is an example code to understand Slider//

import React, {Component} from 'react';
//import react in our code.

//For React Native >= 0.59
import Slider from '@react-native-community/slider';
import {SafeAreaView} from 'react-native';

import {WebView} from 'react-native-webview';

import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground
        source={require('D:/application/Mobileapp2/shirtProject/Image/back.jpg')}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
        }}>
        <SafeAreaView style={{flex: 1}}>
          <WebView
            source={{
              uri: 'https://www.nike.com/th/w/men-tops-t-shirts-9om13znik1',
            }}
            style={{marginTop: 20}}
          />
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  imageIt: {
    justifyContent: 'center',
  },
});
