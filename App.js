import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreens from "./src/screens/IndexScreens";
import {Provider as BlogProvider} from "./src/context/BlogContext";

const navigator = createStackNavigator({
  Index: IndexScreens
}, {
  initialRouteName: 'Index',
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
