'use client';

import React from "react";
import heroBanner from "@/app/data/heroBanner"; 

export default function Hero() {
    return(
            <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold font-heading mb-4 leading-tight text-[#F5F5F5]">
            Zak Hajjaji 🍊 <span className="text-[#6552D0]">Software Developer</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-[#A5A5A5] mb-2">
            Building with Integrity. Empowering through Innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a href="#Projects" className="bg-[#6552D0] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#6552D0] hover:shadow-lg hover:-translate-y-1 transform transition duration-300">
              View My Work
            </a>
            <a href="#contact" className="border border-[#6552D0] text-[#6552D0] px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#6552D0] hover:text-white hover:shadow-lg hover:-translate-y-1 transform transition duration-300">
              Contact Me
            </a>
          </div>
        </section>
    )
}