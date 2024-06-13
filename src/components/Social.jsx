import React from 'react';
import {
    FaLinkedin,
} from "react-icons/fa";
const Social = () => {
    return (
        <div className="bg-slate-300 px-[1rem] md:px-[5rem] py-[4rem]" id='socials'>
            <h1 className="text-center font-extrabold text-2xl md:text-4xl mb-[2rem]">
                <p> My Journey on Social</p>
                <p> Media Channels.</p>
            </h1>
            <div className='grid place-items-center'>

                <div className="rounded-3xl bg-white p-2 w-[230px]">
                    <div className="h-24 w-full rounded-3xl grid place-content-center bg-red-100">
                        <FaLinkedin size={40} color="blue" />
                    </div>
                    <div className="flex flex-col items-center justify-between gap-[1rem] mt-[1rem]">
                        <p className="font-bold text-2xl">
                            132<span className="text-pink-500"></span>
                        </p>
                        <p>Linkedin Connections</p>
                        <button className="rounded-3xl py-1 px-10 border-[1px] border-black font-bold hover:bg-black hover:text-white hover:duration-300 ease-in-out">
                            <a href="https://www.linkedin.com/in/uka-osim-9761601a0/">
                                Follow
                            </a>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Social
