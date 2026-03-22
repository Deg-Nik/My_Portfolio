import styled from "@emotion/styled"

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 60px 0;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  background: linear-gradient(90deg, #0070f3, #7928ca);
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`

export const Text = styled.p`
  font-size: 18px;
  color: #444;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
`

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`

export const ContactItem = styled.li``

export const ContactLink = styled.a`
  font-size: 20px;
  color: #0070f3;
  text-decoration: none;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`
