import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MenuProvider from './context/MenuContext.jsx'
import { Provider } from 'react-redux'
import store from './redux/index.js'
import { FiltersProvider } from './context/FiltersContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <FiltersProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </FiltersProvider>
    </Provider>
  </React.StrictMode>
)
