import Registration from './pages/register';
import Login from './pages/login';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';


const screen = createStackNavigator({

      Registration:{
         screen:Registration
      },
      Login:{
        screen:Login
      }

})