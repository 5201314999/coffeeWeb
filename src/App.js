/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {initNavigator,appNavigator} from './common/Navigator'; 
import {createAppContainer} from 'react-navigation';

const AppContainer=createAppContainer(appNavigator);
export default class App extends Component{
  render() {
    return (
      <AppContainer/>
    );
  }
}

