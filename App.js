import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreens from "./src/screens/IndexScreens";

const navigator = createStackNavigator({
  Index: IndexScreens
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

export default createAppContainer(navigator);
