import { motion } from "framer-motion"
import {
  HomeWrapper,
  AvatarWrapper,
  Avatar,
  Title,
  Subtitle,
  Description,
  ButtonGroup,
  SecondaryButton,
  Socials,
  SocialIcon,
} from "./styles"
import { ROUTES } from "constants/routes"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <HomeWrapper>
        <AvatarWrapper>
          <Avatar src="/My_Portfolio/avatar.jpg" alt="Nikolai" />
        </AvatarWrapper>

        <Title>Hi, I'm Nikolai</Title>
        <Subtitle>Frontend & Backend Developer</Subtitle>
        <Description>
          Junuior Full‑Stack Developer.
        </Description>
        <Description>
           I design and build complete web applications —
          from polished, animated interfaces to secure, scalable backend
          systems. My expertise includes Python, Java, JavaScript, React, TypeScript, Redux, Emotion,
          Spring Boot, PostgreSQL, and clean architecture patterns. I care about
          code quality, performance and developer experience. My goal is to
          create software that is elegant inside and out: visually refined,
          technically solid and easy to maintain.
        </Description>

        <ButtonGroup>
          <SecondaryButton to={ROUTES.PROJECTS}>View Projects</SecondaryButton>
          <SecondaryButton to={ROUTES.CONTACT}>Contact Me</SecondaryButton>
        </ButtonGroup>

        <Socials>
          <SocialIcon href="https://github.com/Deg-Nik" target="_blank">
            GitHub
          </SocialIcon>
          <SocialIcon href="mailto:degnikolaj@gmail.com">Email</SocialIcon>
        </Socials>
      </HomeWrapper>
    </motion.div>
  )
}
