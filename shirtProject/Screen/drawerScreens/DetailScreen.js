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
} from 'react-native';
import {IMAGE} from '../constant/Image';
// import Gallery from 'react-native-image-gallery';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    const {navigation} = this.props;
    this.state = {
      isLoading: true,
      id: '',
      data: [],
    };
  }
//comment

  componentDidMount() {
    const {navigation} = this.props;
    const itemId = navigation.getParam('id');
    this.setState({id: itemId});
    var url = 'http://192.168.43.56/api/selectshirt.php?id='+this.state.id;
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // getData = async () => {
  //   const url = 'http://192.168.43.56/api/select.php?id=' + this.state.shirtID;
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({
  //         data: this.state.data.concat(responseJson),
  //       });
  //     });
  // };

  clickEventListener() {
    Alert.alert('Success', 'Product has beed added to cart');
  }

  render ()  {
    return (
        <ScrollView style={{flex: 1}}>
          <SafeAreaView 
           style={{width: '100%', height: 0, flex: 1, alignItems: 'center'}}>
           {this.state.data.map((data) => (
             <Image
               style={{
                 width: 300,
                 height: 300,
                 marginLeft: 0,
               }}
               source={IMAGE[data.img]}></Image>
           ))}
          </SafeAreaView>
          <SafeAreaView style={{flexDirection: 'row'}}>
              <SafeAreaView style={{alignItems: 'center'}}>
                {this.state.data.map((data) => (
                  <Text
                    style={{
                      color: '#EE2C2C',
                      fontSize: 35,
                      marginTop: Platform.OS === 'ios' ? 10 : 190,
                    }}>
                    {'\n'}฿{data.price}
                  </Text>
                ))}
              </SafeAreaView>
            <SafeAreaView style={{flexDirection: 'row'}}>
              <SafeAreaView style={{flex: 9}}>
                {this.state.data.map((data) => (
                  <Text style={styles.text}>
                    รหัสสินค้า:{data.shirtID}
                    {'\n'}
                    {'\n'}ชื่อสินค้า:{data.shirtName}
                  </Text>
                ))}
              </SafeAreaView>
            </SafeAreaView>
            
          </SafeAreaView>
          <View style={styles.starContainer}>
                <Text>{'\n'}</Text>
            <Image
              style={styles.star}
              source={{uri: 'https://img.icons8.com/color/40/000000/star.png'}}
            />
            <Image
              style={styles.star}
              source={{uri: 'https://img.icons8.com/color/40/000000/star.png'}}
            />
            <Image
              style={styles.star}
              source={{uri: 'https://img.icons8.com/color/40/000000/star.png'}}
            />
            <Image
              style={styles.star}
              source={{uri: 'https://img.icons8.com/color/40/000000/star.png'}}
            />
            <Image
              style={styles.star}
              source={{uri: 'https://img.icons8.com/color/40/000000/star.png'}}
            />
          </View>
          <View style={styles.contentColors}>
            <TouchableOpacity
              style={[
                styles.btnColor,
                {backgroundColor: '#00BFFF'},
              ]}></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnColor,
                {backgroundColor: '#FF1493'},
              ]}></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnColor,
                {backgroundColor: '#00CED1'},
              ]}></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnColor,
                {backgroundColor: '#228B22'},
              ]}></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnColor,
                {backgroundColor: '#20B2AA'},
              ]}></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnColor,
                {backgroundColor: '#FF4500'},
              ]}></TouchableOpacity>
          </View>
          <View style={styles.contentSize}>
            <TouchableOpacity style={styles.btnSize}>
              <Text>S</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSize}>
              <Text>M</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSize}>
              <Text>L</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSize}>
              <Text>XL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity
              style={styles.shareButton}
              onPress={() => this.clickEventListener()}>
              <Text style={styles.shareButtonText}>Add To Cart{this.state.id}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  productImg: {
    width: 200,
    height: 200,
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
