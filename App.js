import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreens from "./src/screens/IndexScreens";
import {Provider as BlogProvider} from "./src/context/BlogContext";
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';

const navigator = createStackNavigator({
  IndexScreen: IndexScreens,
    ShowScreen,
    CreateScreen
}, {
  initialRouteName: 'IndexScreen',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

const App = createAppContainer(navigator);

export default () => (
    <BlogProvider>
      <App/>
    </BlogProvider>
);
