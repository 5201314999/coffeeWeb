
import React,{Component} from 'react';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import Homepage from '../homepage/Homepage';
import Menu from '../menu/Menu';
import Order from '../order/Order';
import Cart from '../cart/Cart';
import MyPage from '../myPage/MyPage';

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