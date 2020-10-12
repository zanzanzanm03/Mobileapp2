/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {IMAGE} from '../constant/Image';
import 'react-native-gesture-handler';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      id: '',
      data: [],
    };
  }

  componentDidMount() {
    this.setState({isLoading: true}, this.getData);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  toggleSwitch = (value) => {
    //onValueChange of the switch this function will be called
    this.setState({switchValue: value});
    //state changes according to switch
    //which will result in re-render the text
  };
  getData = async () => {
    const url =
      'http://192.168.43.56/api/select.php?start=' +
      this.state.start +
      '&end=' +
      this.state.end;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: this.state.data.concat(responseJson),
          isLoading: false,
        });
      });
  };
  render() {
    return (
    <ImageBackground source={require('D:/application/Mobileapp2/shirtProject/Image/back.jpg')}
    style={{flex: 1,
      resizeMode: "cover",
      justifyContent: "center"}} 
    >
      <ScrollView>
      <SafeAreaView style={{flex: 1}}>
            <FlatList
              style={styles.container}
              data={this.state.data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: '#EEB4B4',
                    // padding: 10,
                    margin: 10,
                    borderRadius: 10,
                  }}>
                    <TouchableOpacity>
                        <Image source={IMAGE[item.img]} style={styles.productImg} />
                      </TouchableOpacity>
                      <TouchableOpacity >
                        <Text style={{color: '#000000',fontSize: 20,fontWeight: 'bold', textAlign: 'center'}}>รหัสสินค้า:{item.shirtID}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text style={styles.shareButtonText}>ชื่อสินค้า:{item.shirtName}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text style={styles.shareButtonText}>ราคา:{item.price}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.buttonAdd}
                        onPress={() =>
                          this.props.navigation.navigate('DetailScreen', {
                            itemId: item.shirtID,
                          })
                        }>
                        <Text style={styles.shareButtonText}>Detail</Text>
                      </TouchableOpacity>
                </View>
              )} 
            />
          </SafeAreaView>
        </ScrollView>
    </ImageBackground>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  productImg: {
    width: '100%',
    height: 250,
    alignItems: 'center',
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: 'bold',
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: '#696969',
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: '#778899',
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: 'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentColors: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentSize: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: '#eeeeee',
    marginTop: 20,
    marginHorizontal: 30,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center'
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
  buttonAdd:{
    marginTop: 10,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
});

