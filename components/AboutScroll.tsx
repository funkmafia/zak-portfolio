'use client';

import React from 'react';



type ScrollSlide = {
    title: string;
    text: string; 
}

const aboutSlides: ScrollSlide[] = [
    {
        title: "Phase 1: The Leap", 
        text: "After exploring different roles, I realised I wasn't chasing a title; I was chasing alignment. I needed the freedom to think, build, and create things that actually meant something to me, and the people they serve.", 
    }, 

    {
        title: "Phase 2: The Craft", 
        text: "I design and develop with clarity, function, and flow in mind. Everything I build is made to feel intuitive; structured right, easy to use, and free from noise.", 
    }, 

    {
        title: "Phase 3: The Foundation", 
        text: "It is about showing up better, always staying calm, listening well, and adapt when things shift. I carry myself with intent and stick to the blueprint, even as the path evolves.", 
    }, 

    {
        title: "Phase 4: The Building Blocks", 
        text: "Every challenge adds depth. Every build sharpens focus. I'm not just pushing projects; I'm laying bricks for something bigger, with patience and intention. ", 
    }, 

    {
        title: "Phase 5: The Showroom", 
        text: "This site was built with HTML, JavaScript, and Tailwind CSS. Structured with intention, not just to look good, but to work well. I'm now exploring React, Next.js, and APIs to take my skills further, and make things that move and mean something.", 
    }, 

    {
        title: "Phase 6: Open Blueprint", 
        text: "The blueprint is still evolving, and that is the point. If anything here resonates, let's make something meaningful together, something that matters.", 
    }, 
];

export default function AboutScroll() {
    return (
       <section id="about" className="py-36 md:py-44 px-6 bg-[#0F172A] text-[#F5F5F5]">
         <div className="max-w-4xl mx-auto text-center mb-10" data-aos="fade-up">


         </div>

         <div className="swiper mySwiperAbout max-w-3xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-wrapper">
                {aboutSlides.map((slide, index) => (
                    <div key={index} className="swiper-slide bg-[#1A2238] p-6 rounded-xl shadow-md mb-10">
                    <h3 className="text-xl font-bold mb-2 text-[#6552D0]">{slide.title}</h3>
                    <p className="text-[#A5A5A5] text-base md:text-lg leading-relaxed">{slide.text}</p>
                </div>
            ))}
            </div>

            <div className="swiper-pagination mt-10"></div>
            <div className="mt-16 flex justify-center">
                <div className="h-1 w-12 bg-[#6552D0] rounded-full opacity-60"></div>
            </div>
        </div>
       </section>
    );
}