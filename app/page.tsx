import Image from "next/image";
import Projects from "@/components/projects";
import AboutScroll from "@/components/AboutScroll";
import StackSelection from "@/components/StackSelection";
import BluePrintPrinciples from "@/components/BlueprintPrinciples"; 
import SpotlightSection from "@/components/SpotlightSection";
import ContactSection from "@/components/ContactSection"; 
import Hero from "@/components/Hero"; 
import Navbar from "@/components/Navbar";


export default function Home() {

  return (
      
      <main className="p-6 max-w-7xl mx-auto space-y-24">
        {/* imported the navbar section */}
        <Navbar  />

        {/* imported the header section */}
        <Hero />

       {/* Imported The About Zak blueprint section */} 
       <AboutScroll /> 

       {/* imported projects section */}
       <Projects />

       {/* imported stack section */}
        <StackSelection /> 

        {/* imported prinples section */}
        <BluePrintPrinciples />

        {/* imported spotlight section */}
        <SpotlightSection /> 

        {/* imported contact section */}
        <ContactSection /> 

        <footer className="text-center text-sm text-[#A5A5A5] py-6 fixed bottom-0">
    © Zak Hajjaji 🍊 Funk Mafia - Blueprint built with clarity & coffee
  </footer>

      </main>

     


  );
}
