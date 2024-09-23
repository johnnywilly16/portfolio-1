"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const {ref} = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 ">
        I have been in the <span className="font-medium">programming</span>{" "}
        field for one year, and I am currently pursuing a degree in{" "}
        <span className="font-medium">Software Engineering</span>. My{" "}
        <span className="underline">passion</span> for technology started at a
        young age, and since then, I have been committed to enhancing my skills.
        I had the opportunity to complete a one-year intensive course at{" "}
        <span className="font-medium">Kenzy Academy Brazil</span>, where I
        developed expertise in <span className="font-medium">JavaScript</span>,{" "}
        <span className="font-medium">React (Next.js)</span>,{" "}
        <span className="font-medium">TypeScript</span>,{" "}
        <span className="font-medium">front-end</span>, and{" "}
        <span className="font-medium">back-end</span>. Additionally, I gained
        experience working with <span className="font-medium">Node.js</span>,{" "}
        <span className="font-medium">Prisma ORM</span>, and{" "}
        <span className="font-medium">Python</span>.
      </p>
      <p>
        I am always striving to improve as a{" "}
        <span className="font-medium">web/software developer</span>, staying
        up-to-date with emerging trends and technologies. When I am not coding,
        I am learning new programming topics or diving into{" "}
        <span className="italic">technical readings</span> and{" "}
        <span className="italic">books</span> that expand my knowledge.
      </p>
    </motion.section>
  );
}
