import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

export default (signIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Profile,
          },
          {
            tabBarOptions: {
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255,255,255,0.7)',
              keyboardHidesTabBar: true, // Faz com que o teclado passe por cima do barra de menu.
              style: {
                backgroundColor: '#8d41a8',
              },
            },
          }
        ),
      },
      { initialRouteName: signIn ? 'App' : 'Sign' }
    )
  );
