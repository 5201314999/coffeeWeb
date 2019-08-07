
import React,{Component} from 'react';
import {createBottomTabNavigator,createAppContainer, createStackNavigator} from 'react-navigation';
import Homepage from '../homepage/Homepage';
import MenuPage from '../menu/MenuPage';
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
            MenuPage:{
                screen:MenuPage,
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
                initialRouteName:'MenuPage',
                defaultNavigationOptions: ({ navigation }) => ({
                    tabBarIcon: ({ focused, horizontal, tintColor }) => {
                      const { routeName } = navigation.state;
                      let iconName;
                      if (routeName === 'Homepage') {
                        iconName = `home`;
                      } else if (routeName === 'MenuPage') {
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
                  tabBarOptions:{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                  }
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