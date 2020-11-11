import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps171415Navigator from '../features/Maps171415/navigator';
import Settings171393Navigator from '../features/Settings171393/navigator';
import Settings171378Navigator from '../features/Settings171378/navigator';
import NotificationList171377Navigator from '../features/NotificationList171377/navigator';
import Maps171376Navigator from '../features/Maps171376/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps171415: { screen: Maps171415Navigator },
Settings171393: { screen: Settings171393Navigator },
Settings171378: { screen: Settings171378Navigator },
NotificationList171377: { screen: NotificationList171377Navigator },
Maps171376: { screen: Maps171376Navigator },

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
