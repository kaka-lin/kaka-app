import { AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Home from './Home';
import Camera from './Camera';
import Test from './test';
import ViewPhotos from './ViewPhotos';

const MainHomeNavigator = TabNavigator({
  Home1: { screen: Home },
  Home2: { screen: Camera },
  Home3: { screen: Test },
});

MainHomeNavigator.navigationOptions = {
  title: 'Home'
};

const App = StackNavigator({
  Home: { screen: MainHomeNavigator},
  Profile: { screen: ViewPhotos},
});

AppRegistry.registerComponent('kakaApp', () => App);
