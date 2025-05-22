{/* project.js is jsut data like ingredients 
    ProjectCard.tsx is a single, reusable card, the recipe for 1 item 
    Projects.tsx is a section thats maps and displays cards, the whole meal 
*/}

{/* 
    .tsx = typescript + jsx, and jsx is a syntax extension to JavaScript allowing you to react HTML in react
    typescript is creating a custom rule for the data that gets passed into your component. Also lets me define types to prevent bugs

    title: string = means title must be a string like 'gym planner' 
    tech: string[] = means tech must be an array of strings like ["javascript", "tailwind"]
*/} 

{/* 
   type is a custom name, could be cardData, projectCardProps, still works but not as cler 
   PROPS = SHORT FOR PROPERTIES
    these are the values passed INTO a react compoentn like card card title - gym planner etc
    this type is telling typescrit that any props passed into <projectcard /> must match this shape 
*/ }

'use client';

import React from 'react';
import projects from '@/app/data/projects';

type ProjectProps = {
    title: string; 
    description: string; 
    image: string; 
    url: string; 
    tech: string[]; 
}; 

{/* 
    Why we dfine this shape: 
    export - 'hey, i expect projectcard to recieve an object that matches the project props type'
    we use { title, descript etc } to pull those values out (called destructuring)    

    we define the type first, so the function can use it 
    immediately after, we create the function that uses that type s a parameter 

    // 1. define the shape of the props 
    tpe ProjectProps = {...}

    // 2. use it in the actual component 
    export default function ProjectCard(props: projectprops) { ... etc} - allows other files to import this component

    also, we use destructing here like: 
    function Type ({values like title, description etc}) - extracts props cleanly inside of props.title 
*/ }

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

    {/* 
        No key={id} inside this component because the key is only needed where i map over a list
        which we are already doing inside projects.tsx !! 
        key is a react tool used during rendering of lists to track each item 
    */}