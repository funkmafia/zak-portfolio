'use client';
import Image from "next/image";
import React from "react";
import spotlight from "@/app/data/spotlight";

export default function SpotlightSection() {
    return (
<section id="spotlight" className="py-24 px-6 bg-[#1A2238] text-[#F5F5F5]">
<div className="max-w-5xl mx-auto">
    <div className="text-center mb-16">     
    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Spotlight Project</h2>
        <p className="text-[#A5A5A5] text-lg max-w-2xl mx-auto">{spotlight.subtitle}</p>
    </div>
    
    <div
        className="bg-[#0F172A] rounded-xl shadow-xl overflow-hidden flex flex-col lg:flex-row items-center gap-8 p-6 md:p-12"
        data-aos="fade-up" data-aos-delay="100">
             <div className="w-full lg:w-1/2">
             <Image 
            src={spotlight.project.image}
            alt={`${spotlight.project.name} Preview`}
             width={600}
             height={400}
             className="rounded-lg object-cover w-full h-auto"
             />
             </div>

             <div className="w-full lg:w-1/2 text-left">
             <h3 className="text-2xl font-bold text-[#6552D0] mb-4">{spotlight.project.name}</h3>
          <p className="text-[#A5A5A5] text-base mb-6 leading-relaxed">{spotlight.project.description}</p>
          <a 
          href={spotlight.project.link}
          target="_blank" 
          rel="noopener"
            className="inline-block bg-[#6552D0] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#7B69E6] transition duration-300">
            {spotlight.project.buttonText}
          </a>
        </div>
</div>
</div>
</section>
    );
}


{/*     IF I ADD MORE SPOTLIGHT PROJECTS, USE BELOW CODE 
    {spotlightData.map((spotlight, index) => 
    
    <div key={index} classnName="..."
    )}
    
    */} 