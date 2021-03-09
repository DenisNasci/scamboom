import React from 'react';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';
import Routes from './routes';

// import { Container } from './styles';

const App = () => {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#9da0eb"/>
    <Routes />
    </>
  );
}

export default App;