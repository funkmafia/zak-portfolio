'use client';

import React from 'react';
import principles from '@/app/data/principles'; 

export default function BluePrintPrinciples() {
    return (
        <section className="mt-20 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
             <h3 className="text-2xl font-heading font-semibold text-center text-[#6552D0] mb-10">The Blueprint Principles</h3>
             <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {principles.map((item, index) => (
                 <div key={index}
                 className="bg-[#1A2238] p-6 rounded-xl shadow-md flex flex-col justify-between hover:shadow-lg transition duration-300 hover:scale-105 ease-in-out">
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