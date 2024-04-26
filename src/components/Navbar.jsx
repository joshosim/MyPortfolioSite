import React from 'react';
import Menu from "../components/Menu";

const Navbar = () => {
    return (
        <>
            <div className="fixed top-0 flex items-center justify-between px-[1rem] md:px-[5rem] bg-inherit w-full py-3">
                <div>OsimLogo</div>
                <ul className="hidden md:flex items-center justify-between gap-5">
                    <li className="font-bold hover:text-gray-500 cursor-pointer">
                        <a href="#hero">Home</a>
                    </li>
                    <li className="font-bold hover:text-gray-500 cursor-pointer" >
                        <a href="#about">About</a>
                    </li>
                    <li className="font-bold hover:text-gray-500 cursor-pointer" >
                        <a href="#socials">Socials</a>
                    </li>
                    <li className="font-bold hover:text-gray-500 cursor-pointer">
                        <a href="#projects">Projects</a>
                    </li>
                </ul>

                <Menu />

                <button className="hidden md:block border-2 border-black py-2 px-6 font-semibold text-black rounded-3xl hover:bg-black hover:duration-300 hover:text-white">
                    <a href="tel: +2347066530998">Contact Me</a>
                </button>
            </div>
        </>
    )
}

export default Navbar
