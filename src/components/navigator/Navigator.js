import {createStackNavigator,createMaterialTopTabNavigator,createBottomTabNavigator,createSwitchNavigator} from 'react-navigation';

import HomePage from '../../pages/home/HomePage';
import Menupage from '../../pages/menu/MenuPage';

 const initNavigator=createStackNavigator({
     WelcomePage:{
         screen:WelcomePage,
         navigationOptions:{
             header:null, //不显示
         }
     }
 });

 const MainNavigator=createStackNavigator({
     HomePage:{
         screen:HomePage,
         navigationOptions:{
            header:null, //不显示
        }
     },
     MenuPage:{
         screen:MenuPage,
         navigationOptions:{
            header:null, //不显示
        }
     }
 });

export default createSwitchNavigator({
    Init:initNavigator,
    Main:MainNavigator
    },{ 
        navigationOptions:{
            header:null 
        }
    }
)

