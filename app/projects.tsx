'use client';

import React from 'react';
import projects from "./data/projects.js";

export default function Projects() {
    return (

        <section id="Projects" className="py-20 px-6 bg-[#1A2238] text-[#F5F5F5">
          <div className="max-w-5xl mx-auto text-center mb-12 space-y-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#F5F5F5]">The Blueprint</h2>
        <p className="text-[#A5A5A5] max-w-2xl mx-auto">
          Every project is a building block. Every line of code is a blueprint for freedom, innovation, and impact.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

      {projects.map((project) => (

          <div key={project.id}
          className="bg-[#0F172A] rounded-xl shadow-md p-6 hover:scale-[1.02] transition duration-300"
          data-aos="fade-up"
          >
            <img 
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="rounded-md mb-4 object-cover h-40 w-full"
            />
            <h3 className="text-xl font-bold mb-2 text-[#F5F5F5]">{project.title}</h3>
            <p className="text-[#A5A5A5] text-sm mb-4">{project.description}</p>
            <a 
            href={project.url}
            target="_blank"
            rel="noopener"
            className="text-[#6552D0] font-semibold hover:underline"
            >
              View Project → </a>

            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((tag, index) => (
                <span
                key={index}
                className="bg-[#394E6A] text-white text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}

            </div>  
          </div>
        ))}
      </div> 
        </section>





    );
}

{/* the .map() will automatically loop through the projects.js array and build cards for each !!
    Nice and easy to format as and when i add more projects.
    
    This works because the presentation and data logic are seperated and scalable. */}

{/* {tag} means, print the current value of the item in the loop - which in this cass will be span of javascript and so fourth 
*/}

{/* key={index}
  reacts to a unique key for each item in a list to help track what changes, improve performance and avoid rendering bugs 
  key={index}, index is the position in the array(0,1,2 ... etc)
  safe to use in this case because the list wont be reordered and the array is small and fixed 
  */}

  {/* LEARNT TODAY 
    {tag} - shows the tech name inside the badge 
    key={index} - helps react keep track of each badge 
    .map() - loops through the tech array. 
    */ }