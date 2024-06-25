import React from 'react'
import { data } from '../data/data'

const Projects = () => {
    return (

        <div className="px-[1rem] md:px-[5rem] py-[4rem]" id='projects'>
            <h1 className="text-center font-extrabold text-4xl mb-[2rem]">
                My Lastest Projects
            </h1>
            <div className="grid place-items-center">
                <div className="grid md:grid-cols-2 gap-4">


                    {
                        data.map((item) => (
                            <div className="grid rounded-lg w-[280px] shadow-lg">
                                <img src={item.image} alt="/" className='h-[200px] w-full rounded-t-lg object-cover' />

                                <h1 className='p-2 font-extrabold text-xl'>
                                    {item.title}
                                </h1>
                                <p className='p-2'>{item.desc}</p>
                                <a href={item.link} > <button className='flex justify-center items-center m-2 bg-blue-500 p-2 font-bold rounded-lg w-1/3 hover:bg-blue-400 transition-all duration-300'>
                                    Explore
                                </button></a>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div >




    )
}

export default Projects
