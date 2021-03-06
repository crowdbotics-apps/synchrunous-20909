import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile119993Navigator from '../features/UserProfile119993/navigator';
import Tutorial119992Navigator from '../features/Tutorial119992/navigator';
import NotificationList119964Navigator from '../features/NotificationList119964/navigator';
import Settings119963Navigator from '../features/Settings119963/navigator';
import Settings119955Navigator from '../features/Settings119955/navigator';
import UserProfile119953Navigator from '../features/UserProfile119953/navigator';
import UserProfile119922Navigator from '../features/UserProfile119922/navigator';
import Tutorial119921Navigator from '../features/Tutorial119921/navigator';
import NotificationList119893Navigator from '../features/NotificationList119893/navigator';
import Settings119892Navigator from '../features/Settings119892/navigator';
import Settings119884Navigator from '../features/Settings119884/navigator';
import UserProfile119882Navigator from '../features/UserProfile119882/navigator';
import UserProfile119268Navigator from '../features/UserProfile119268/navigator';
import Tutorial119267Navigator from '../features/Tutorial119267/navigator';
import NotificationList119239Navigator from '../features/NotificationList119239/navigator';
import Settings119238Navigator from '../features/Settings119238/navigator';
import Settings119230Navigator from '../features/Settings119230/navigator';
import UserProfile119228Navigator from '../features/UserProfile119228/navigator';
import UserProfile119059Navigator from '../features/UserProfile119059/navigator';
import Tutorial119058Navigator from '../features/Tutorial119058/navigator';
import NotificationList119030Navigator from '../features/NotificationList119030/navigator';
import Settings119029Navigator from '../features/Settings119029/navigator';
import Settings119021Navigator from '../features/Settings119021/navigator';
import UserProfile119019Navigator from '../features/UserProfile119019/navigator';
import SignIn11118932Navigator from '../features/SignIn11118932/navigator';
import Maps3118930Navigator from '../features/Maps3118930/navigator';
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
UserProfile119993: { screen: UserProfile119993Navigator },
Tutorial119992: { screen: Tutorial119992Navigator },
NotificationList119964: { screen: NotificationList119964Navigator },
Settings119963: { screen: Settings119963Navigator },
Settings119955: { screen: Settings119955Navigator },
UserProfile119953: { screen: UserProfile119953Navigator },
UserProfile119922: { screen: UserProfile119922Navigator },
Tutorial119921: { screen: Tutorial119921Navigator },
NotificationList119893: { screen: NotificationList119893Navigator },
Settings119892: { screen: Settings119892Navigator },
Settings119884: { screen: Settings119884Navigator },
UserProfile119882: { screen: UserProfile119882Navigator },
UserProfile119268: { screen: UserProfile119268Navigator },
Tutorial119267: { screen: Tutorial119267Navigator },
NotificationList119239: { screen: NotificationList119239Navigator },
Settings119238: { screen: Settings119238Navigator },
Settings119230: { screen: Settings119230Navigator },
UserProfile119228: { screen: UserProfile119228Navigator },
UserProfile119059: { screen: UserProfile119059Navigator },
Tutorial119058: { screen: Tutorial119058Navigator },
NotificationList119030: { screen: NotificationList119030Navigator },
Settings119029: { screen: Settings119029Navigator },
Settings119021: { screen: Settings119021Navigator },
UserProfile119019: { screen: UserProfile119019Navigator },
SignIn11118932: { screen: SignIn11118932Navigator },
Maps3118930: { screen: Maps3118930Navigator },
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
