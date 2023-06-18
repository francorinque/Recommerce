import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MenuProvider from './context/MenuContext.jsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/index.js'
import { FiltersProvider } from './context/FiltersContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <FiltersProvider>
          <MenuProvider>
            <App />
          </MenuProvider>
        </FiltersProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
