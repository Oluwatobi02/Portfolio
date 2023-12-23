"use client";

import React from 'react'
import SectionHeading from './section-heading';
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial= {{ opacity: 0, y: 100 }}
    animate={{ opacity:1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about">
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
        I am a motivated student looking to join the workforce to {" "}
        <span className="font-medium">gain real-world experience.</span>I am enthusiastic about learning from seasoned 
        professionals to cultivate the skills and qualities essential for a 
        successful career. I am determined to showcase my ability to complete 
        tasks efficiently, both independently and within a team. What truly excites me about programming is the{" "}
        <span className="font-medium">problem-soving aspect</span>;{" "}there's nothing quite like the satisfaction
         of unraveling a challenging problem. My expertise lies in{" "}
        <span className="font-bold">Python, JavaScript, React, Next.js</span> I am also familiar with 
        <span className="font-medium">TypeScript and MERN stack</span>. Always on the lookout to learn new technologies 
        and opportunities to expand my knowledge. I am actively seeking {" "}
        <span className="font-medium">Internship opportunities</span> <span className='font-bold'>as a software
        engineer</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and basketball. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">psychology</span>. I'm also
        learning how to speak spanish.
      </p>
    </motion.section>
  )
}
