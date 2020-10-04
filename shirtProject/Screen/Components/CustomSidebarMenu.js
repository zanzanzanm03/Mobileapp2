/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import {View, StyleSheet, Text, Alert, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const CustomSidebarMenu = (props) => {
  let items = [
    {
      navOptionName: 'Home',
      screenToNavigate: 'HomeScreen',
    },
    {
      navOptionName: 'Detail',
      screenToNavigate: 'DetailScreen',
    },
    {
      navOptionName: 'Profile',
      screenToNavigate: 'ProfileScreen',
    },
    {
      navOptionName: 'Search',
      screenToNavigate: 'SearchScreen',
    },
    {
      navOptionName: 'Listview',
      screenToNavigate: 'ListviewScreen',
    },
    {
      navOptionName: 'Gallery',
      screenToNavigate: 'GalleryScreen',
    },
    {
      navOptionName: 'Logout',
      screenToNavigate: 'logout',
    },
  ];

  const handleClick = (index, screenToNavigate) => {
    if (screenToNavigate == 'logout') {
      props.navigation.toggleDrawer();
      Alert.alert(
        'Logout',
        'You want to logout now?',
        [
          {
            text: 'Cancel',
            onPress: () => {
              return null;
            },
          },
          {
            text: 'Confirm',
            onPress: () => {
              AsyncStorage.clear();
              props.navigation.navigate('Auth');
              console.log('logout');
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      props.navigation.toggleDrawer();
      global.currentScreenIndex = screenToNavigate;
      props.navigation.navigate(screenToNavigate);
    }
  };

  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Image
            source={require('D:/application/Mobileapp2/shirtProject/Image/aboutreact.png')}
            style={stylesSidebar.profileHeaderPicCircle}
          />
        </View>
        <Text style={stylesSidebar.profileHeaderText}>KZ Shop</Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />
      <View style={{width: '100%', flex: 1}}>
        {items.map((item, key) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 20,
              color: 'white',
              backgroundColor:
                global.currentScreenIndex === item.screenToNavigate
                  ? '#4b9ff2'
                  : '#808080',
            }}
            key={key}
            onStartShouldSetResponder={() =>
              handleClick(key, item.screenToNavigate)
            }>
            <Text style={{fontSize: 15, color: 'white'}}>
              {item.navOptionName}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#808080',
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#808080',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
    marginBottom: 10,
  },
  logout: {
    textShadowColor: 'red',
  },
});
export default CustomSidebarMenu;
