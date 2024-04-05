import React from "react";
import UkaPhoto from "../images/uka.png";
import OsimUkaPhoto from "../images/osimuka.jpg";
import { FaBars, FaLinkedin, FaPhone } from "react-icons/fa";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
const HomePage = () => {
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
              Service
            </li>
            <li className="font-bold hover:text-gray-500 cursor-pointer">
              Work
            </li>
            <li className="font-bold hover:text-gray-500 cursor-pointer">
              Shop
            </li>
          </ul>
          <FaBars size={20} className="block md:hidden" />
          <button className="hidden md:block border-2 border-black py-2 px-6 font-semibold text-black rounded-3xl hover:bg-black hover:duration-300 hover:text-white">
            Contact Me
          </button>
          <button className="md:hidden border-2 border-black py-2 px-6 font-semibold text-black rounded-3xl">
            <FaPhone size={20} />
          </button>
        </div>
        {/* homecontent */}
        <div className="bg-[#BBDEFA] my-[4rem] grid grid-cols-1 md:grid-cols-2 gap-[4rem] md:gap-[8rem] px-[1rem] md:px-[5rem]">
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
            <button className="bg-black text-white rounded-3xl px-5 py-2 font-bold mb-[3rem] hover:scale-105">
              Hire Me
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
        <div className="bg-black h-14"></div>
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
                  <p>01+</p>
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
                  <p>01+</p>
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
                  <a
                    href="https://www.linkedin.com/in/uka-osim-9761601a0/"
                    target="_blank"
                  >
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
                  <a
                    href="https://www.facebook.com/uka.osim.56/"
                    target="_blank"
                  >
                    Follow
                  </a>
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
                  <a href="https://www.instagram.com/ukaosim/" target="_blank">
                    Follow
                  </a>
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
                  Follow
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
              <h1>Smart travel tent with adjuster</h1>
              <p>$33.00</p>
            </div>
            <div>
              <div className="h-[150px] md:h-[250px] w-full md:w-[350px] bg-blue-100 rounded-3xl"></div>
              <h1>Smart travel tent with adjuster</h1>
              <p>$33.00</p>
            </div>
            <div>
              <div className="h-[150px] md:h-[250px] w-full md:w-[350px] bg-blue-100 rounded-3xl"></div>
              <h1>Smart travel tent with adjuster</h1>
              <p>$33.00</p>
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
          OsimUka
        </div>
      </div>
    </div>
  );
};

export default HomePage;
