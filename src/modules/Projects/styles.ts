import styled from "@emotion/styled"
import { motion } from "framer-motion"

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 60px 0;
`

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  text-align: center;
  background: linear-gradient(90deg, #0070f3, #7928ca);
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
`

export const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.1);
  cursor: pointer;
  transition: 0.3s;
`

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin: 0;
`

export const CardDescription = styled.p`
  font-size: 16px;
  color: #444;
  line-height: 1.6;
`

export const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const Tag = styled.span`
  padding: 6px 12px;
  background: rgba(0,0,0,0.05);
  border-radius: 8px;
  font-size: 14px;
  color: #333;
`
export const CardLink = styled.a`
  margin-top: 8px;
  font-weight: 600;
  color: #0070f3;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    text-decoration: underline;
  }
`
