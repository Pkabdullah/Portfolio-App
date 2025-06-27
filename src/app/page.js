import { StarBackground } from "@/components/Background";
import ContactUs from "@/components/ContactUs";
import { FloatingDockDemo } from "@/components/Dock";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import NavBar, { FloatingDock } from "@/components/NavBar";
import { ProjectsSection } from "@/components/Projects";
import MySkills from "@/components/Skills";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#05080f] text-white overflow-hidden">
   
    <StarBackground />
    <NavBar/>
    <Hero/>
    <MySkills/>
    <ProjectsSection/>
    <ContactUs/>
    <Footer/>
  </div>
  );
}
