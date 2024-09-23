import React from "react";
import project1 from "@/public/project1.png";
import project2 from "@/public/project2.png";
import project3 from "@/public/project3.png";
import { LuBriefcase } from "react-icons/lu";
import { LuCode } from "react-icons/lu";
import { LuGraduationCap } from "react-icons/lu";
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
    title: "Software Engineering Student",
    location: "Brazil",
    description:
      "I am very passionate about technology, which led me to pursue a degree in Software Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Tech Leader - Full Stack Project",
    location: "Brazil",
    description:
      "Led a group project as Tech Leader, building a full-stack web application using React and its ecosystem. I guided the team through the development process, ensuring the integration of front-end and back-end technologies for a seamless user experience.",
    icon: React.createElement(LuCode),
    date: "2023",
  },
  {
    title: "Freelance Developer",
    location: "Brazil",
    description:
      "Currently working as a freelance developer, specializing in building responsive web applications. I collaborate with clients to create efficient and scalable solutions, constantly improving my skills in modern web technologies.",
    icon: React.createElement(LuBriefcase),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Kenzie Hub",
    description:
      " This project was my final delivery at Kenzie Academy Brasil, where I implemented a full CRUD (Create, Read, Update, Delete) system based on an API.",
    tags: ["React", "Zod", "Axios", "Sass", "React Hook Form"],
    imageUrl: project1,
  },
  {
    title: "Logic-Driven React Project",
    description:
    "The project utilizes key concepts such as state management with useState, conditional rendering with JSX.",
    tags: ["React", "Next.js", "Styled Components", "SASS"],
    imageUrl: project2,
  },
  {
    title: "Responsive Cart Simulation",
    description:
      "This project completed during the weekly challenge at Kenzie Academy Brasil. It simulates an e-commerce. ",
    tags: ["React", "Axios", "Next.js", "SASS", "React Toastify"],
    imageUrl: project3,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Java",
  "Springboot",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
