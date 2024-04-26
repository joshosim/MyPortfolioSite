import React from 'react'

const Projects = () => {
    return (

        <div className="px-[1rem] md:px-[5rem] py-[4rem]" id='projects'>
            <h1 className="text-center font-extrabold text-4xl mb-[2rem]">
                My Lastest Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
                <div className='flex flex-col md:flex-row md:items-center md:justify-between md:gap-[2rem] border-2 border-white rounded-lg w-full'>
                    {/* <img src="" alt="" /> */}
                    <div className="h-[200px] md:h-[350px] w-full md:w-[550px] bg-blue-300 rounded-t-lg"></div>
                    <h1 className="p-3 font-bold text-xl">
                        We are going to change
                    </h1>
                </div>
                <div className="flex flex-col items-start justify-between gap-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-[2rem] border-2 border-white rounded-lg w-full">
                        {/* <img src="" alt="" /> */}
                        <div className="h-[200px] md:h-[160px] w-full md:w-[220px] bg-blue-300 rounded-t-lg"></div>
                        <h1 className="p-2 font-extrabold text-xl">
                            We cultivate
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-[2rem] border-2 border-white rounded-lg w-full">
                        {/* <img src="" alt="" /> */}
                        <div className="h-[200px] md:h-[160px] w-full md:w-[220px] bg-blue-300 rounded-t-lg"></div>
                        <h1 className='p-2'>
                            <a href="https://jojocodeeduhub.netlify.app/" className="font-extrabold text-xl">
                                Paragan Prime Investment
                            </a>
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-[2rem] border-2 border-white rounded-lg w-full">
                        {/* <img src="" alt="" /> */}
                        <div className="h-[200px] md:h-[160px] w-full md:w-[220px] bg-blue-300 rounded-t-lg"></div>
                        <h1 className='p-2'>
                            <a href="https://paraganinvest.com.ng/" className="font-bold text-xl" >
                                TJJC Online Store</a>
                        </h1>

                    </div>
                </div>
            </div>
        </div >




    )
}

export default Projects
