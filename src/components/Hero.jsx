import React from 'react';
import OsimUkaPhoto from "../images/osimuka.jpg";
import UkaPhoto from "../images/uka.png";

const Hero = () => {
    return (
        <div className="bg-[#BBDEFA] mt-[4rem] mb-[4rem] grid grid-cols-1 md:grid-cols-2 gap-[4rem] md:gap-[8rem] px-[1rem] md:px-[5rem]" id='hero'>
            <div>
                <p className="font-extrabold mb-[1rem]">
                    Say Hi to <span className="text-pink-500">Osim Uka</span>
                </p>
                <h1 className="font-extrabold text-4xl mb-[1rem]">
                    <p>Your Front End</p>
                    <p> Web Developer</p>
                </h1>
                <p className="mb-[1rem]">
                    Creating and building Full Stack Web Applications for all
                    companies.
                </p>
                <div className='flex items-start justify-center flex-col gap-2 mb-[2rem]'>
                    <button className="bg-black border-2 border-black text-white rounded-2xl px-5 py-3 font-bold hover:scale-105 w-[200px]">
                        Hire Me
                    </button>
                    <button className="bg-transparent border-2 border-white text-black rounded-2xl px-5 py-3 font-bold hover:scale-105 w-[200px] hover:bg-slate-100">
                        Download Resume
                    </button>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-extrabold text-xl">500M+</p>
                        <p>Youtube Views</p>
                    </div>
                    <div>
                        <p className="font-extrabold text-xl">3M+</p>
                        <p>Subscribers</p>
                    </div>
                    <div>
                        <p className="font-extrabold text-xl">7M+</p>
                        <p>Followers</p>
                    </div>
                </div>
            </div>
            <div className="grid place-content-center">
                <img src={OsimUkaPhoto} alt={UkaPhoto} className="object-cover" />
            </div>
        </div>

    )
}

export default Hero
