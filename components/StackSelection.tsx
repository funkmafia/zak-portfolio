'use client';

import React from 'react';
import stack from '@/app/data/stack'; 

export default function StackSelection() {
    return (
        <section id="stack" className="py-24 px-6 bg-[#0F172A] text-[#F5F5F5]">
    <div className="max-w-5xl mx-auto text-center mb-12" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-red-500">The Stack & The Standard</h2>
      <p className="text-[#A5A5A5] text-lg max-w-3xl mx-auto">The tools, and the principles I code by.</p>
    </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
        {stack.map((item, index) => (
  <div
    key={index}
    className="bg-[#1A2238] p-4 mb-2 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 hover:scale-105 ease-in-out"
  >
    {item}
  </div>
))}
        </div>
        </section>
    );
}

{/* 
    stack.map((item, index => ( ...))
    "FOR EVERY ITEM IN THE STACK ARRAY, RENDER A <DIV. THAT DISPLAYS IT ON THE SCREEN"
    
        .map is a JS array method - it loops through each value in your stack array 
    •	item → the actual value (like "HTML" or "React")
	•	index → the number representing the item’s position in the array (e.g., 0, 1, 2…)
    
        key={index} 
    React request a unique key for each item when rendering lists
    It uses this to efficiently track changes and re-render only what is needed 
    Index is the fallback 

        {item}
    	•	This outputs the value from the array inside the div.
	•	So if item = "Firebase", it will render: <div class=".."> Firebase </div> 
*/ }