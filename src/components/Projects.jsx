"use client"
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
    description: "Transform your Tesla charger into a statement piece with our premium, customizable skins.",
    image: "/tesla.png",
    tags: ["Next Js","React","JavaScript","Redux","TailwindCSS"],
    githubUrl: "https://github.com/Pkabdullah/Tesla",
    demoUrl: "https://tesla-inky.vercel.app/",
  },
  {
    id: 3,
    title: "Acupuncture",
    description: "Experience holistic healing through acupuncture and natural therapies tailored to restore your vitality and balanced",
    image: "/acu.png",
    tags: ["Next Js","React","JavaScript","Redux","TailwindCSS"],
    githubUrl: "https://github.com/Pkabdullah/Acupunture",
    demoUrl: "https://acupunture.vercel.app/",
  },
  {
    id: 4,
    title: "SHOP.CO - E-Commerce Application",
    description: "A modern e-commerce website clone offering a sleek shopping experience with product browsing, cart management, and responsive design.",
    image: "/shop1.png",
    tags: ["React Js","JavaScript","Redux","TailwindCSS"],
    githubUrl: "https://github.com/Pkabdullah/Shop.Co-Clone",
    demoUrl: "https://shoppclone.netlify.app/",
  },
  {
    id: 5,
    title: "Fresh Fruits",
    description: "Fresh Fruit is a vibrant online store offering a colorful selection of fresh, juicy fruits delivered to your doorstep.",
    image: "/fruit2.png",
    tags: ["Next Js","React","JavaScript","TailwindCSS"],
    githubUrl: "https://github.com/Pkabdullah/Fresh-Fruit",
    demoUrl: "https://fresh-fruit-psi.vercel.app/",
  },
  {
    id: 6,
    title: "Car.Pk - Vehical search & filter App ",
    description: "Discover the ultimate vehicle search experience with car.pk",
    image: "/project2.png",
    tags: ["Next Js","React","JavaScript","TailwindCSS"],
    githubUrl:"https://github.com/Pkabdullah/Car.Pk",
    demoUrl: "https://car-pk.vercel.app/",
  },
  {
    id: 7,
    title: "TodoList - CRUD App ",
    description:"Stay organized and boost your productivity with this To-Do List, powered by REST APIs for seamless task management.",
    image: "/project1.png",
    tags: ["Next Js","React","JavaScript","Rest Api","MongoDb","TailwindCSS"],
    githubUrl:"https://github.com/Pkabdullah/Car.Pk",
    demoUrl: "https://car-pk.vercel.app/",
  },
  {
    id: 8,
    title: "Donation campaign",
    description:"A clean and impactful donation campaign site.",
    image: "/donation1.png",
    tags: ["Next Js","React","JavaScript","TailwindCSS"],
    githubUrl:"https://github.com/Pkabdullah/DonationPage",
    demoUrl: "https://donation-page-beta.vercel.app/",
  },
  {
    id: 9,
    title: "Walk In ELegance",
    description:"A simple and elegant fashion brand website built using HTML, CSS, and JavaScript.",
    image: "/shoes1.png",
    tags: ["HTML","CSS","JavaScript"],
    githubUrl:"https://github.com/Pkabdullah/Shoes",
    demoUrl: "https://walkinelengace.vercel.app/",
  },

  {
    id: 10,
    title: "Blog Design",
    description: "A professional blog built using WordPress CMS.",
    image: "/project2.png",
    tags: ["NextJs", "ReactJs", "TailwindCSS"],
    githubUrl: "",
    demoUrl: "",
  },
  {
    id: 11,
    title: "Grabbit and Chill",
    description: "Grabbit & Chill — a UK-based dry ice manufacturer providing fast, food- and pharma-grade dry ice delivery nationwide.",
    image: "/grabb.png",
    tags: ["WordPress","DIVI"],
    githubUrl: "",
    demoUrl: "https://grabbitandchill.com/",
  },
  {
    id: 12  ,
    title: "Jagdschule Academy",
    description: "Jagdschule Academy is a school that teaches children about the importance of hunting and fishing.",
    image: "/jagdschule.png",
    tags: ["WordPress","Elementor","WooCommerce"],
    githubUrl: "",
    demoUrl: "https://jagdschule.academy/",
  },
  {
    id: 13  ,
    title: "CESTEK",
    description: "CESTEK is a Danish automation company delivering innovative industrial solutions, including machine building, programming, and robot integration for modern production.",
    image: "/cestek.png",
    tags: ["WordPress","FIGMA","DIVI-5"],
    githubUrl: "",
    demoUrl: "http://cestek-test.varmevaerket.nu/",
  },
  {
    id: 14,
    title: "ArmoiresDesMonts",
    description: "Armoires des Monts is a Canadian company specializing in custom-made kitchen and bathroom cabinetry.",
    image: "/armoiresdesmonts.png",
    tags: ["WordPress","ELEMENTOR"],
    githubUrl: "",
    demoUrl: "https://armoiresdesmonts.com/",
  },
  {
    id: 15,
    title: "Excel Shipping",
    description: "Excel-Shipping Solutions is a logistics company that provides freight forwarding and supply chain solutions.",
    image: "/excelshipping.png",
    tags: ["WordPress","DIVI"],
    githubUrl: "",
    demoUrl: "https://wordpress-678376-5511870.cloudwaysapps.com/excel-shipping-s/",
  },
  {
    id: 16  ,
    title: "Marbela Beach",
    description: "Marbela Beach is a luxury resort and spa located in the Maldives.",
    image: "/marbelabeach.png",
    tags: ["WordPress","FIGMA","DIVI"],
    githubUrl: "",  
    demoUrl: "https://marbelabeach.com/",
  },
   {
    id: 17  ,
    title: "Stony Meadow Farm",
    description: "Stony Meadow Farm is a family-owned farm that raises livestock and crops.",
    image: "/stonymeadowfarm.png",
    tags: ["WordPress","DIVI"],
    githubUrl: "",
    demoUrl: "https://stonymeadowfarm.com/",
  },
  {
    id: 18  ,
    title: "Hotel Metro",
    description: "Hotel Metro is a luxury hotel located in the heart of the city.",
    image: "/hotelmetro.png",
    tags: ["WordPress","DIVI"],
    githubUrl: "",
    demoUrl: "https://hotel-metro.net/",
  },

  {
    id: 19  ,
    title: "Awtad Service",
    description: "Awtad Service is a business consultancy that provides integrated support solutions to help companies improve operations, sustainability, and long-term performance.",
    image: "/awtadservice.png",
    tags: ["WordPress","DIVI"],
    githubUrl: "",
    demoUrl: "https://awtadservice.com/",
  },

];

