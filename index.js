/**
 * @format
 */

import {AppRegistry} from 'react-native';
import YourApp from './App';
import {name as appName} from './app.json';
// import "./i18n.config"; // <-- this line added
import i18n from './languages/i18n'
AppRegistry.registerComponent(appName, () => YourApp);
