import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'react-native';
import './config/ReactotronConfig';

import {store, persistor} from './store';
import MainStack from './navigators/MainStack';
import  MainTab from './navigators/MainTabs'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#9da0eb"/>
        </PersistGate>
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    </Provider>
  );
}

export default App;