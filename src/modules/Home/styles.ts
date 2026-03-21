import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

export const HomeWrapper = styled.div`
  position: relative;
  z-index: 1; /* ← поднимаем контент над glow */
  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 20px;
  gap: 24px;

  background: transparent; /* ← важно, чтобы не перекрывать фон */
`



export const AvatarWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    z-index: -1;
    filter: blur(40px);
    animation: pulse 6s ease-in-out infinite alternate;
  }

  &::before {
    background: rgba(0, 112, 243, 0.6);
  }

  &::after {
    background: rgba(121, 40, 202, 0.6);
    animation-duration: 8s;
  }

  @keyframes pulse {
    from { transform: scale(1); opacity: 0.7; }
    to { transform: scale(1.2); opacity: 1; }
  }
`

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(90deg, #0070f3, #7928ca);
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 42px;
  }
`

export const Subtitle = styled.h2`
  font-size: 28px;
  font-weight: 500;
  color: #444;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`

export const Description = styled.p`
  max-width: 700px;
  font-size: 20px;
  line-height: 1.7;
  color: #555;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`

export const PrimaryButton = styled(NavLink)`
  padding: 14px 28px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  color: #111;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: rgba(255,255,255,0.2);
    transform: translateY(-3px);
  }
`

export const SecondaryButton = styled(NavLink)`
  padding: 14px 28px;
  border: 2px solid #111;
  border-radius: 12px;
  color: #111;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
  }
`

export const Socials = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`

export const SocialIcon = styled.a`
  font-size: 18px;
  color: #0070f3;
  font-weight: 600;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    color: #7928ca;
  }
`
