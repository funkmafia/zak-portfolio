'use client'
import React from 'react';

type ProjectProps = {
  title: string; 
  description: string; 
  image: string; 
  url: string; 
  tech: string[]; 
}; 

export default function ProjectCard({ title, description, image, url, tech }: ProjectProps)
{
    return (
        <div 
          className="bg-[#0F172A] rounded-xl shadow-md p-6 hover:scale-[1.02] transition duration-300"
          data-aos="fade-up"
          >
            <img 
            src={image}
            alt={`Screenshot of ${title}`}
            className="rounded-md mb-4 object-cover h-40 w-full"
            />
            <h3 className="text-xl font-bold mb-2 text-[#F5F5F5]">{title}</h3>
            <p className="text-[#A5A5A5] text-sm mb-4">{description}</p>
            <a 
            href={url}
            target="_blank"
            rel="noopener"
            className="text-[#6552D0] font-semibold hover:underline"
            >
              View Project → </a>

            <div className="flex flex-wrap gap-2 mt-2">
              {tech.map((tag, index) => (
                <span
                key={index}
                className="bg-[#394E6A] text-white text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}

            </div>  
          </div>
    )}; 

