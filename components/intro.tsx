"use client";

import Image from 'next/image';
import React, { useEffect } from 'react';
import myimage from '@/assets/images/mypic.png';
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
    const { ref, inView } = useInView({
        threshold: 0.5,
      });
    
    const { setActiveSection } = useActiveSectionContext();
    
    
    useEffect(() => {
      if (inView) {
        setActiveSection("Home");
      
      }
    
    }, [inView, setActiveSection])
  return (
   <section ref={ref} id="home" className="mb-28 max-w-[50rem]
   text-center sm:mb-0 scroll-mt-[100rem]">
    <div className="flex items-center justify-center">
        <div className="relative">
            <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1}}
            transition={{
                type: "tween",
                duration: 0.2,
            }}
            >
            <Image src={myimage} alt="Oluwatobi portrait" 
            width="192"  
            height="192"
            quality="95"
            priority={true}
            className="h-23 w-24 rounded-full
            object-cover border-[0.35rem] border-white shadow-xl" />
            </motion.div>
           

            <motion.span className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1}}
            transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
            }}
            >
                👋
            </motion.span>
        </div>
    </div>

    <motion.h1 className="mb-10 mt-4 px-4 text-2xl
    font-medium !leading-[1.5] sm:text-2xl"
    initial={{ opacity: 0, y: 100}}
    animate={{ opacity: 1, y: 0 }}>
   <span className="font-bold">Hello, I'm Oluwatobi.</span> Welcome to my digital space! Here, you'll find a collection of my projects, glimpses into my coding adventures, and a bit about who I am. I specialize in <span className="font-bold">Software Engineering</span> and enjoy creating innovative software solutions. This portfolio reflects my dedication to learning, coding, and exploring new technologies. Join me on this exciting journey as I navigate the realms of computer science and share my experiences with you!






    </motion.h1>

    <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
    initial={{ opacity: 0, y: 100 }}
    animate= {{ opacity: 1, y: 0 }}
    transition={{
        delay: 0.1,
    }}
    >
        <Link href="#contact" className="group bg-gray-900 text-white px-7 
        py-3 flex items-center gap-2 
        rounded-full outline-none
        focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
        transition"
        >Contact me here <BsArrowRight 
        className='opacity-70 group-hover:translate-x-1 transition'/></Link>
        <a className="group bg-white
           px-7 py-3 flex items-center gap-2
        rounded-full outline-none text-black
        focus:scale-110 hover:scale-110 active:scale-105
        transition cursor-pointer border border-black/10" href='/Oluwatobi_Olajide_resume_new.pdf' 
        download>Download Resume<HiDownload 
        className='opacity-60 
        group-hover:translate-y-1 transition'/></a>

        <a className="bg-white
           p-4 text-gray-700 flex items-center gap-2
        rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105
        transition cursor-pointer border border-black/10" href="https://www.linkedin.com/in/oluwatobi-olajide/" 
        target="_blank">
            <BsLinkedin />
        </a>

        <a className="bg-white
           p-4 text-gray-700 flex items-center gap-2 text-[1.35rem]
        rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105
        transition cursor-pointer border border-black/10"  href="https://www.github.com/oluwatobi02/" 
        target="_blank">
            <FaGithubSquare />
        </a>
    </motion.div>
   </section>
  )
}
