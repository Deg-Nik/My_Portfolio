import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ROUTES } from "./constants/routes"
import Layout from "modules/Layout/Layout"
import Home from "modules/Home/Home"
import Projects from "modules/Projects/Projects"
import About from "modules/About/About"
import Contact from "modules/Contact/Contact"

function App() {
  return (
    <BrowserRouter basename="/My_Portfolio/">
      <Routes>
        <Route  element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
          <Route path={ROUTES.ABOUT} element={<About/>} />
          <Route path={ROUTES.CONTACT} element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
