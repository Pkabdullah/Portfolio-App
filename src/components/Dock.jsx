import React from "react";
import { FloatingDock } from "@/components/FloatingDock"
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,

} from "@tabler/icons-react";
import { FaUser, FaLaptopCode } from 'react-icons/fa'
import { GrProjects } from "react-icons/gr";
import { MdEmail } from 'react-icons/md'
export function FloatingDockDemo() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-purple-400" />
            ),
            href: "#",
        },


        {
            title: "Skills",
            icon: (
                <FaLaptopCode className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-purple-400" />
            ),
            href: "#skills",
        },
        {
            title: "Projects",
            icon: (
                <GrProjects className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-purple-400" />


            ),
            href: "#projects",
        },
        {
            title: "Contact",
            icon: (
                <MdEmail className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-purple-400" />
            ),
            href: "#contact",
        },

    ];
    return (
        <div className="flex justify-center h-[3rem] w-full fixed ">

            <FloatingDock
                mobileClassName="translate-y-20 "
                items={links} />
        </div>
    );
}
