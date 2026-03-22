import { motion } from "framer-motion"
import {
  PageWrapper,
  Title,
  Grid,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardTags,
  Tag,
  CardLink,
} from "./styles"

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Modern animated portfolio built with React, TypeScript, Emotion and Framer Motion.",
      image: "/My_Portfolio/portfolio.png",
      tags: ["React", "TypeScript", "Emotion", "Framer Motion"],
    },
    {
      title: "Weather App",
      description:
        "A modern weather application featuring real‑time data, smart city search, geolocation support, and a clean animated interface.",
      image: "/My_Portfolio/weather.png",
      tags: ["React", "Node.js", "Express", "PostgreSQL"],
      link: "https://deg-nik.github.io/Weather_App_Demo/",
    },
    {
      title: "Web page",
      description:
        "A lightweight and responsive static web page featuring a clean layout, modern styling, and accessible content presentation. Designed to deliver information clearly on both desktop and mobile devices.",
      image: "/My_Portfolio/webpage.png",
      tags: ["React", "Redux", "Spring Boot", "REST API"],
      link: "https://deg-nik.github.io/Web_pages",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <PageWrapper>
        <Title>Projects</Title>

        <Grid>
          {projects.map((p, i) => (
            <Card
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25 }}
            >
              <CardImage src={p.image} alt={p.title} />

              <CardContent>
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.description}</CardDescription>

                <CardTags>
                  {p.tags.map((t, idx) => (
                    <Tag key={idx}>{t}</Tag>
                  ))}
                </CardTags>

                {p.link && (
                  <CardLink
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </CardLink>
                )}
              </CardContent>
            </Card>
          ))}
        </Grid>
      </PageWrapper>
    </motion.div>
  )
}
