import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
 
export function Reviews() {
  const testimonials = [
    {
      quote:
        "Has been an absolute pleasure to work with from start to finish. He clearly knows his stuff and delivered a fantastic new website for Grabbit and Chill. Nothing was ever too much trouble – he was patient, responsive, and happy to tweak things until everything was just right. Communication was excellent throughout and the end result is exactly what we wanted. I wouldn’t hesitate to recommend and will happily work with him again.",
      name: "Jennyhoward",
      designation: "United Kingdom",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Fantastic experience from start to finish! The designer built a beautiful, modern website that perfectly captured my brand’s style. Communication was clear and professional, and every revision was handled quickly and accurately. I was especially impressed by their eye for detail and strong sense of design — everything looks polished and functions perfectly on all devices. Highly recommend this seller for anyone who wants a top-quality, custom website delivered on time. A++++++ will definitely be ordering again! ",
      name: "cbizweb",
      designation: "United States",
      src: "/boy.webp",
    },
    {
      quote:
        "He  does a fantastic job! Highly recommend! He communicates very well and goes above and beyond with his work! He checks in frequently and pays close attention to details! I hope to work with him again!",
      name: "TomSanders258",
      designation: "United States",
      src: "/boy02.webp",
    },
    {
      quote:
        "On Fiverr, they were attentive to detail and my special requests. I was very pleased with the work and plan to use the services again.",
      name: "DonnylBrown",
      designation: "United States",
      src: "/boy.webp",
    },
    {
      quote:
        "⭐️⭐️⭐️⭐️⭐️ I’m so grateful for the amazing work! We had really good meetings where everything felt clear and professional. The team delivered the project super fast, and I truly appreciate their quick turnaround. They went above and beyond to make sure everything was perfect. Highly recommended!",
      name: "Josephine_edit",
      designation: "Sweden",
      src: "/girl.webp",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}