import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import { StatusBar } from 'react-native';
import './config/ReactotronConfig';

import {store, persistor} from './store';
import Routes from './routes';

// import { Container } from './styles';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#9da0eb"/>
        </PersistGate>
      <Routes />
    </Provider>
  );
}

export default App;