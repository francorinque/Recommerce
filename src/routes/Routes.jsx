import { BrowserRouter, Route, Routes as Switch } from "react-router-dom"

import { Footer, Layout, NavBar, Overlay } from "../components"
import { About, Details, HomePage } from "../pages"

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Overlay />
      <Layout>
        <Switch>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<HomePage />} />
        </Switch>
      </Layout>
      <Footer />
    </BrowserRouter>
  )
}
export default Routes
