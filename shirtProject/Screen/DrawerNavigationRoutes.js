/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import Navigators
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

//Import External Screens
import HomeScreen from './drawerScreens/HomeScreen';
import ProfileScreen from './drawerScreens/ProfileScreen';
import DetailScreen from './drawerScreens/DetailScreen';
import SearchScreen from './drawerScreens/SearchScreen';
import ListviewScreen from './drawerScreens/ListviewScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#808080',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SecondActivity_StackNavigator = createStackNavigator({
  First: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#808080',
      },
      headerTintColor: '#fff',
    }),
  },
});

const ThirdActivity_StackNavigator = createStackNavigator({
  First: {
    screen: DetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Detail Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#808080',
      },
      headerTintColor: '#fff',
    }),
  },
});

const FourActivity_StackNavigator = createStackNavigator({
  First: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Search Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#808080',
      },
      headerTintColor: '#fff',
    }),
  },
});

const FiveActivity_StackNavigator = createStackNavigator({
  First: {
    screen: ListviewScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Listview Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#808080',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorRoutes = createDrawerNavigator(
  {
    HomeScreen: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Home Screen',
      },
    },
    ProfileScreen: {
      screen: SecondActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Profile Screen',
      },
    },
    DetailScreen: {
      screen: ThirdActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Detail Screen',
      },
    },
    SearchScreen: {
      screen: FourActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Search Screen',
      },
    },
    ListviewScreen: {
      screen: FiveActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Listview Screen',
      },
    },
  },
  {
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);
export default DrawerNavigatorRoutes;