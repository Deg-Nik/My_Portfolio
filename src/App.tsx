import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ROUTES } from "./constants/routes"
import Layout from "modules/Layout/Layout"
import Home from "modules/Home/Home"
import Projects from "modules/Projects/Projects"

function App() {
  return (
    <BrowserRouter basename="/portfolio/">
      <Routes>
        <Route  element={<Layout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
