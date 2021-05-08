import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginPage from './../components/LoginPage';
import SignupPage from './../components/SignupPage';

const screens = {
  
  sign: {
    screen: SignupPage,
    navigationOptions: {
      title: 'sign',
      headerShown: false
    },
  },  
  login: {
    screen: LoginPage,
    navigationOptions: {
      title: 'login',
      headerShown: false
    },
  }

}





const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);