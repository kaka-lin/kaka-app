import { AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Home from './Home';
import Home2 from './Home2';

const MainHomeNavigator = TabNavigator({
  Home1: { screen: Home },
  Home2: { screen: Home2 },
});

MainHomeNavigator.navigationOptions = {
  title: 'Home'
};

const App = StackNavigator({
  Home: { screen: MainHomeNavigator},
  //Profile: { screen: ViewPhotos},
});

AppRegistry.registerComponent('kakaApp', () => App);
