/**
 * @format
 * 
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
// import App from './src/pages/welcome/WelcomePage';
import {name as appName} from './app.json';

// class App extends Component{
//     render(){
//         return (
//             <AppContainer/>
//         )
//     }
// }
AppRegistry.registerComponent(appName, () => App);
