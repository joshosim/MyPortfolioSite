import React from 'react';
import OsimUkaPhoto from "../images/osimuka.jpg";
import UkaPhoto from "../images/uka.png";
import { ReactTyped } from "react-typed";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    const handleDownload = async () => {
        const pdfUrl = "MyResume.pdf"
        const link = document.createElement('a')
        link.href = pdfUrl
        link.download = 'OSIMCV.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    };

    return (
        <div className="bg-[#BBDEFA] mb-[4rem] grid grid-cols-1 md:grid-cols-2 gap-[4rem] md:gap-[8rem] px-[1rem] md:px-[5rem]" id='hero'>
            <div className='mt-[4rem]'>

                <p className="font-extrabold mb-[1rem]">
                    Say Hi to <span className="text-pink-500"><ReactTyped strings={["Osim Uka", "your soon to be web developer"]}
                        typeSpeed={60}
                        backSpeed={60}
                        loop /></span>
                </p>
                <h1 className="font-extrabold text-4xl mb-[1rem]">
                    <p>Your Front End</p>
                    <p> Web Developer</p>
                </h1>
                <p className="mb-[1rem]">
                    Creating and building and deploying Front-End Web Applications for all
                    companies.
                </p>
                <div className='flex items-start justify-center flex-col gap-2 mb-[2rem]'>
                    <button className="bg-black border-2 border-black text-white rounded-2xl px-5 py-3 font-bold hover:scale-105 w-[200px]">
                        <AnchorLink href="#footer">
                            Hire Me
                        </AnchorLink>
                    </button>
                    <button className="bg-transparent border-2 border-white text-black rounded-2xl px-5 py-3 font-bold hover:scale-105 w-[200px] hover:bg-slate-100" onClick={handleDownload}>
                        Download Resume
                    </button>
                </div>
                <div className="flex items-center justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                        <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#b3cee5" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#b3cee5" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#b3cee5"></circle>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                        <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                        <linearGradient id="SNASnMitCxQrIYk4GDibta_v8RpPQUwv0N8_gr1" x1="18.208" x2="34.159" y1="2.413" y2="46.236" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f09701"></stop><stop offset="1" stop-color="#e36001"></stop></linearGradient><path fill="url(#SNASnMitCxQrIYk4GDibta_v8RpPQUwv0N8_gr1)" d="M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041	c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5	H9.184C8.01,5,7.089,6.006,7.192,7.176z"></path><path fill="#f09601" d="M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242	C37.656,8.502,37.196,8,36.609,8H24z"></path><path fill="#fff" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5L24,25z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#d6e0e9" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path><path d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M34.278,12H33.2H24h-9.1h-1.06l0.062,1.058l0.7,12L14.657,26h-0.032l0.078,1.073l0.4,5.5l0.049,0.668 l0.636,0.209l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6l0.644-0.212l0.041-0.677l0.7-11.5L33.663,20H32.6H24h-3.672l-0.15-2H24h8.9 h0.928l0.069-0.925l0.3-4L34.278,12L34.278,12z M20.623,26H24h3.331l-0.185,2.769L24,29.843l-3.156-1.077l-0.148-1.846L20.623,26 L20.623,26z" opacity=".05"></path><path d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M33.739,12.5H33.2H24h-9.1h-0.53l0.031,0.529l0.7,12l0.027,0.471H15.6H24h3.866l-0.242,3.634L24,30.372 l-3.628-1.239l-0.174-2.173l-0.037-0.46H19.7h-4h-0.538l0.039,0.536l0.4,5.5l0.024,0.334l0.318,0.105l7.9,2.6L24,35.626 l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.032-0.53H32.6H24h-4.136l-0.225-3H24h8.9h0.464l0.035-0.463l0.3-4 L33.739,12.5L33.739,12.5z" opacity=".07"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                        <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                    </svg>
                    <img width="50" height="50" src="https://img.icons8.com/nolan/64/mongo-db.png" alt="mongo-db" />
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                        <path fill="#21a366" d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path><path fill="#21a366" d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                        <defs><linearGradient x1="30.982" y1="21.203" x2="30.982" y2="43.514" gradientUnits="userSpaceOnUse" id="color-1_2ZOaTclOqD4q_gr1"><stop offset="0" stop-color="#d9f7ee"></stop><stop offset="1" stop-color="#2df19b"></stop></linearGradient><linearGradient x1="44.5" y1="16" x2="44.5" y2="49" gradientUnits="userSpaceOnUse" id="color-2_2ZOaTclOqD4q_gr2"><stop offset="0" stop-color="#7de3c3"></stop><stop offset="1" stop-color="#0ba360"></stop></linearGradient><linearGradient x1="17.54" y1="15" x2="17.54" y2="50" gradientUnits="userSpaceOnUse" id="color-3_2ZOaTclOqD4q_gr3"><stop offset="0" stop-color="#7de3c3"></stop><stop offset="1" stop-color="#0ba360"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(4,4)"><path d="M45.758,32.346l11.206,14.654h-0.85c-1.051,0 -2.041,-0.49 -2.68,-1.324l-8.934,-11.684l-8.935,11.684c-0.638,0.834 -1.628,1.324 -2.679,1.324h-0.85l11.206,-14.654l-10.971,-14.346h0.85c1.051,0 2.041,0.49 2.68,1.324l8.7,11.377l8.7,-11.377c0.637,-0.834 1.628,-1.324 2.678,-1.324h0.85zM28.527,40h0.638v0c-2.348,6.085 -9.292,9.631 -15.896,7.256c-5.054,-1.819 -8.269,-6.812 -8.269,-12.183v-5.573c0,-7.29 6.273,-13.143 13.705,-12.443c6.477,0.61 11.295,6.304 11.295,12.809v4.134h-11v0h-12v1.109c0,4.501 2.671,8.705 6.9,10.248c4.807,1.754 9.835,-0.235 12.389,-4.116c0.5,-0.76 1.327,-1.241 2.238,-1.241zM7,32h21v-2.5c0,-5.79 -4.71,-10.5 -10.5,-10.5c-5.79,0 -10.5,4.71 -10.5,10.5z" fill="url(#color-1_2ZOaTclOqD4q_gr1)"></path><path d="M56.729,18l-10.971,14.347l11.206,14.653h-0.85c-1.051,0 -2.041,-0.49 -2.68,-1.324l-8.934,-11.684l-8.935,11.684c-0.638,0.834 -1.628,1.324 -2.679,1.324h-0.85l11.206,-14.653l-10.971,-14.347h0.85c1.051,0 2.041,0.49 2.68,1.324l8.7,11.377l8.7,-11.377c0.637,-0.834 1.628,-1.324 2.678,-1.324h0.85M60.776,16h-4.047h-0.85c-1.663,0 -3.258,0.788 -4.268,2.109l-7.111,9.299l-7.111,-9.299c-1.01,-1.321 -2.606,-2.109 -4.268,-2.109h-0.85h-4.047l2.458,3.215l10.042,13.132l-10.277,13.438l-2.458,3.215h4.047h0.85c1.663,0 3.258,-0.789 4.268,-2.109l7.346,-9.606l7.346,9.606c1.01,1.32 2.605,2.109 4.268,2.109h0.85h4.047l-2.458,-3.215l-10.277,-13.439l10.042,-13.132l2.458,-3.214z" fill="url(#color-2_2ZOaTclOqD4q_gr2)"></path><path d="M17.5,17c0.397,0 0.8,0.019 1.205,0.057c6.477,0.61 11.295,6.304 11.295,12.809v4.134h-11v0h-12v1.109c0,4.501 2.671,8.705 6.9,10.248c1.2,0.439 2.414,0.643 3.6,0.643c3.563,0 6.872,-1.847 8.789,-4.758c0.5,-0.761 1.327,-1.242 2.238,-1.242h0.638v0c-1.847,4.785 -6.535,8 -11.665,8c-1.394,0 -2.82,-0.237 -4.231,-0.745c-5.054,-1.818 -8.269,-6.811 -8.269,-12.182v-5.573c0,-6.893 5.607,-12.5 12.5,-12.5M7,32h21v-2.5c0,-5.79 -4.71,-10.5 -10.5,-10.5c-5.79,0 -10.5,4.71 -10.5,10.5v2.5M17.5,15v0c-3.868,0 -7.508,1.509 -10.249,4.251c-2.741,2.741 -4.251,6.381 -4.251,10.249v5.573c0,6.348 3.855,12 9.592,14.065c1.592,0.572 3.243,0.862 4.908,0.862c5.951,0 11.389,-3.729 13.531,-9.28l1.05,-2.72h-2.915h-0.638c-1.565,0 -3.026,0.801 -3.91,2.142c-1.566,2.38 -4.294,3.858 -7.118,3.858c-0.986,0 -1.967,-0.175 -2.915,-0.521c-3.076,-1.123 -5.223,-4.063 -5.543,-7.479h9.958h11h2v-2v-4.134c0,-7.607 -5.758,-14.109 -13.108,-14.8c-0.462,-0.044 -0.93,-0.066 -1.392,-0.066zM9,30v-0.5c0,-4.687 3.813,-8.5 8.5,-8.5c4.687,0 8.5,3.813 8.5,8.5v0.5h-17z" fill="url(#color-3_2ZOaTclOqD4q_gr3)"></path></g></g>
                    </svg>
                </div>
            </div>
            <div className="grid place-content-center">
                <img src={OsimUkaPhoto} alt={UkaPhoto} className="object-cover" />
            </div>
        </div>

    )
}

export default Hero
