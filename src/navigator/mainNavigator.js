import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings118740Navigator from '../features/Settings118740/navigator';
import UserProfile118738Navigator from '../features/UserProfile118738/navigator';
import UserProfile118707Navigator from '../features/UserProfile118707/navigator';
import Tutorial118706Navigator from '../features/Tutorial118706/navigator';
import NotificationList118678Navigator from '../features/NotificationList118678/navigator';
import Settings118677Navigator from '../features/Settings118677/navigator';
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
Settings118740: { screen: Settings118740Navigator },
UserProfile118738: { screen: UserProfile118738Navigator },
UserProfile118707: { screen: UserProfile118707Navigator },
Tutorial118706: { screen: Tutorial118706Navigator },
NotificationList118678: { screen: NotificationList118678Navigator },
Settings118677: { screen: Settings118677Navigator },
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
