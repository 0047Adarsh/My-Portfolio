import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import About from "@/components/About";
import "./globals.css";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}