export const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [activeTab, setActiveTab] = useState("WordPress");

  const handleShowMore = () => {
    setVisibleProjects(projects.length);
  };

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeTab));

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-supreme text-white">
          Featured <span className="text-purple-400">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

      
<div className="flex justify-center mb-12">
  <Tabs defaultValue="WordPress" className="w-full" onValueChange={setActiveTab}>
    {/* grid-cols-2 mobile par 2x2 grid bana dega, aur md:flex desktop par line mein kar dega */}
    <TabsList className="grid grid-cols-2 md:flex md:w-max h-auto gap-2 bg-transparent mx-auto p-0">
      <TabsTrigger 
        value="All" 
        className="text-white border border-white/10 data-[state=active]:bg-white data-[state=active]:text-black"
      >
                All
              </TabsTrigger>
              <TabsTrigger 
                value="Next Js" 
                className="text-white data-[state=active]:bg-white data-[state=active]:text-black cursor-pointer"
              >
                Next.js
              </TabsTrigger>
              <TabsTrigger 
                value="React Js" 
                className="text-white data-[state=active]:bg-white data-[state=active]:text-black"
              >
                React
              </TabsTrigger>
              <TabsTrigger 
                value="WordPress" 
                className="text-white data-[state=active]:bg-white data-[state=active]:text-black"
              >
                WordPress
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className="group bg-[#0b111e] rounded-lg overflow-hidden shadow-xs border border-white/5 transition-all duration-300 hover:border-purple-500/50"
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
                      className="px-2 py-1 text-[10px] font-medium border rounded-full bg-secondary/50 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-white">
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
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-purple-400 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-purple-400 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleShowMore}
              className="inline-flex items-center gap-2 px-6 py-2 cursor-pointer bg-purple-400 text-white rounded-md hover:bg-purple-600 transition-colors duration-300"
            >
              Show More <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// "use client"
// import { ArrowRight, ExternalLink, Github } from "lucide-react";
// import React, { useState } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// const projects = [
  
//   {
//     id: 1,
//     title: "Nest Craft - E-Commerce Application",
//     description: "Step into the world of Furniture with Next Craft , your one-stop destination for the latest trends and timeless designs.",
//     image: "/ff1.png",
//     tags: ["Next Js","React","JavaScript", "MongoDb","Strapi CMS","Stripe","TailwindCSS"],
//     demoUrl: "",
//     githubUrl: "https://github.com/Pkabdullah/Nest_Craft-FrontEnd",
//   },
//   {
//     id: 2,
//     title: "Tesla - E-Commerce Application",
//     description:
//       "Transform your Tesla charger into a statement piece with our premium, customizable skins.",
//     image: "/tesla.png",
//     tags: ["Next Js","React","JavaScript","Redux","TailwindCSS"],
//     githubUrl:   "https://github.com/Pkabdullah/Tesla",
//     demoUrl: "https://tesla-inky.vercel.app/",
//   },
//   {
//     id: 3,
//     title: "Acupuncture",
//     description:
//       "Experience holistic healing through acupuncture and natural therapies tailored to restore your vitality and balanced",
//     image: "/acu.png",
//     tags: ["Next Js","React","JavaScript","Redux","TailwindCSS"],
//     githubUrl:  "https://github.com/Pkabdullah/Acupunture",
//    demoUrl: "https://acupunture.vercel.app/",
//   },

