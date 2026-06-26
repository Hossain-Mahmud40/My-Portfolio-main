"use client";

import {
  FaCss3,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "I am a focused web developer who enjoys building clean, responsive interfaces and practical backend systems. I work with modern JavaScript tools, write maintainable code, and keep learning through real projects, problem solving, and hands-on development.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hossain Mahmud",
    },
    {
      fieldName: "Phone",
      fieldValue: "+8801788895287",
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "hossainpromil6286@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "Bangla, English, Hindi",
    },
  ],
};

const courses = {
  title: "Courses & Certifications",
  description:
    "Completed focused certifications to strengthen my web development, problem solving, and security skills.",
  items: [
    {
      provider: "Programming Hero",
      title: "Certified Web Developer",
      duration: "6 months",
    },
    {
      provider: "Phitron",
      title: "Certified Problem Solver",
      duration: "6 month",
    },
    {
      provider: "TeamMatrix, BD71",
      title: "Certified Ethical Hacker",
      duration: "12 months",
    },
  ],
};

const education = {
  title: "My education",
  description:
    "Academic milestones that shaped my foundation in programming, science, and software engineering.",
  items: [
    {
      institution: "Ideal School And College",
      degree: "Secondary School Certificate",
      duration: "2023",
      result: "GPA : 5.00",
    },
    {
      institution: "Sabujbagh Government College",
      degree: "Higher Secondary Certificate",
      duration: "2025",
      result: "GPA 5.00",
    },
    {
      institution: "BRAC University",
      degree: "B.Sc in CSE",
      duration: "2026-2030",
      result: "Computer Science & Engineering",
    },
  ],
};

const problemSolving = {
  title: "Problem Solving",
  description:
    "Practicing algorithms, data structures, and logical thinking to build stronger engineering decisions.",
  items: [
    "Data Structures",
    "Algorithms",
    "Competitive Programming",
    "Debugging",
  ],
};

const skills = {
  title: "My skills",
  description:
    "Skilled in frontend and backend development with modern tools for building responsive, scalable web applications.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <SiPostgresql />,
      name: "postgresql",
    },
    {
      icon: <FaDocker />,
      name: "docker",
    },
    {
      icon: <FaGithub />,
      name: "github",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="problem-solving">Problem Solving</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[720px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[120px] xl:h-[135px] bg-[#232329] rounded-lg flex justify-center items-center group">
                              <div className="text-5xl xl:text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="courses" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{courses.title}</h3>
                <p className="max-w-[650px] text-white/60 mx-auto xl:mx-0">
                  {courses.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {courses.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] min-h-[184px] py-6 px-8 rounded-lg flex flex-col justify-center items-center lg:items-start gap-3"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[280px] text-center lg:text-left">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.provider}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[650px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] min-h-[196px] py-6 px-8 rounded-lg flex flex-col justify-center items-center lg:items-start gap-3"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[320px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <p className="text-white/70">{item.institution}</p>
                        <p className="text-white/50">{item.result}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="problem-solving" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{problemSolving.title}</h3>
                <p className="max-w-[650px] text-white/60 mx-auto xl:mx-0">
                  {problemSolving.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[760px]">
                  {problemSolving.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] rounded-lg px-6 py-5 flex items-center justify-center xl:justify-start gap-3"
                      >
                        <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[20px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[650px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[780px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] rounded-lg px-6 py-5 flex flex-col gap-2 items-center xl:items-start"
                      >
                        <span className="text-sm text-accent">
                          {item.fieldName}
                        </span>
                        <span className="text-lg break-words">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
