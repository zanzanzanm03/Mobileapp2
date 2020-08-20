
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

export default class ListviewScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
         {id:1, image: "https://galaxycnx.com/upload-img/HERON/TEE/OVER/ceae147be7f5f03bd4c085962cea1aa4a_17928233_191202_0035.jpg"},
         {id:2, image: "https://www.jimthompson.com/pub/media/catalog/product/cache/e593c63d1e6eacc388928878fedae72e/e/l/elephant_cotton_t-shirt_-_blue_1_1.jpg"},
         {id:3, image: "https://galaxycnx.com/upload-img/GETRICHEASY/SHIRT/Get_rich_Easy_BKK_200624_0016.jpg"},
         {id:4, image: "https://imgprod65.hobbylobby.com/9/5f/26/95f264323ae49e65b2a53a909fcd7d9ee659f3c7/350Wx350H-422519-0320.jpg"},
         {id:5, image: "https://www-s.mlo.me/upen/v/201901/20190111/ead94e8a-152f-4f3a-a582-4262aa0b13bb.jpg"},
         {id:5, image: "https://contents.mediadecathlon.com/p1730215/k$8bd20f11ddc8bf28cbbcedba414f7dcc/soft-500-women-s-tennis-t-shirt-pink.jpg?&f=800x800"},
      ],
    };
  }

  eventClickLister = (viewId) => {
   Alert.alert("Alert", "Item selected");
  }

  render() {
    return (
      <FlatList 
        enableEmptySections={true}
        data={this.state.data}
        keyExtractor= {(item) => {
          return item.id;
        }}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity onPress={() => this.eventClickLister("row")}>
                <View style={styles.box}>
                  <Image style={styles.icon} source={require('D:/application/Mobileapp2/shirtProject/Image/aboutreact.png')}/>
                  <Image style={styles.image} source={{uri: item.image}} />
                  <View style={styles.boxContent}>
                    <Text style={styles.title}>Shirt</Text>
                    <Text style={styles.description}>Lorem ipsum dolor sit amet, elit consectetur</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height:100,
  },
  icon:{
    width:20,
    height:20,
    alignSelf:'center',
    marginRight:10
  },
  box: {
    padding:20,
    marginTop:5,
    marginBottom:5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  boxContent: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft:10,
  },
  description:{
    fontSize:15,
    color: "#646464",
  },
  title:{
    fontSize:18,
    color:"#151515",
  }
}); 