import React, { useState } from "react";
import UkaPhoto from "../images/uka.png";
import OsimUkaPhoto from "../images/osimuka.jpg";

// import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
const HomePage = () => {
  const [navState, setNavState] = useState(true);
  const toggle = () => {
    setNavState(!navState);
  };

  return (
    <div className="scroll-smooth">
      <div className="pt-4 bg-[#BBDEFA]">
        {/* navbar */}
        <div className="flex items-center justify-between px-[1rem] md:px-[5rem]">
          <div>OsimLogo</div>
          <ul className="hidden md:flex items-center justify-between gap-5">
            <li className="font-bold hover:text-gray-500 cursor-pointer">
              Home
            </li>
            <li className="font-bold hover:text-gray-500 cursor-pointer">
              About
            </li>
            <li className="font-bold hover:text-gray-500 cursor-pointer">
              Projects
            </li>
          </ul>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 block md:hidden"
            onClick={toggle}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <button className="hidden md:block border-2 border-black py-2 px-6 font-semibold text-black rounded-3xl hover:bg-black hover:duration-300 hover:text-white">
            <a href="tel: +2347066530998">Contact Me</a>
          </button>
          <button className="md:hidden border-2 border-black p-2 rounded-full font-semibold text-black">
            <a href="tel: +2347066530998">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </a>
          </button>
        </div>
        {navState === false && (
          <div
            className={
              !navState
                ? `drawer open border-b border-black m-0 py-2`
                : `drawer close border-b border-black m-0 py-2`
            }
          >
            <ul className="flex flex-col items-center justify-between gap-5 ">
              <li className="font-bold hover:text-gray-500 cursor-pointer">
                Home
              </li>
              <li className="font-bold hover:text-gray-500 cursor-pointer">
                About
              </li>
              <li className="font-bold hover:text-gray-500 cursor-pointer">
                Projects
              </li>
            </ul>
          </div>
        )}
        {/* homecontent */}
        <div className="bg-[#BBDEFA] mt-[1rem] mb-[4rem] grid grid-cols-1 md:grid-cols-2 gap-[4rem] md:gap-[8rem] px-[1rem] md:px-[5rem]">
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
            <button className="bg-black text-white rounded-2xl px-5 py-3 font-bold mb-[.5rem] hover:scale-105 w-[200px]">
              Hire Me
            </button>
            <button className="bg-transparent border-2 border-white text-black rounded-2xl px-5 py-3 font-bold mb-[3rem] hover:scale-105 w-[200px] hover:bg-slate-100">
              Download Resume
            </button>
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

        {/* aboutme */}
        <div className="bg-white py-[4rem] px-[1rem] md:px-[5rem]">
          <h1 className="text-center font-extrabold text-4xl mb-[2rem]">
            About Me
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[4rem]">
            <div>
              <div>
                <p className="font-bold">Biography</p>
                <p className="mb-[1rem]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati laborum ipsam doloribus doloremque natus modi sint
                  in accusantium minima fugiat, tenetur culpa.
                </p>
              </div>
              <div>
                <p className="font-bold ">Contact</p>
                <p className="mb-[1rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, possimus natus quia nihil.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p>01Yrs</p>
                  <p>Experience</p>
                </div>
                <div>
                  <p>02+</p>
                  <p>Clients</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src={UkaPhoto}
                alt="//Uka"
                className="h-[400px] w-[500px] object-cover rounded-xl"
              />
            </div>
            <div>
              <div>
                <p className="font-bold">Biography</p>
                <p className="mb-[1rem]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati laborum ipsam doloribus doloremque natus modi sint
                  in accusantium minima fugiat, tenetur culpa.
                </p>
              </div>
              <div>
                <p className="font-bold ">Contact</p>
                <p className="mb-[1rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, possimus natus quia nihil.
                </p>
              </div>
              <div>
                <div>
                  <p>01Yrs</p>
                  <p>Experience</p>
                </div>
                <div>
                  <p>03+</p>
                  <p>Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* socialmedia */}
        <div className="bg-slate-300 px-[1rem] md:px-[5rem] py-[4rem]">
          <h1 className="text-center font-extrabold text-2xl md:text-4xl mb-[2rem]">
            <p> My Journey on Social</p>
            <p> Media Channels.</p>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] px-[1rem] md:px-[4rem]">
            <div className="rounded-3xl bg-white p-2">
              <div className="h-24 w-full rounded-3xl grid place-content-center bg-red-100">
                <FaLinkedin size={40} className="animate-bounce" color="blue" />
              </div>
              <div className="flex flex-col items-center justify-between gap-[1rem] mt-[1rem]">
                <p className="font-bold text-2xl">
                  1<span className="text-pink-500">K</span>
                </p>
                <p>Linkedin Connections</p>
                <button className="rounded-3xl py-1 px-10 border-[1px] border-black font-bold hover:bg-black hover:text-white hover:duration-300 ease-in-out">
                  <a href="https://www.linkedin.com/in/uka-osim-9761601a0/">
                    Follow
                  </a>
                </button>
              </div>
            </div>
            <div className="rounded-3xl bg-white p-2">
              <div className="h-24 w-full rounded-3xl grid place-content-center bg-blue-100">
                <FaFacebookSquare
                  size={40}
                  className="animate-bounce"
                  color="blue"
                />
              </div>
              <div className="flex flex-col items-center justify-between gap-[1rem] mt-[1rem]">
                <p className="font-bold text-2xl">
                  3<span className="text-pink-500">K</span>
                </p>
                <p>Facebook Followers</p>
                <button className="rounded-3xl py-1 px-10 border-[1px] border-black font-bold hover:bg-black hover:text-white hover:duration-300 ease-in-out">
                  <a href="https://www.facebook.com/uka.osim.56/">Follow</a>
                </button>
              </div>
            </div>
            <div className="rounded-3xl bg-white p-2">
              <div className="h-24 w-full rounded-3xl grid place-content-center bg-red-100">
                <FaInstagramSquare
                  size={40}
                  className="animate-bounce"
                  color="red"
                />
              </div>
              <div className="flex flex-col items-center justify-between gap-[1rem] mt-[1rem]">
                <p className="font-bold text-2xl">
                  1.5<span className="text-pink-500">K</span>
                </p>
                <p>Instagram Followers</p>
                <button className="rounded-3xl py-1 px-10 border-[1px] border-black font-bold hover:bg-black hover:text-white hover:duration-300 ease-in-out">
                  <a href="https://www.instagram.com/ukaosim/">Follow</a>
                </button>
              </div>
            </div>
            <div className="rounded-3xl bg-white p-2">
              <div className="h-24 w-full rounded-3xl grid place-content-center bg-blue-100">
                <FaTwitterSquare
                  size={40}
                  className="animate-bounce"
                  color="blue"
                />
              </div>
              <div className="flex flex-col items-center justify-between gap-[1rem] mt-[1rem]">
                <p className="font-bold text-2xl">
                  1<span className="text-pink-500">K</span>
                </p>
                <p>Twitter Followers</p>
                <button className="rounded-3xl py-1 px-10 border-[1px] border-black font-bold hover:bg-black hover:text-white hover:duration-300 ease-in-out">
                  <a href="https://x.com/teamjojo_code?t=nfKgPXx7JQdazld0RzhgCQ&s=09">
                    Follow
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* projects */}
        <div className="px-[1rem] md:px-[5rem] py-[4rem]">
          <h1 className="text-center font-extrabold text-4xl mb-[2rem]">
            My Lastest Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
            <div>
              {/* <img src="" alt="" /> */}
              <div className="h-[200px] md:h-[350px] w-full md:w-[550px] bg-blue-300 rounded-3xl"></div>
              <h1 className="my-[1rem] font-extrabold text-xl">
                We are going to change
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                eveniet eaque magnam veritatis? Velit quia saepe itaque magnam
                sed nisi? Quos inventore nam veritatis alias eveniet suscipit
                voluptatum repellat nesciunt!
              </p>
              <div className="flex items-center gap-[2rem] my-[1rem]">
                <p>24 Jan 2024</p>|<p>2M+ Views</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between">
              <div className="flex flex-col md:flex-row items-center justify-between gap-[2rem]">
                {/* <img src="" alt="" /> */}
                <div className="h-[200px] md:h-[160px] w-full md:w-[220px] bg-blue-300 rounded-3xl"></div>
                <div className="md:h-[160px] md:w-[220px] grid place-content-center">
                  <h1 className="font-extrabold">
                    We are going to Ultranuim to platenu the beniau there to
                    cultivate.
                  </h1>
                  <div className="flex items-center gap-[0.5rem] my-[1rem]">
                    <p>24 Jan 2024</p>|<p>2M+ Views</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-[2rem]">
                {/* <img src="" alt="" /> */}
                <div className="h-[200px] md:h-[160px] w-full md:w-[220px] bg-blue-300 rounded-3xl"></div>
                <div className="md:h-[160px] md:w-[220px] grid place-content-center">
                  <h1 className="font-extrabold">
                    We are going to Ultranuim to platenu the beniau there to
                    cultivate.
                  </h1>
                  <div className="flex items-center gap-[0.5rem] my-[1rem]">
                    <p>24 Jan 2024</p>|<p>2M+ Views</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-[2rem]">
                {/* <img src="" alt="" /> */}
                <div className="h-[200px] md:h-[160px] w-full md:w-[220px] bg-blue-300 rounded-3xl"></div>
                <div className="md:h-[160px] md:w-[220px] grid place-content-center">
                  <h1 className="font-extrabold">
                    We are going to Ultranuim to platenu the beniau there to
                    cultivate.
                  </h1>
                  <div className="flex items-center gap-[0.5rem] my-[1rem]">
                    <p>24 Jan 2024</p>|<p>2M+ Views</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* products */}
        <div className="px-[1rem] md:px-[5rem] py-[4rem]">
          <h1 className="text-center font-extrabold text-4xl mb-[2rem]">
            My Projects
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <div className="h-[150px] md:h-[250px] w-full md:w-[350px] bg-blue-100 rounded-3xl"></div>
              <h1 className="font-bold mt-4 text-center">
                <a href="https://jojocodeeduhub.netlify.app/">
                  TJJC Online Store
                </a>
              </h1>
            </div>
            <div>
              <div className="h-[150px] md:h-[250px] w-full md:w-[350px] bg-blue-100 rounded-3xl"></div>
              <h1 className="font-bold mt-4 text-center">
                <a href="https://paraganinvest.com.ng/">
                  Paragan Investment Site
                </a>
              </h1>
            </div>
            <div>
              <div className="h-[150px] md:h-[250px] w-full md:w-[350px] bg-blue-100 rounded-3xl"></div>
              <h1 className="font-bold mt-4 text-center">
                Smart travel tent with adjuster
              </h1>
            </div>
          </div>
          <div className="grid place-content-center ">
            <button className="py-2 px-5 border-2 border-black font-bold rounded-3xl mt-[2rem] hover:bg-black hover:text-white">
              Explore All
            </button>
          </div>
        </div>
        {/* footer */}
        <div className="px-[1rem] md:px-[5rem] py-[4rem] bg-black text-white">
          JOUO
        </div>
      </div>
    </div>
  );
};

export default HomePage;
