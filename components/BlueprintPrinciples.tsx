'use client';

import React from 'react';

export default function BluePrintPrinciples() {
    const principles = [
        {
            title: "Build with Intention",
            text: "Don't build to show off or without purpose, my intentions are always to build to solve. If you want to see how I think and break things down, the blog's got the raw notes.",
            linkText: "Read My Blog →", 
            link: "#"
        }, 
        {
            title: "Show Up with Substance",
            text: "I keep things clean, structured, and consistent. The details show in the work, and grab the CV and see where I've been and what I bring to the table.",
            linkText: "Download My CV →", 
            link: "#"
        },
        {
            title: "Create with Meaning",
            text: "If you're curious about how I turn all this into real things - the projects are where to start.",
            linkText: "Explore My Projects →", 
            link: "#"
        },
    ];

    return (
        <section className="mt-20 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-heading font-semibold text-center text-[#6552D0] mb-10">The Blueprint Principles</h3>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                {principles.map((item, index) => (
                    <div key={index} className="bg-[#1A2238] p-6 rounded-xl shadow-md flex flex-col justify-between hover:shadow-lg transition duration-300 hover:scale-105 ease-in-out">
                        <div>
                            <h4 className="text-xl font-bold mb-2 text-[#F5F5F5]">{item.title}</h4>
                            <p className="text-[#A5A5A5] text-base">{item.text}</p>
                        </div>
                        <a href={item.link} className="mt-4 inline-block text-[#6552D0] font-semibold hover:underline">
                            {item.linkText}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

