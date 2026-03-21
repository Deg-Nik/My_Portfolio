import { useOutlet, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import {
  Wrapper,
  Container,
  Header,
  Logo,
  Nav,
  NavItem,
  Main,
  Footer,
} from "./styles"
import { ROUTES } from "constants/routes"

export default function Layout() {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <Wrapper>
      <Container>
        <Header>
          <Logo>My Portfolio</Logo>

          <Nav>
            <NavItem to={ROUTES.HOME} >Home</NavItem>
            <NavItem to={ROUTES.PROJECTS}>Projects</NavItem>
            <NavItem to={ROUTES.ABOUT}>About</NavItem>
            <NavItem to={ROUTES.CONTACT}>Contact</NavItem>
          </Nav>
        </Header>
      </Container>

      <Container>
        <Main>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {outlet}
            </motion.div>
          </AnimatePresence>
        </Main>
      </Container>

      <Container>
        <Footer>© {new Date().getFullYear()} — All rights reserved</Footer>
      </Container>
     
    </Wrapper>
  )
}
