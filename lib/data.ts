import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import weatherpicImg from "@/public/weatherpic.png";
import portfoliopictureImg from "@/public/portfoliopicture.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
          "Crafted a robust portfolio website using React.js, Next.js, and TypeScript, highlighting technical prowess and creativity.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: portfoliopictureImg,
  },
  {
    title: "WEATHER API PROJECT",
    description:
      "J Engineered a Weather app using JavaScript with an intuitive and user-friendly interface",
    tags: ["JavaScript", "APIs", "CSS", "HTML"],
    imageUrl: weatherpicImg,
  },
  {
    title: "TEXT-BASED SLOT MACHINE",
    description:
      " Demonstrated expertise in decision-making and building software components.",
    tags: ["Python", "Data Structures"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "TURTLE RACING GAME",
    description:
      "Developed an engaging racing game utilizing Python’s Turtle module, allowing users to select from a diverse range of turtles for competitive races",
    tags: ["Python", "Data Structures", "Object Oriented Programming", "Python Turtle Module"],
    imageUrl: wordanalyticsImg,
  }
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