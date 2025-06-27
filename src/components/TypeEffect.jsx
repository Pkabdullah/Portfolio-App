"use client";
import { TypewriterEffectSmooth } from "@/components/TypeWriterEffect";
export function TypewriterEffectSmoothDemo() {
    const words = [
        {
          text: " Hi, I'm Abdullah",
          className:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl dark:text-purple-400 opacity-0 animate-fade-in-delay-1 font-supreme",
        },
      ];
      
  return (
    <div className="flex flex-col items-center justify-center h-[5rem] ">
      
      <TypewriterEffectSmooth words={words} />
     
    </div>
  );
}
