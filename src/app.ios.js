import { AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import ViewPhotos from './ViewPhotos';
import ShowPhotos from './ShowPhotos';
import Camera from './Camera';
import Test from './test';
import ObjectiveC from './ObjectiveC';
import Calendar from './CalendarManager';

const MainHomeNavigator = TabNavigator({
  ViewPhotos: { screen: ViewPhotos },
  Camera: { screen: Camera },
  ObjectiveC: { screen: ObjectiveC},
  Calendar: { screen: Calendar},
  //Test: { screen: Test },
});

MainHomeNavigator.navigationOptions = {
  title: 'Home'
};

const App = StackNavigator({
  Home: { screen: MainHomeNavigator},
  Profile: { screen: ShowPhotos},
});

AppRegistry.registerComponent('kakaApp', () => App);
