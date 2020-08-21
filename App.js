/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Main from './src/screens/Main';
import Driver from './src/screens/Driver';
import {Provider} from 'react-redux';
import configureStore from './src/store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Stack key="root">
        <Scene key="Main" initial={true} component={Main} />
        <Scene key="Driver" component={Driver} />
      </Stack>
    </Router>
  </Provider>
);

export default App;
