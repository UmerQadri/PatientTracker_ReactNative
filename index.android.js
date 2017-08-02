/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StatusBar
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import AddPatient from './components/AddPatient';
import HomeScreen from './components/HomeScreen';


import { COLOR, ThemeProvider, Toolbar} from 'react-native-material-ui';

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 80,
            // paddingTop: StatusBar.currentHeight,
        },
    },
};




  

const  SimpleAppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Add: { screen: AddPatient },
  
}, {headerMode: 'float'}
);

const AppNavigation = () => (
  <SimpleAppNavigator  />
           
);

export default class App extends Component {



  render() {

    
    return (
      <ThemeProvider uiTheme={uiTheme}>
        

        <AppNavigation/>
        
 </ThemeProvider>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => App);
