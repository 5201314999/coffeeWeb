import {createStackNavigator,createBottomTabNavigator,createSwitchNavigator} from 'react-navigation';

import WelcomePage from '../pages/welcome/WelcomePage';

import Home from '../pages/home/Home';


export const initNavigator=createStackNavigator({
        Welcome:{
            screen:WelcomePage,
            navigationOptions:{
                header:null
            }
        }
    }
 );

export const MainNavigator=createStackNavigator({
        Home:{
            screen:Home,
            navigationOptions:{
                header:null
            }
        }
    }
 );



export const appNavigator=createSwitchNavigator({
        Init:initNavigator,
        Main:MainNavigator
    },{
        initialRouteName:'Init'
    }
);
