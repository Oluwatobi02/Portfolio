import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import weatherpicImg from "@/public/IMG_5624.jpg";
import teachableImg from "@/public/IMG_5618.jpg"
import spaceathonImg from "@/public/IMG_5620.jpg"
import portfoliopictureImg from "@/public/portfoliopicture.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Personal Portfolio Website",
    description:
          " Crafted a robust portfolio website using React.js, Next.js, and TypeScript, highlighting technical prowess and creativity.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: portfoliopictureImg,
  },
  {
    title: "Teachable",
    description:
    " Teachable revolutionizes student connections and knowledge-sharing with a dynamic platform inspired by popular social apps.",
    tags: ["React", "CSS", "Nodejs", "MongoDB"],
    imageUrl: teachableImg,
  },
  {
    title: "Space-A-Thon",
    description:
      " Space-A-Thon is an impactful educational web application on space exploration, missions, phenomena, and an interactive quiz section to reinforce learning",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: spaceathonImg,
  },
  {
    title: "WEATHER API PROJECT",
    description:
      " Engineered a Weather app using JavaScript with an intuitive and user-friendly interface",
    tags: ["JavaScript", "OpenWeatherMap API", "CSS", "HTML"],
    imageUrl: weatherpicImg,
  },

] as const;

export const skillsData = [
  "Python",
  "TypeScript",
  "JavaScript",
  "React",
  "Data Structures and Algorithm",
  "Object Oriented Programming",
  "HTML",
  "CSS",
  "Next.js",
  "Node.js",
  "Tailwind",
] as const;