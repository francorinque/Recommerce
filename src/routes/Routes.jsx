import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'

import { Layout, NavBar } from '../components'
import { lazy } from 'react'
import { Suspense } from 'react'
import Overlay from '../components/UI/Overlay/Overlay'

const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const AboutPage = lazy(() => import('../pages/About/About'))

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Overlay />
      <Layout>
        <Suspense fallback={null}>
          <Switch>
            <Route path='/about' element={<AboutPage />} />
            <Route path='/' element={<HomePage />} />
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}
export default Routes
