import styled from "@emotion/styled"

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

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
`

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: #444;
`

export const SkillsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-top: 20px;
`

export const SkillTag = styled.span`
  padding: 8px 16px;
  background: rgba(0,0,0,0.05);
  border-radius: 10px;
  font-size: 15px;
  color: #333;
  font-weight: 500;
`
