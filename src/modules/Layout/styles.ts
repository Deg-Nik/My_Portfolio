import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
`


export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
  background: transparent; /* ← важно */
  position: relative;
  z-index: 1; /* ← поднимаем контент, но не перекрываем фон */
`


export const Header = styled.header`
  width: 100%;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #111;
`

export const Nav = styled.nav`
  display: flex;
  gap: 24px;

  @media (max-width: 640px) {
    gap: 16px;
  }
`

export const NavItem = styled(NavLink)`
  font-size: 18px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: 0.2s;

  &[aria-current="page"] {
    color: #0070f3;
    font-weight: 600;
  } 

  &:hover {
    color: #0070f3;
  }
`


export const Main = styled.main`
  width: 100%;
  padding: 60px 0 40px 0;

  @media (max-width: 768px) {
    padding: 40px 0 20px 0;
  }
`

export const Footer = styled.footer`
  width: 100%;
  padding: 40px 0 30px 0;
  text-align: center;
  color: #777;
  font-size: 14px;
`
