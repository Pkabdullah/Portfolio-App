"use client"
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React, { useState } from "react";

const projects = [
  
  {
    id: 1,
    title: "Nest Craft - E-Commerce Application",
    description: "Step into the world of Furniture with Next Craft , your one-stop destination for the latest trends and timeless designs.",
    image: "/ff1.png",
    tags: ["Next Js","React","JavaScript", "MongoDb","Strapi CMS","Stripe","TailwindCSS"],
    demoUrl: "",
    githubUrl: "https://github.com/Pkabdullah/Nest_Craft-FrontEnd",
  },
  {
    id: 2,
    title: "Tesla - E-Commerce Application",
    description:
      "Transform your Tesla charger into a statement piece with our premium, customizable skins.",
    image: "/tesla.png",
    tags: ["Next Js","React","JavaScript","Redux","TailwindCSS"],
    githubUrl:   "https://github.com/Pkabdullah/Tesla",
    demoUrl: "https://tesla-inky.vercel.app/",
  },
  {
    id: 3,
    title: "Acupuncture",
    description:
      "Experience holistic healing through acupuncture and natural therapies tailored to restore your vitality and balanced",
    image: "/acu.png",
    tags: ["Next Js","React","JavaScript","Redux","TailwindCSS"],
    githubUrl:  "https://github.com/Pkabdullah/Acupunture",
   demoUrl: "https://acupunture.vercel.app/",
  },
  {
    id: 4,
    title: "Fresh Fruits",
    description:
     "Fresh Fruit is a vibrant online store offering a colorful selection of fresh, juicy fruits delivered to your doorstep.",
    image: "/fruit2.png",
    tags: ["Next Js","React","JavaScript","TailwindCSS"],
   githubUrl:  "https://github.com/Pkabdullah/Fresh-Fruit",
    demoUrl: "https://fresh-fruit-psi.vercel.app/",
  },
  {
    id: 5,
    title: "Car.Pk - Vehical search & filter App ",
    description:
    "Discover the ultimate vehicle search experience with car.pk",
    image: "/project2.png",
    tags: ["Next Js","React","JavaScript","TailwindCSS"],
    githubUrl:"https://github.com/Pkabdullah/Car.Pk",
    demoUrl:  "https://car-pk.vercel.app/",
  },
  {
    id: 6,
    title: "TodoList - CRUD App ",
    description:"Stay organized and boost your productivity with this To-Do List, powered by REST APIs for seamless task management. Add, update, and delete tasks in real-time, ensuring that your to-do list is always up to date.",
    image: "/project1.png",
    tags: ["Next Js","React","JavaScript","Rest Api","MongoDb","TailwindCSS"],
    githubUrl:"https://github.com/Pkabdullah/Car.Pk",
    demoUrl:  "https://car-pk.vercel.app/",
  },
  {
    id: 7,
    title: "Donation campaign",
    description:"A clean and impactful donation campaign site.",
    image: "/donation1.png",
    tags: ["Next Js","React","JavaScript","TailwindCSS"],
    githubUrl:"https://github.com/Pkabdullah/DonationPage",
    demoUrl:  "https://donation-page-beta.vercel.app/",
  },
  {
    id: 8,
    title: "Walk In ELegance",
    description:"A simple and elegant fashion brand website built using HTML, CSS, and JavaScript.",
    image: "/shoes1.png",
    tags: ["HTML","CSS","JavaScript"],
    githubUrl:"https://github.com/Pkabdullah/Shoes",
    demoUrl:  "https://walkinelengace.vercel.app/",
  },
];

export const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleShowMore = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-supreme">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, key) => (
            <div
              key={key}
              className="group bg-[#0b111e] rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-white/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-white/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleShowMore}
              className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-300"
            >
              Show More <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};