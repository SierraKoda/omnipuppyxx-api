import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers'

const persistConfig = {
      key: 'root',
      storage,
}

const persistedReducer = persistReducer( persistConfig, rootReducer)

export default() => {
  let store = createStore( persistedReducer)
  let persistor = persistStore(store)
  return { store , persistor }
}

import { PersistGate } from 'redux-persist/integration/react'

const App = () = {
  
  return (
    <Provider store={ store }>
     <PersistGate loading={ null } persistor={ persistor }>
      <RootComponent/>
     </PersistGate>
    </Provider>
    );
};

import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
}

import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { authReducer, otherReducer } from './reducers'

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['auth']
  whitelist: ['cache']
}

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  blacklist: ['cache']
  
}

const cachePersistConfig = {
  key: 'cache',
  storage: storage,
  whitelist: ['auth']
  
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  cache: persistReducer(cachePersistConfig,
  otherReducer),
  other: otherReducer,
})

export default persistReducer( rootPersistConfig, rootReducer)

import { createTransform } from 'redux-persist'

const SetTransform = createTransform(
  
  (inboundState, key) => {
    return { ...inboundState, mySet:[...inboundState.mySet] };
  },
  (outboundState, key) => {
    return {...outboundState, mySet: new Set(outboundState.mySet) };
  },
  {whitelist: ['rootReducer', 'authReducer', 'otherReducer']}
  );
  
  export default SetTransform;
  
  import storage from 'redux-persist/lib/storage'
  import { SetTransform } from './transforms'
  
  const persistConfig = {
    key: 'root',
    storage: storage,
    transforms: [ SetTransform ]
  };
  