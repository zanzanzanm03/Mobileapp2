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
} from 'react-native';
// import Gallery from 'react-native-image-gallery';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    return fetch('http://192.168.43.56/api/select.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  clickEventListener() {
    Alert.alert('Success', 'Product has beed added to cart');
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{alignItems: 'center', marginHorizontal: 30}}>
            <Image
              style={styles.productImg}
              source={require('D:/application/Mobileapp2/shirtProject/Screen/image/shrit.png')}
            />
            <FlatList
              data={this.state.data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: '#EEB4B4',
                    padding: 10,
                    margin: 10,
                    borderRadius: 10,
                  }}>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    <Text style={{color: '#000000'}}>
                      รหัสสินค้า: {item.shirtID}
                    </Text>
                    {'\t'}ชื่อสินค้า: {item.shirtName}
                    {'\t'}ราคา: {item.price}
                  </Text>
                </View>
              )}
            />
            {/* <Text style={styles.name}>Super Black T-Shirt</Text>
            <Text style={styles.price}>$ 12.22</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec
            </Text> */}
          </View>
          <View style={styles.starContainer}>
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
              <Text style={styles.shareButtonText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
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
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
});
