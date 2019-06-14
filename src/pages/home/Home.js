
import React,{Component} from 'react';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import Homepage from '../homepage/Homepage';
import Menu from '../menu/Menu';
import Order from '../order/Order';
import Cart from '../cart/Cart';
import MyPage from '../myPage/MyPage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Alert} from 'react-native';
// 对应整个app 页面
export default class Home extends Component{

    _tabRender(){
        return createAppContainer(createBottomTabNavigator({
            Homepage:{
                screen:Homepage,
                navigationOptions:{
                    title:'首页'
                }
            },
            Menu:{
                screen:Menu,
                navigationOptions:{
                    title:'菜单'
                }
            },
            Order:{
                screen:Order,
                navigationOptions:{
                    title:'订单'
                }
            },
            Cart:{
                screen:Cart,
                navigationOptions:{
                    title:'购物车'
                }
            },
            myPage:{
                screen:MyPage,
                navigationOptions:{
                    title:'我的'
                }
            }
            },{
                defaultNavigationOptions: ({ navigation }) => ({
                    tabBarIcon: ({ focused, horizontal, tintColor }) => {
                      const { routeName } = navigation.state;
                      let iconName;
                      if (routeName === 'Homepage') {
                        iconName = `home`;
                      } else if (routeName === 'Menu') {
                        iconName = `rest`;
                      } else if (routeName === 'Order') {
                        iconName = `profile`;
                      } else if (routeName === 'Cart') {
                        iconName = `shoppingcart`;
                      } else{
                        iconName = `user`;
                      }
                    
                      return <AntDesign name={iconName} size={25} color={tintColor} />;
                    },
                  }),
                activeTintColor: '#e91e63',
                labelStyle: {
                  fontSize: 12,
                },
                style: {
                  backgroundColor: 'blue',
                },
            })
        );
    }
    render(){
        const Tab=this._tabRender();
        return (
                <Tab/>
        )
    }

}