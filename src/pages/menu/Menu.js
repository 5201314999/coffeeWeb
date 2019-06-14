/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class MenuPage extends Component{
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Menu 页</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
