import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import { Layout, NavBar } from '../components'
import { HomePage } from '../pages'

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Layout>
        <Switch>
          <Route path='/' element={<HomePage />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
export default Routes
