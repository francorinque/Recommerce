import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'

import { Footer, Layout, NavBar, Overlay } from '../components'
import { lazy } from 'react'
import { Suspense } from 'react'

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
      <Footer />
    </BrowserRouter>
  )
}
export default Routes
