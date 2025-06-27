"use client"
import Image from "next/image";
import React from "react";

const MySkills = () => {
  const coreSkills = [
    { id: 1, name: "Next JS", image: "/next.svg" },
    { id: 2, name: "React", image: "/re.svg" },
    { id: 3, name: "JavaScript", image: "/js.png" },
    { id: 4, name: "Node Js", image: "/nodejs.png" },
    { id: 5, name: "MongoDB", image: "/mongodb.png" },
  ];

  const extraSkills = [
    { name: "Express Js", image: "/exp1.png" },
    { name: "Redux", image: "/redux.png" },
    { name: "NextAuth", image: "/auth.png" },
    { name: "Strapi CMS", image: "/strapilogo.png" },
    { name: "Stripe", image: "/str.png" },
    { name: "Tailwind CSS", image: "/tail.svg" },
    { name: "HTML5", image: "/html-5.png" },
    { name: "CSS3", image: "/css-3.png" },
    { name: "WordPress", image: "/wp1.png" },
    { name: "REST API", image: "/rest-api-1.svg" },
  ];

  return (
    <div className="py-10" id="skills">
      <div className="text-center">
        <h1 className="text-4xl font-supreme">
          My <span className="text-purple-500">Skills</span>
        </h1>
        <p className="text-muted-foreground mt-2 text-base">
          Tools I work with regularly and technologies I'm experienced in
        </p>
      </div>

      {/* Core Skills Grid */}
     {/* Core Skills Grid */}
<div className="flex justify-center mt-16">
  <div className="flex flex-wrap justify-center gap-6 max-w-5xl px-4">
    {coreSkills.map(({ id, image, name }) => (
      <div
        key={id}
        className="relative flex flex-col items-center justify-center border border-gray-300 dark:border-gray-700 p-4 w-36 h-32 rounded-xl bg-[#13162D] hover:shadow-xl transition duration-300"
      >
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="object-contain mb-2"
        />
        <span className="text-sm font-semibold text-white">{name}</span>
      </div>
    ))}
  </div>
</div>


     
      <div className="mt-20 w-full overflow-hidden">
        <div className="animate-marquee flex gap-12 items-center w-max px-4">
          {[...extraSkills, ...extraSkills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-white text-sm font-medium bg-[#1a1d2b] px-4 py-2 rounded-md shadow hover:scale-105 transition"
            >
              <Image
                src={skill.image}
                alt={skill.name}
                width={24}
                height={24}
                className="object-contain"
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
  .animate-marquee {
    animation: marquee 30s linear infinite;
  }

  .animate-marquee:hover {
    animation-play-state: paused;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`}</style>

    </div>
  );
};

export default MySkills;



