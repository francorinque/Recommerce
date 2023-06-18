import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import { Layout, NavBar } from '../components'
import { HomePage } from '../pages'
import Overlay from '../components/UI/Overlay/Overlay'

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Overlay />
      <Layout>
        <Switch>
          <Route path='/' element={<HomePage />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
export default Routes
