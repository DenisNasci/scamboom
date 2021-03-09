import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';
import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor = __DEV___ 
? console.tron.createSagaMonitor() : null;

const sagaMeddleware = createSagaMiddleware( {sagaMonitor} );

const middlewares = [sagaMeddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMeddleware.run(rootSaga);

export {store, persistor};