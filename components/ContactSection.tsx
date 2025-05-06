'use client';

import { useState } from 'react';
import contact from "@/app/data/contact";

export default function ContactSection() {

    const [formData, setFormData ] = useState({
        name: '', 
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false); 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value })); 
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        console.log("Form submitted", formData)
        setSubmitted(true); 
        setFormData({ name: '', email: '', message: '' });
    }

    return(
        <section id="contact" className="py-20 px-6 bg-[#0F172A] text-[#F5F5F5]">
        <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{contact.header}</h2>
          <p className="text-[#A5A5A5] text-lg">{contact.subheader}</p>
        </div>
    
    {submitted && (
        <div className='text-center mb-6 text-green-400 font-semibold'>Your message has been sent !! </div>
    )}


        <form 
        className="max-w-2xl mx-auto space-y-4" data-aos="fade-up" data-aos-delay="100" onSubmit={handleSubmit}>
          <div>
            <input type="text" name="name" placeholder="Your Name" required
              className="w-full px-4 py-3 rounded-md bg-[#1A2238] text-white border border-[#394E6A] focus:outline-none focus:ring-2 focus:ring-[#6552D0]" />
          </div>
    
          <div>
            <input type="email" name="email" placeholder="Your Email" required
              className="w-full px-4 py-3 rounded-md bg-[#1A2238] text-white border border-[#394E6A] focus:outline-none focus:ring-2 focus:ring-[#6552D0]" />
          </div>
    
          <div>
            <textarea placeholder="Your Message" name="message" rows={5} required
              className="w-full px-4 py-3 rounded-md bg-[#1A2238] text-white border border-[#394E6A] focus:outline-none focus:ring-2 focus:ring-[#6552D0]"></textarea>
          </div>
          <button id="submit" type="submit"
            className="bg-[#6552D0] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#6552D0] hover:shadow-lg hover:-translate-y-1 transform transition duration-300">
            Send Message
          </button>
          <p id="form-feedback" className="text-sm mt-4"></p>
        </form>
        </section>
    )
}

{/* 
    why false instead the useState - because i am declaring a boolean state variable 
    submitted = tracks whether the form has been submitted
    false = default value (the form has not been submitted yet)
*/}

{/* 
    When the user hits submit, it will change this to true using setSubmitted(true), and react will
    re-render the UI to show the below: 
    {submitted && (<div className=".."> your message has been sent</div>
    )}    
*/}