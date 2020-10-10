/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React and Hook we needed
import React, {Component} from 'react';

//Import all required component
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  AppRegistry,
  Alert,
} from 'react-native';
import Loader from './Components/loader';

class RegisterScreen extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  UserRegistrationFunction = () => {
    fetch('http://192.168.43.56/api/user_register.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,

        email: this.state.email,

        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    // if (isRegistraionSuccess) {
    //   return (
    //     <View
    //       style={{
    //         flex: 1,
    //         backgroundColor: '#FFE4E1',
    //         justifyContent: 'center',
    //       }}>
    //       <Image
    //         source={require('../Image/success.png')}
    //         style={{height: 150, resizeMode: 'contain', alignSelf: 'center'}}
    //       />
    //       <Text style={styles.successTextStyle}>Registration Successful.</Text>
    //       <TouchableOpacity
    //         style={styles.buttonStyle}
    //         activeOpacity={0.5}
    //         onPress={() => props.navigation.navigate('LoginScreen')}>
    //         <Text style={styles.buttonTextStyle}>Login Now</Text>
    //       </TouchableOpacity>
    //     </View>
    //   );
    // }

    return (
      <ImageBackground
        source={require('D:/application/Mobileapp2/shirtProject/Image/back.jpg')}
        style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
        <View>
          <ScrollView keyboardShouldPersistTaps="handled">
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../Image/aboutreact.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <KeyboardAvoidingView enabled>
              {/* <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(id) => this.setState({id: id})}
                  underlineColorAndroid="#778899"
                  placeholder="Enter ID"
                  placeholderTextColor="#778899"
                  autoCapitalize="sentences"
                  returnKeyType="next"
                />
              </View> */}
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(name) => this.setState({name: name})}
                  underlineColorAndroid="#778899"
                  placeholder="Enter Name"
                  placeholderTextColor="#778899"
                  autoCapitalize="sentences"
                  returnKeyType="next"
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(email) => this.setState({email: email})}
                  underlineColorAndroid="#778899"
                  placeholder="Enter Email"
                  placeholderTextColor="#778899"
                  keyboardType="email-address"
                  returnKeyType="next"
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(password) =>
                    this.setState({password: password})
                  }
                  underlineColorAndroid="#778899"
                  placeholder="Enter Password"
                  placeholderTextColor="#778899"
                  keyboardType="numeric"
                  blurOnSubmit={false}
                />
              </View>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={this.UserRegistrationFunction}>
                <Text style={styles.buttonTextStyle}>REGISTER</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
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
  buttonTextStyle: {
    color: '#FFFAFA',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: '#708090',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#708090',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: '#32CD32',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});
