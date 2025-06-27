import { ArrowUp } from "lucide-react";
import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-24 px-4 py-6 bg-gray-900">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} M Abdullah. All rights reserved.
      </p>
  
      <a
        href="#"
        className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-blue-500 hover:text-white transition"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </a>
    </div>
  </footer>
  
  )
}

export default Footer

