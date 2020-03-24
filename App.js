import Registration from './pages/register';
import Login from './pages/login';
import Profile from './pages/profile';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';


const screen = createStackNavigator({

  
      Login:{
        screen:Login,
        navigationOptions:{
           
        }
      },
      Registration:{
        screen:Registration,
        navigationOptions:{
           title:"hi there register !"
        }
      },
      Profile:{
       screen:Profile,
       navigationOptions:{
         headerMode: 'none'
      }
     },
     


})


const render = createAppContainer(screen);


export default render;