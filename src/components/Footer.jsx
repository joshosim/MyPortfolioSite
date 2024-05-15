import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { DialogContext } from '../context/dialogContext';

const Footer = () => {
    const form = useRef();
    const { dialog, handleDialog } = useContext(DialogContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mssg, setMssg] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_rdbf91y', 'template_fc19ssa', form.current, {
                publicKey: 'eP90LBxaVMewj9zZU',
            })
            // .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
            //     publicKey: 'YOUR_PUBLIC_KEY',
            // })
            .then(
                () => {
                    handleDialog(dialog)
                    setEmail('')
                    setName('')
                    setMssg('')
                },
                (error) => {
                    alert('FAILED...', error.text);
                },
            );
    }

    return (
        <div id='footer' className='bg-black flex justify-between items-center flex-col md:flex-row py-10 px-5 '>
            <div className="px-[1rem] md:px-[5rem] py-[4rem]   text-white">
                JOUO-TJJC @ 2024
            </div>
            <div>
                <form ref={form} onSubmit={sendEmail}>
                    <h2 className='text-white font-bold text-2xl my-3'>Send Me a Message</h2>
                    <input className='outline-none border-2 border-white placeholder:text-gray-500 p-2 rounded-lg w-full mb-4 md:w-3/4' type="text" placeholder='Email' name='user_email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className='outline-none border-2 border-white placeholder:text-gray-500 p-2 rounded-lg w-full mb-4 md:w-3/4' type="text" placeholder='Name' name='from_name' value={name} onChange={(e) => setName(e.target.value)} />
                    <textarea className='outline-none border-2 border-white placeholder:text-gray-500 p-2 rounded-lg w-full md:w-3/4 mb-4' type="text" placeholder='Message' name='message' value={mssg} onChange={(e) => setMssg(e.target.value)} />
                    <button type='submit' className='outline-none bg-white font-bold text-black p-2 rounded-lg w-full md:w-3/4 mb-4 hover:bg-blue-100 hover:scale-95'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Footer
