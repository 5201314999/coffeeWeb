import React,{Component} from 'react';
import {StyleSheet,Text} from 'react-native';

export default class WelcomePage{
    render(){
        return (
            <View class={styles.container}>
                <Text class={styles.welecom}>这是欢迎页</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#F5FCFF',
    },
    welcome:{
        fontSize:14
    }
})