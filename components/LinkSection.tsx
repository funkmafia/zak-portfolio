'use client'

import React from 'react'
import links from '@/app/data/links'; 

const LinkSection = () => {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-6" data-aos="fade-up" data-aos-delay="200">
    {links.map((link, index) => (
        <a 
        key={index}
        href={link.href}
        target="_blank"
        rel="noopener"
        className="flex items-center gap-2 px-4 py-3 bg-[#1A2238] rounded-md text-[#F5F5F5] hover:bg-[#394E6A] transition duration-300">

        <i className={`${link.iconClass} text-xl`}></i> {link.label}
        </a>
    ))}
    </div>
  );
}

export default LinkSection; 