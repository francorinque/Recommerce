import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/index.js'
import { FiltersProvider, RectProvider, MenuProvider } from './context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <FiltersProvider>
          <RectProvider>
            <MenuProvider>
              <App />
            </MenuProvider>
          </RectProvider>
        </FiltersProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
