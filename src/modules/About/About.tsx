import { motion } from "framer-motion"
import {
  PageWrapper,
  Title,
  TextBlock,
  Paragraph,
  SkillsSection,
  SkillTag
} from "./styles"

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <PageWrapper>
        <Title>About Me</Title>

        <TextBlock>
          <Paragraph>
            I’m a full‑stack developer passionate about building modern, fast, and visually rich web applications. 
            I focus on clean architecture, smooth UI/UX, and scalable code that’s easy to maintain.
          </Paragraph>

          <Paragraph>
            My experience includes frontend development with React, TypeScript, Emotion, and Framer Motion, 
            as well as backend development with Node.js, Express, Spring Boot, and PostgreSQL.
          </Paragraph>

          <Paragraph>
            I love creating polished interfaces, animations, and premium‑quality layouts inspired by top tech companies.
          </Paragraph>
        </TextBlock>

        <SkillsSection>
          <SkillTag>React</SkillTag>
          <SkillTag>TypeScript</SkillTag>
          <SkillTag>Emotion</SkillTag>
          <SkillTag>Framer Motion</SkillTag>
          <SkillTag>Node.js</SkillTag>
          <SkillTag>Express</SkillTag>
          <SkillTag>Spring Boot</SkillTag>
          <SkillTag>PostgreSQL</SkillTag>
        </SkillsSection>
      </PageWrapper>
    </motion.div>
  )
}