//    {
//     id: 4,
//     title: "SHOP.CO - E-Commerce Application",
//     description:
//       "A modern e-commerce website clone offering a sleek shopping experience with product browsing, cart management, and responsive design.",
//     image: "/shop1.png",
//     tags: ["React Js","JavaScript","Redux","TailwindCSS"],
//     githubUrl:  "https://github.com/Pkabdullah/Shop.Co-Clone",
//    demoUrl: "https://shoppclone.netlify.app/",
//   },
//   {
//     id: 5,
//     title: "Fresh Fruits",
//     description:
//      "Fresh Fruit is a vibrant online store offering a colorful selection of fresh, juicy fruits delivered to your doorstep.",
//     image: "/fruit2.png",
//     tags: ["Next Js","React","JavaScript","TailwindCSS"],
//    githubUrl:  "https://github.com/Pkabdullah/Fresh-Fruit",
//     demoUrl: "https://fresh-fruit-psi.vercel.app/",
//   },
//   {
//     id: 6,
//     title: "Car.Pk - Vehical search & filter App ",
//     description:
//     "Discover the ultimate vehicle search experience with car.pk",
//     image: "/project2.png",
//     tags: ["Next Js","React","JavaScript","TailwindCSS"],
//     githubUrl:"https://github.com/Pkabdullah/Car.Pk",
//     demoUrl:  "https://car-pk.vercel.app/",
//   },
//   {
//     id: 7,
//     title: "TodoList - CRUD App ",
//     description:"Stay organized and boost your productivity with this To-Do List, powered by REST APIs for seamless task management. Add, update, and delete tasks in real-time, ensuring that your to-do list is always up to date.",
//     image: "/project1.png",
//     tags: ["Next Js","React","JavaScript","Rest Api","MongoDb","TailwindCSS"],
//     githubUrl:"https://github.com/Pkabdullah/Car.Pk",
//     demoUrl:  "https://car-pk.vercel.app/",
//   },
//   {
//     id: 8,
//     title: "Donation campaign",
//     description:"A clean and impactful donation campaign site.",
//     image: "/donation1.png",
//     tags: ["Next Js","React","JavaScript","TailwindCSS"],
//     githubUrl:"https://github.com/Pkabdullah/DonationPage",
//     demoUrl:  "https://donation-page-beta.vercel.app/",
//   },
//   {
//     id: 9,
//     title: "Walk In ELegance",
//     description:"A simple and elegant fashion brand website built using HTML, CSS, and JavaScript.",
//     image: "/shoes1.png",
//     tags: ["HTML","CSS","JavaScript"],
//     githubUrl:"https://github.com/Pkabdullah/Shoes",
//     demoUrl:  "https://walkinelengace.vercel.app/",
//   },
// ];

// export const ProjectsSection = () => {
//   const [visibleProjects, setVisibleProjects] = useState(3);

//   const handleShowMore = () => {
//     setVisibleProjects(projects.length);
//   };

//   return (
//     <section id="projects" className="py-24 px-4 relative">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-supreme">
//           Featured <span className="text-purple-400">Projects</span>
//         </h2>

//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Here are some of my recent projects. Each project was carefully
//           crafted with attention to detail, performance, and user experience.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.slice(0, visibleProjects).map((project, key) => (
//             <div
//               key={key}
//               className="group bg-[#0b111e] rounded-lg overflow-hidden shadow-xs card-hover"
//             >
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>

//               <div className="p-6">
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <h3 className="text-xl font-semibold mb-1">
//                   {project.title}
//                 </h3>
//                 <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
//                   {project.description}
//                 </p>
//                 <div className="flex justify-between items-center">
//                   <div className="flex space-x-3">
//                     <a
//                       href={project.demoUrl}
//                       target="_blank"
//                       className="text-white/80 hover:text-primary transition-colors duration-300"
//                     >
//                       <ExternalLink size={20} />
//                     </a>
//                     <a
//                       href={project.githubUrl}
//                       target="_blank"
//                       className="text-white/80 hover:text-primary transition-colors duration-300"
//                     >
//                       <Github size={20} />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {visibleProjects < projects.length && (
//           <div className="text-center mt-10">
//             <button
//               onClick={handleShowMore}
//               className="inline-flex items-center gap-2 px-6 py-2  cursor-pointer bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-300"
//             >
//               Show More <ArrowRight size={18} />
//             </button>
//           </div>
//         )}
//       </div>

//       <Tabs defaultValue="account" className="w-[400px]">
//   <TabsList>
//     <TabsTrigger value="account">All</TabsTrigger>
//     <TabsTrigger value="password">Password</TabsTrigger>
//   </TabsList>
//   <TabsContent value="account">Make changes to your account here.</TabsContent>
//   <TabsContent value="password">Change your password here.</TabsContent>
// </Tabs>

//     </section>
//   );
// };
