import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import persistReducers from './persistReducers';

import rooReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

// sagaMonitor, para capturar todas as Actions disparadas em ambiente de desenvolvimento. Usado pelo middleware para despachar eventos de monitoramento.
const sagaMonitor =
  __DEV__ === 'development' ? console.tron.createSagaMonitor() : null;

// Passamos o sagaMonitor como um elemento de configuração para o Middleware.
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rooReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
