import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black flex justify-between items-center flex-col md:flex-row py-10 px-5 '>
            <div className="px-[1rem] md:px-[5rem] py-[4rem]   text-white">
                JOUO
            </div>
            <div>
                <form action="">
                    <h2 className='text-white font-bold text-2xl my-3'>Send Me a Message</h2>
                    <input className='outline-none border-2 border-white placeholder:text-gray-500 p-2 rounded-lg w-full mb-4 md:w-3/4' type="text" placeholder='Email' />
                    <input className='outline-none border-2 border-white placeholder:text-gray-500 p-2 rounded-lg w-full mb-4 md:w-3/4' type="text" placeholder='Name' />
                    <textarea className='outline-none border-2 border-white placeholder:text-gray-500 p-2 rounded-lg w-full md:w-3/4 mb-4' type="text" placeholder='Message' />
                    <button type='submit' className='outline-none bg-white font-bold text-black p-2 rounded-lg w-full md:w-3/4 mb-4 hover:bg-gray-200 hover:scale-95'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Footer
