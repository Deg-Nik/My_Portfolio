import { motion } from "framer-motion"
import {
  PageWrapper,
  Title,
  Text,
  ContactList,
  ContactItem,
  ContactLink,
} from "./styles"

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <PageWrapper>
        <Title>Contact</Title>

        <Text>
          I’m ready to work in this field and open to new opportunities. If you
          have a project, collaboration idea, or job offer — feel free to reach
          out.
        </Text>

        <ContactList>
          <ContactItem>
            <ContactLink href="mailto:degnikolaj@gmail.com">
              degnikolaj@gmail.com
            </ContactLink>
          </ContactItem>

          <ContactItem>
            <ContactLink href="https://github.com/Deg-Nik" target="_blank">
              GitHub
            </ContactLink>
          </ContactItem>

          <ContactItem>
            <ContactLink
              href="https://www.linkedin.com/in/nikolai-degtiarev-95392a391/"
              target="_blank"
            >
              LinkedIn
            </ContactLink>
          </ContactItem>
        </ContactList>
      </PageWrapper>
    </motion.div>
  )
}
