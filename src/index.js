import 'react-hot-loader/patch'
import '@babel/polyfill'
import React, { useEffect } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { basename } from 'config'
import store from 'store/configure'
import App from 'components/App'
import { initPixel, TrackPageView } from "containers/FacebookPixel"
initPixel('2283169651963041')
TrackPageView()

const renderApp = () => {
  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistor}>
        <BrowserRouter basename={basename}>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

const root = document.getElementById('app')
render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    render(renderApp(), root)
  })
}
