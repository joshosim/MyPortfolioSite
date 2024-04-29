import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Menu from "../components/Menu";
import OsimLogo from '../images/osim_logo.png'

const Navbar = () => {
    return (
        <>
            <div className="fixed top-0 flex items-center justify-between px-[1rem] md:px-[5rem] bg-inherit w-full  opacity-90">
                <div><img src={OsimLogo} alt="/osim_logo.png" className='w-16' /></div>
                <ul className="hidden md:flex items-center justify-between gap-5">
                    <li className="font-bold hover:text-gray-500 cursor-pointer">
                        <AnchorLink href="#hero">
                            Home
                        </AnchorLink>
                    </li>

                    <li className="font-bold hover:text-gray-500 cursor-pointer" >
                        <AnchorLink href="#about">
                            About
                        </AnchorLink>
                    </li>

                    <li className="font-bold hover:text-gray-500 cursor-pointer" >

                        <AnchorLink href="#socials">
                            Socials
                        </AnchorLink>
                    </li>
                    <li className="font-bold hover:text-gray-500 cursor-pointer">
                        <AnchorLink href="#projects">
                            Projects
                        </AnchorLink>
                    </li>
                </ul>

                <div className='block md:hidden'>
                    <Menu />
                </div>

                <button className="hidden md:block border-2 border-black py-2 px-6 font-semibold text-black rounded-3xl hover:bg-black hover:duration-300 hover:text-white">
                    <a href="tel: +2347066530998">Contact Me</a>
                </button>
            </div>
        </>
    )
}

export default Navbar
