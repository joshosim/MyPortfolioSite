import React from 'react'

const Projects = () => {
    return (

        <div className="px-[1rem] md:px-[5rem] py-[4rem]" id='projects'>
            <h1 className="text-center font-extrabold text-4xl mb-[2rem]">
                My Lastest Projects
            </h1>
            <div className="grid place-items-center">
                <div className="flex flex-col items-start justify-between gap-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between border border-white rounded-lg w-full">
                        {/* <img src="" alt="" /> */}
                        <div className="h-[200px] md:h-[160px] w-full md:w-[220px] bg-blue-300 rounded-t-lg md:rounded-tl-lg md:rounded-bl-lg"></div>
                        <h1 className="p-2 font-extrabold text-xl">
                            Jash Book Store
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between border border-white rounded-lg w-full">
                        {/* <img src="" alt="" /> */}
                        <div className="h-[200px] md:h-[160px] w-full md:w-[220px] bg-blue-300 rounded-t-lg md:rounded-tl-lg md:rounded-bl-lg"></div>
                        <h1 className="p-2 font-extrabold text-xl">
                            We cultivate
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between border border-white rounded-lg w-full">
                        {/* <img src="" alt="" /> */}
                        <div className="h-[200px] md:h-[160px] w-full md:w-[220px] bg-blue-300 rounded-t-lg md:rounded-tl-lg md:rounded-bl-lg"></div>
                        <h1 className='p-2'>
                            <a href="https://jojocodeeduhub.netlify.app/" className="font-extrabold text-xl">
                                TJJC Online Store
                            </a>
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between border border-white rounded-lg w-full">
                        {/* <img src="" alt="" /> */}
                        <div className="h-[200px] md:h-[160px] w-full md:w-[220px] bg-blue-300 rounded-t-lg md:rounded-tl-lg md:rounded-bl-lg"></div>
                        <h1 className='p-2'>
                            <a href="https://paraganinvest.com.ng/" className="font-bold text-xl" >
                                Paragan Prime Investment
                            </a>
                        </h1>

                    </div>
                </div>
            </div>
        </div >




    )
}

export default Projects
