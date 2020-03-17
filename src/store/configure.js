// https://github.com/diegohaz/arc/wiki/Redux-modules
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import { LOCATION_CHANGE } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createMiddleware } from 'redux-beacon'
import GoogleAnalytics, { trackPageView, trackEvent } from '@redux-beacon/google-analytics'
import GoogleTagManager from '@redux-beacon/google-tag-manager'
import { isDev, isBrowser } from 'config'
import LogRocket from 'logrocket'
import middlewares from './middlewares'
import reducer from './reducer'
import sagas from './sagas'
import api from 'services/api'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const sagaMiddleware = createSagaMiddleware()

const ga = GoogleAnalytics()
const eventsMap = {
  [LOCATION_CHANGE]: trackPageView(action => {
    return {
      page: action.payload.pathname,
      title: "My amazing page title"
    }
  })
}

const gaMiddleware = createMiddleware(eventsMap, ga)

const gtm = GoogleTagManager()
const gtmMiddleware = createMiddleware(eventsMap, gtm)

const enhancers = [
  applyMiddleware(
    ...middlewares,
    sagaMiddleware,
    gaMiddleware,
    gtmMiddleware,
    LogRocket.reduxMiddleware(),
  ),
  // devtools(),
]

export default () => {
  let store = createStore(persistedReducer, composeWithDevTools(...enhancers))
  let persistor = persistStore(store)

  let sagaTask = sagaMiddleware.run(sagas, { api: api.create() })

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default
      store.replaceReducer(
        persistReducer(persistConfig, nextReducer)
      )
    })
    module.hot.accept('./sagas', () => {
      const nextSagas = require('./sagas').default
      sagaTask.cancel()
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(nextSagas, { api: api.create() })
      })
    })
  }

  return { store, persistor }
}