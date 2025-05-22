import Image from "next/image";
import Projects from "@/components/ProjectsInfo";
import AboutScroll from "@/components/AboutScroll";
import StackSelection from "@/components/StackSelection";
import BluePrintPrinciples from "@/components/BlueprintPrinciples"; 
import SpotlightSection from "@/components/SpotlightSection";
import ContactSection from "@/components/ContactSection"; 
import Hero from "@/components/Hero"; 
import Navbar from "@/components/Navbar";
import LinkSection from "@/components/LinkSection";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20 px-6 max-w-7xl mx-auto space-y-24 bg-[#0F172A]">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <AboutScroll />

        {/* Projects */}
        <Projects />

        {/* Stack Section */}
        <StackSelection />

        {/* Blueprint Principles */}
        <BluePrintPrinciples />

        {/* Spotlight */}
        <SpotlightSection />

        {/* Contact */}
        <ContactSection />

        {/* Connect */}
        <LinkSection />
        <footer className="text-center text-sm text-[#A5A5A5] py-6">
        © Zak Hajjaji 🍊 Funk Mafia - Blueprint built with clarity & coffee
      </footer>
      </main>
      
    </>
  );
}
