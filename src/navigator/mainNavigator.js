import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile118920Navigator from '../features/UserProfile118920/navigator';
import Tutorial118919Navigator from '../features/Tutorial118919/navigator';
import NotificationList118891Navigator from '../features/NotificationList118891/navigator';
import Settings118890Navigator from '../features/Settings118890/navigator';
import Settings118882Navigator from '../features/Settings118882/navigator';
import UserProfile118880Navigator from '../features/UserProfile118880/navigator';
import UserProfile118849Navigator from '../features/UserProfile118849/navigator';
import Tutorial118848Navigator from '../features/Tutorial118848/navigator';
import NotificationList118820Navigator from '../features/NotificationList118820/navigator';
import Settings118819Navigator from '../features/Settings118819/navigator';
import Settings118811Navigator from '../features/Settings118811/navigator';
import UserProfile118809Navigator from '../features/UserProfile118809/navigator';
import UserProfile118778Navigator from '../features/UserProfile118778/navigator';
import Tutorial118777Navigator from '../features/Tutorial118777/navigator';
import NotificationList118749Navigator from '../features/NotificationList118749/navigator';
import Settings118748Navigator from '../features/Settings118748/navigator';
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
UserProfile118920: { screen: UserProfile118920Navigator },
Tutorial118919: { screen: Tutorial118919Navigator },
NotificationList118891: { screen: NotificationList118891Navigator },
Settings118890: { screen: Settings118890Navigator },
Settings118882: { screen: Settings118882Navigator },
UserProfile118880: { screen: UserProfile118880Navigator },
UserProfile118849: { screen: UserProfile118849Navigator },
Tutorial118848: { screen: Tutorial118848Navigator },
NotificationList118820: { screen: NotificationList118820Navigator },
Settings118819: { screen: Settings118819Navigator },
Settings118811: { screen: Settings118811Navigator },
UserProfile118809: { screen: UserProfile118809Navigator },
UserProfile118778: { screen: UserProfile118778Navigator },
Tutorial118777: { screen: Tutorial118777Navigator },
NotificationList118749: { screen: NotificationList118749Navigator },
Settings118748: { screen: Settings118748Navigator },
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
