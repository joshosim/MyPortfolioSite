import React from 'react'

const Projects = () => {
    return (

        <div className="px-[1rem] md:px-[5rem] py-[4rem]" id='projects'>
            <h1 className="text-center font-extrabold text-4xl mb-[2rem]">
                My Lastest Projects
            </h1>
            <div className="grid place-items-center">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="grid border border-white rounded-lg w-[280px]">
                        {/* <img src="" alt="" /> */}
                        <div className="h-[200px] w-full bg-blue-300 rounded-t-lg"></div>
                        <h1 className="p-2 font-extrabold text-xl">
                            Jash Book Store
                        </h1>
                        <p className='p-2'> The purpose of this book store was to solve the problem of unavailiability of school materials for students to study with!</p>

                        <button className='flex justify-center items-center m-2 bg-blue-500 p-2 font-bold rounded-lg w-1/3 hover:bg-blue-400 transition-all duration-300'>
                            <a href=" https://github.com/joshosim/BS" >
                                Explore </a>
                        </button>

                    </div>
                    <div className="grid border border-white rounded-lg w-[280px]">
                        {/* <img src="" alt="" /> */}
                        <div className="h-[200px] w-full bg-blue-300 rounded-t-lg"></div>
                        <h1 className="p-2 font-extrabold text-xl">
                            Nifes Futo Site
                        </h1>
                        <p className='p-2'>This is a frontend site for a church body/ organization, it displays different information about their
                            activities and what they represent.</p>
                        <button className='flex justify-center items-center m-2 bg-blue-500 p-2 font-bold rounded-lg w-1/3 hover:bg-blue-400 transition-all duration-300'>
                            <a href="https://nifesfuto.netlify.app/" >
                                Explore </a>
                        </button>
                    </div>
                    <div className="grid border border-white rounded-lg w-[280px]">
                        {/* <img src="" alt="" /> */}
                        <div className="h-[200px] w-full bg-blue-300 rounded-t-lg"></div>
                        <h1 className='p-2 font-extrabold text-xl'>
                            TJJC Online Store
                        </h1>
                        <p className='p-2'>Team Jojo Code Online Store is available for displaying carts and shopping items that will suit your daily needs. It was built with React JS and Dummy APIs!</p>
                        <button className='flex justify-center items-center m-2 bg-blue-500 p-2 font-bold rounded-lg w-1/3 hover:bg-blue-400 transition-all duration-300'>
                            <a href="https://jojocodeeduhub.netlify.app/" >
                                Explore </a>
                        </button>
                    </div>
                    <div className="grid border border-white rounded-lg w-[280px]">
                        {/* <img src="" alt="" /> */}
                        <div className="h-[200px] w-full bg-blue-300 rounded-t-lg"></div>
                        <h1 className='p-2 font-extrabold text-xl'>
                            Paragan Prime Investment
                        </h1>
                        <p className='p-2'> Paragan Prime Investment was built for the purpose of making investments and returning investment, was built with Django, HTML,CSS and JS!</p>
                        <a href="https://paraganinvest.com.ng/"  > <button className='flex justify-center items-center m-2 bg-blue-500 p-2 font-bold rounded-lg w-1/3 hover:bg-blue-400 transition-all duration-300'>

                            Explore
                        </button></a>

                    </div>
                </div>
            </div>
        </div >




    )
}

export default Projects
