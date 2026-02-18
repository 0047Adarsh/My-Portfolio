"use client";
import Link from "next/link";
import {useState} from "react";

const nav = [
    {id: "home", title: "Home"},
    {id: "about", title: "About"},
    {id: "services", title: "Services"},
    {id: "experience", title: "Experience"},
    {id: "projects", title: "Projects"},
    {id: "testimonials", title: "Testimonials"},
    {id: "contact", title: "Contact"},
]

export default function Header(){

    const [active, setActive] = useState("home");   

    return(
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-white/10 blur-xl" />
            <nav className="realative flex items-center gap-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/15 px-2 py-1 shadow-2xl text-white">
                {nav.map((item)=>(
                    <Link key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setActive(item.id)}
                    className={`relative px-4 py-2 rounded-full text-sm transition
                    ${active === item.id ? "bg-white/10 text-white" : "text-gray-300 hover:text-white hover:bg-white/10"}`}>
                        {item.title}
                    </Link>
                ))}
            </nav>
            </div>
        </header>
    )
}