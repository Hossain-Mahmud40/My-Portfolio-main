"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    num: "01",
    title: "SweetDreamCart",
    titleColor: "#ec8fbd",
    description:
      "A polished plush store with soft visuals, cute collections, and a warm gift-shopping experience.",
    stack: ["Next.js", "Tailwind CSS", "Ecommerce UI"],
    images: ["/assets/work/proj1.png", "/assets/work/proj1(2).png"],
    live: "https://www.sweetdreamcart.com",
  },
  {
    num: "02",
    title: "Torongo Gadgets",
    titleColor: "#8b5cf6",
    description:
      "A premium gadget storefront with dark tech styling, featured products, search, and shopping flow.",
    stack: ["React", "Tailwind CSS", "Product UI"],
    images: ["/assets/work/proj2.png", "/assets/work/proj2(2).png"],
    live: "https://torongo-frontend.vercel.app",
  },
  {
    num: "03",
    title: "TeaShop",
    titleColor: "#ff7a1a",
    description:
      "A responsive tea catalogue landing page made for layout, spacing, and clean product presentation practice.",
    stack: ["HTML5", "CSS3", "Responsive"],
    images: ["/assets/work/proj3.jpg", "/assets/work/proj3(2).jpg"],
    live: "https://hossain-mahmud40.github.io/TeaShop/",
    github: "https://github.com/Hossain-Mahmud40/TeaShop",
  },
  {
    num: "04",
    title: "Payoo Pay",
    titleColor: "#6046ff",
    description:
      "A mobile financial service style app with login, balance actions, transactions, and local demo state.",
    stack: ["HTML", "Tailwind CSS", "JavaScript"],
    images: ["/assets/work/proj4.jpg", "/assets/work/proj4(2).jpg"],
    live: "https://hossain-mahmud40.github.io/Payoo/",
    github: "https://github.com/Hossain-Mahmud40/Payoo",
  },
  {
    num: "05",
    title: "GitHub Issues Tracker",
    titleColor: "#6d5dfc",
    description:
      "A GitHub-style issue tracker with login, search, filters, priority badges, and issue details.",
    stack: ["HTML5", "Tailwind CSS", "JavaScript"],
    images: ["/assets/work/proj5.jpg", "/assets/work/proj5(2).jpg"],
    live: "https://github-pro-issue-tracker.netlify.app/",
    github: "https://github.com/Hossain-Mahmud40/Github-issue-Tracker",
  },
];

const Projects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const project = projects[activeProjectIndex];

  const goToNextImage = () => {
    if (activeImageIndex < project.images.length - 1) {
      setActiveImageIndex((current) => current + 1);
      return;
    }

    setActiveProjectIndex((current) => (current + 1) % projects.length);
    setActiveImageIndex(0);
  };

  const goToPreviousImage = () => {
    if (activeImageIndex > 0) {
      setActiveImageIndex((current) => current - 1);
      return;
    }

    setActiveProjectIndex((current) => {
      const previousProjectIndex =
        current === 0 ? projects.length - 1 : current - 1;
      setActiveImageIndex(projects[previousProjectIndex].images.length - 1);
      return previousProjectIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(goToNextImage, 3500);
    return () => clearInterval(timer);
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[44%] xl:h-[560px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[26px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <div>
                <h2
                  className="text-[42px] font-bold leading-none transition-all duration-500"
                  style={{ color: project.titleColor }}
                >
                  {project.title}
                </h2>
              </div>

              <p className="max-w-[560px] text-white/60">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {project.stack.map((item, index) => (
                  <li key={item} className="text-lg text-accent">
                    {item}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank" rel="noreferrer">
                  <span className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent transition-all duration-300">
                    <FiExternalLink className="text-white text-3xl group-hover:text-primary" />
                  </span>
                </Link>

                {project.github && (
                  <Link href={project.github} target="_blank" rel="noreferrer">
                    <span className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent transition-all duration-300">
                      <BsGithub className="text-white text-3xl group-hover:text-primary" />
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[56%] order-1 xl:order-none mb-10 xl:mb-0">
            <div className="relative xl:h-[560px]">
              <div className="h-[390px] sm:h-[500px] xl:h-[500px] relative flex justify-center items-center bg-[#17171d] overflow-hidden">
                <Image
                  key={`${project.title}-${activeImageIndex}`}
                  src={project.images[activeImageIndex]}
                  fill
                  sizes="(min-width: 1200px) 56vw, 100vw"
                  className="object-contain"
                  alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                  priority
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-4 xl:justify-end">
                <div className="flex gap-2">
                  {project.images.map((_, index) => (
                    <span
                      key={index}
                      className={`h-2 rounded-full transition-all ${
                        index === activeImageIndex
                          ? "w-8 bg-accent"
                          : "w-2 bg-white/30"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={goToPreviousImage}
                    aria-label="Previous project image"
                    className="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                  >
                    <FiChevronLeft />
                  </button>
                  <button
                    type="button"
                    onClick={goToNextImage}
                    aria-label="Next project image"
                    className="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                  >
                    <FiChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
