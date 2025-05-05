import Image from "next/image";
import Projects from "./projects";
import AboutScroll from "@/components/AboutScroll";
import StackSelection from "@/components/StackSelection";
import BluePrintPrinciples from "@/components/BlueprintPrinciples"; 
import Spotlight from "@/components/SpotlightSection";
import SpotlightSection from "@/components/SpotlightSection";


export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold font-heading mb-4 leading-tight text-[#F5F5F5]">
            Zak Hajjaji 🍊 <span className="text-[#6552D0]">Software Developer</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-[#A5A5A5] mb-2">
            Building with Integrity. Empowering through Innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a href="#projects" className="bg-[#6552D0] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#6552D0] hover:shadow-lg hover:-translate-y-1 transform transition duration-300">
              View My Work
            </a>
            <a href="#contact" className="border border-[#6552D0] text-[#6552D0] px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#6552D0] hover:text-white hover:shadow-lg hover:-translate-y-1 transform transition duration-300">
              Contact Me
            </a>
          </div>
        </section>

       {/* Imported The About Zak blueprint section */} 
       <AboutScroll /> 

       {/* imported projects section */}
       <Projects />

       {/* imported stack section*/ }
        <StackSelection /> 

        {/* imported prinples section*/ }
        <BluePrintPrinciples />

        {/* imported spotlight section*/}
        <SpotlightSection /> 





      </main>

      <footer className="text-center text-sm text-[#A5A5A5] py-6">
    © Zak Hajjaji 🍊 Funk Mafia - Blueprint built with clarity & coffee
  </footer>



    </div>
  );
}



        {/* NOTE: Replace all HTML comments  with JSX comments like this: */} 

        {/* Also: 
            - Replace 'className' with 'classNameName'
            - Self-close all <img> and <input> tags like <img />
            - Fix unclosed <p> or <div> tags (very common copy-paste issue)
        */}
