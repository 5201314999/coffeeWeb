import React,{Component} from 'react';
import {StyleSheet,Text,View,Image,Alert,Button} from 'react-native';
import {welcomeTime} from '../../common/config';
const welcome=require('../../assets/welcome.jpg');

export default class WelcomePage extends Component{
    componentDidMount(){
        const {navigation}=this.props;
        // Alert.alert('时间', welcomeTime*1000+' ');
        this.timer=setTimeout(()=>{navigation.navigate('Main')},welcomeTime*1000);
        setInterval(()=>{
            this.setState({
                showTime:--this.state.showTime
            });
        },1000);
    }
    componentWillUnmount(){
        this.timer&&clearTimeout(this.timer);
    }
    constructor(props){
        super(props);
        this.state={
            showTime:welcomeTime
        };
    }
    render(){
        return (
            <View style={styles.container}>
                <Image source={welcome} style={{width:'100%',height:'100%'}}></Image>
                <View style={styles.timeWrapper}>
                        <Text style={styles.label} onPress={this.onPress}>跳过 <Text style={styles.time}>{this.state.showTime}s</Text></Text>
                </View>
            </View>
        )
    }
    onPress=()=>{
        this.props.navigation.navigate('Main');
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    timeWrapper:{
        position:'absolute',
        height:30,
        top:20,
        right:20,
        padding:10,
        backgroundColor:'rgba(255,255,255,0.5)',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    label:{
        color:'#fff'
    },
    time:{
        color:'#063947'
    }
})
