"use client";
import React from 'react';
import { ArrowDown } from "lucide-react";
import Button1 from './ui/button1';
import { TypewriterEffectSmoothDemo } from './TypeEffect';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 pb-16 text-center"
    >
      <div className="container max-w-4xl mx-auto z-10">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <TypewriterEffectSmoothDemo />
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a full-stack developer crafting seamless web experiences with modern technologies. From designing elegant front-end interfaces to building powerful back-end systems, I ensure every application is visually impressive and highly functional.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <Button1 />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Scroll</span>
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
