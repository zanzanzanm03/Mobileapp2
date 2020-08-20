//This is an example code to understand Slider// 

import React, { Component } from 'react';
//import react in our code. 

//For React Native >= 0.59
import Slider from '@react-native-community/slider'

import { View, Text, StyleSheet,ImageBackground,Image} from 'react-native';

export default class App extends Component {
   constructor(props) {
   super(props);
   this.state = {
     //Initial Value of slider
     sliderValue: 15
   };
 }

  render() {
    return (
      <ImageBackground source={require('D:/application/Mobileapp2/shirtProject/Image/back.jpg')}
      style={{flex: 1,
        resizeMode: "cover",
        justifyContent: "center"}} 
      >
      <View style={styles.container}>
      <Image
        source={require('D:/application/Mobileapp2/shirtProject/Image/aboutreact.png')}
        style={styles.imageIt}
      />
        {/*Text to show slider value*/}
        <Text style={{color: 'black'}}>Pricre :  {this.state.sliderValue}</Text>
      
        {/*Slider with max, min, step and initial value*/}
        <Slider 
          maximumValue={1000}
          minimumValue={1}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1} 
          value={this.state.sliderValue}
          onValueChange={(sliderValue) => this.setState({ sliderValue })}
        />
      </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   padding:20,
   justifyContent: 'center',
   backgroundColor: '#ecf0f1',
 },
 imageIt: {
    justifyContent: 'center'
 }
});