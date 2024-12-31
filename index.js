import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Import necessary libraries
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';

// Enable screens for performance
enableScreens();

// Register the app with AppRegistry for both native and web
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'), // Ensure the HTML element exists
});
