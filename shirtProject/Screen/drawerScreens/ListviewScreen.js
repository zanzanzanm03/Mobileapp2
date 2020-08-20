
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
         {id:1, image: "https://bootdey.com/img/Content/avatar/avatar1.png"},
         {id:2, image: "https://bootdey.com/img/Content/avatar/avatar6.png"},
         {id:3, image: "https://bootdey.com/img/Content/avatar/avatar2.png"},
         {id:4, image: "https://bootdey.com/img/Content/avatar/avatar3.png"},
         {id:5, image: "https://bootdey.com/img/Content/avatar/avatar4.png"},
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
                  <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/filled-like.png'}}/>
                  <Image style={styles.image} source={{uri: item.image}} />
                  <View style={styles.boxContent}>
                    <Text style={styles.title}>Title</Text>
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