import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings118669Navigator from '../features/Settings118669/navigator';
import UserProfile118667Navigator from '../features/UserProfile118667/navigator';
import UserProfile118636Navigator from '../features/UserProfile118636/navigator';
import Tutorial118635Navigator from '../features/Tutorial118635/navigator';
import NotificationList118607Navigator from '../features/NotificationList118607/navigator';
import Settings118606Navigator from '../features/Settings118606/navigator';
import Settings118598Navigator from '../features/Settings118598/navigator';
import UserProfile118596Navigator from '../features/UserProfile118596/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings118669: { screen: Settings118669Navigator },
UserProfile118667: { screen: UserProfile118667Navigator },
UserProfile118636: { screen: UserProfile118636Navigator },
Tutorial118635: { screen: Tutorial118635Navigator },
NotificationList118607: { screen: NotificationList118607Navigator },
Settings118606: { screen: Settings118606Navigator },
Settings118598: { screen: Settings118598Navigator },
UserProfile118596: { screen: UserProfile118596Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
