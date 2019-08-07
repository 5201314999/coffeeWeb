/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Alert} from 'react-native';
import themeControl,{updateTheme} from '../../common/theme';

export default class MyPage extends Component{
  constructor(props){
    super(props);
    this.state={
      color:themeControl.background
    };
  }
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>MyPage 页</Text>
          <Button onPress={this.onPress.bind(this)} title="点击切换主题"></Button>
          <Text style={styles.welcome}>{this.state.color}</Text>
        </View>
    );
  }
  onPress(){
    updateTheme(true);
    this.setState({color:themeControl.background});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
